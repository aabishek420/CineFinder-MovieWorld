import React, { createContext, useEffect, useContext, useState } from "react";

// Create Context
export const FavouritesContext = createContext();

// Custom Hook
export const useFavourites = () => useContext(FavouritesContext);

// Provider Component
const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Add movie to favourites
  const addToFavourites = (movie) => {
    if (isFavorite(movie.id)){
      removeFromFavourites(movie.id);
      return;
    }
    setFavourites((prev) => [...prev, movie]);
  };

  // Remove movie by ID
  const removeFromFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
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
