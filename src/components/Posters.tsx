import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Posters: React.FC<PosterProps> = ({ movieId }) => {
  const fetchImages = async (): Promise<MovieImagesResponse> => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/movie/${movieId}/images`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
        },
      }
    );
    return res.data;
  };

  const { data, isLoading, error } = useQuery<MovieImagesResponse, Error>({
    queryKey: ["movieImages", movieId],
    queryFn: fetchImages,
    enabled: !!movieId,
  });

  if (isLoading) return <p>Loading images...</p>;
  if (error || !data) return <p>Error loading images</p>;

  return (
    <div className="bg-base-100 py-6">
      <h2 className="text-xl font-bold mb-4 text-center">Posters</h2>
      <div className="flex gap-4 overflow-x-auto px-6">
        {data.posters.map((img, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
            alt={`Poster ${index + 1}`}
            className="w-48 h-72 object-cover rounded-lg shadow-md flex-shrink-0"
          />
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-center">Backdrops</h2>
      <div className="flex gap-4 overflow-x-auto px-6">
        {data.backdrops.map((img, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
            alt={`Backdrop ${index + 1}`}
            className="w-64 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Posters;
