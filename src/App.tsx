import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/movie/:movie_id" element={<MovieDetails />} />
       
        </Routes>
    </BrowserRouter>
  )
}

export default App
