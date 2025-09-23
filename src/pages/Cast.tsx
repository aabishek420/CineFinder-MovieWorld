import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



const Cast: React.FC<CastProps> = ({ movieId }) => {
  const fetchCast = async (): Promise<CastMember[]> => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/movie/${movieId}/credits`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    return res.data.cast; 
  };

  const { data, isLoading, error } = useQuery<CastMember[], Error>({
    queryKey: ["movieCast", movieId],
    queryFn: fetchCast,
    enabled: !!movieId,
  });

  if (isLoading) return <p>Loading cast...</p>;
  if (error) return <p>Error loading cast: {error.message}</p>;
  if (!data) return null;

  return (
    <div className=" bg-base-100 p-5">
      <h2 className=" mx-5 text-xl font-bold mb-4">Top Cast</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {data.slice(0, 10).map((actor) => (
          <div
            key={actor.id}
            className="w-32 flex-shrink-0 text-center text-white"
          >
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={actor.name}
              className="w-32 h-48 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-black font-bold text-sm">{actor.name}</p>
           <p className="text-xs text-gray-500">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
