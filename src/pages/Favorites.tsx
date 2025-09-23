import React from "react";
import { useFavourites } from "../contexts/FavouriteContext";

export const Favorites = () => {
  const { favourites,addToFavourites,isFavorite } = useFavourites();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Favorites</h1>

      {favourites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favourites.map((movie) => (
            <div
              key={movie.id}
              className="bg-base-100 rounded-lg shadow-md p-2 flex flex-col items-center relative"
            >
              Favorite toggle
              <button
                onClick={() => addToFavourites(movie)}
                className="absolute top-2 right-2"
              >
                <span
                  className={`text-lg ${
                    isFavorite(movie.id) ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  ♥
                </span>
              </button>

              {/* Poster */}
              <img
                className="w-40 rounded"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />

              {/* Title */}
              <h2 className="text-sm font-bold mt-2 text-center">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

