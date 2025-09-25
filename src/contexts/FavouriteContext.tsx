import { createContext, useEffect, useContext, useState } from "react";

// Create Context
export const FavouritesContext = createContext<any>(null);

// Custom Hook
export const useFavourites = () => useContext(FavouritesContext);

// Provider Component
const FavouritesProvider = ({ children }: any) => {
  const [favourites, setFavourites] = useState<Movie[]>([]);


  const addToFavourites = (movie: any) => {
    if (isFavorite(movie.id)) {
      removeFromFavourites(movie.id);
      return;
    }
    setFavourites((prev) => [...prev, movie]);
  };

  // Remove movie by ID
  const removeFromFavourites = (movieId: number) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favourites.some((movie) => movie.id === movieId);
  }

  // Load favourites from localStorage
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, isFavorite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
