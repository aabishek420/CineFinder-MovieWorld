import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Trailer from "../components/Trailer";
import MovieDetailsSkeleton from "../Skeletons/MovieDetailsSkeleton";



const MovieDetails = () => {
  const { movie_id } = useParams<{ movie_id: string }>();

  const fetchMovieDetails = async (): Promise<Movie> => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/movie/${movie_id}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    return res.data;
  };

  const { data, isLoading, error } = useQuery<Movie, Error>({
    queryKey: ["movieDetails", movie_id],
    queryFn: fetchMovieDetails,
    enabled: !!movie_id,
  });

  if (isLoading) return <MovieDetailsSkeleton />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center p-6"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative flex items-center flex-col lg:flex-row gap-8 z-10 max-w-6xl mx-auto text-white">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            className="w-54 lg:w-67 rounded-lg shadow-lg "
          />
          <div className="max-w-3xl">

            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl mb-4 font-bold">
              {data.title}
              <span className="text-gray-300 text-2xl">
                ({new Date(data.release_date).getFullYear()})
              </span>
            </h1>

            <p className="text-gray-300 mt-1">
              {new Date(data.release_date).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}{" "}
              • {data.genres.map((g) => g.name).join(", ")} •{" "}
              {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-2 text-gray-200 text-justify">{data.overview}</p>
            </div>


            <div className="mt-4">
              <p className="font-semibold">Ratings</p>
              <p className="text-gray-300">{Math.ceil(data.vote_average)/2}/5</p>
            </div>
          </div>
        </div>
      </div>
      <Cast movieId={movie_id!} />
      <Trailer movieId={movie_id!} />
     
    </>
  );
};

export default MovieDetails;
