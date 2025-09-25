import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CastSkeleton from "../Skeletons/CastSkeleton";



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

  if (isLoading) return <CastSkeleton />;
  if (error) return <p>Error loading cast: {error.message}</p>;
  if (!data) return null;

  return (
    <div className=" bg-base-100 py-6">
      <h2 className=" mx-5 text-xl font-bold mb-4">Top Cast</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 px-6">
        {data.slice(0, 10).map((actor) => (
          <div
            key={actor.id}
            className=" w-32 flex-shrink-0 text-center"
          >
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://placehold.co/200x300/png?text=No+Image"
              }
              alt={actor.name}
              className="w-32 h-48 object-cover rounded-lg shadow-md"
            />
            <p className="text-sm mt-2 font-semibold">{actor.name}</p>
           <p className="text-sm">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
