import React from "react";
import { useFavourites } from "../contexts/FavouriteContext";
import MovieCard from "../components/MovieCard";

export const Favorites = () => {
  const { favourites,addToFavourites,isFavorite } : any = useFavourites();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Favorites</h1>

      {favourites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favourites.map((movie:any) => (
            <div
              key={movie.id}
              className="bg-base-100 rounded-lg shadow-md p-2 flex flex-col items-center relative"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

