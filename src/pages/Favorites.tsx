import React from "react";
import { useFavourites } from "../contexts/FavouriteContext";
import MovieCard from "../components/MovieCard";

export const Favorites = () => {
  const { favourites,addToFavourites,isFavorite } : any = useFavourites();

  return (
    <div className="p-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">My Favorites</h1>

      {favourites.length === 0 ? (
        <p className="text-center text-base-content/80">No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favourites.map((movie:any) => (
            <div
              key={movie.id}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

