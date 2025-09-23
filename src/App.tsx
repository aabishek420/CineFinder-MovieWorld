import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import { Favorites } from './pages/Favorites'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movie/:movie_id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
  )
}

export default App
