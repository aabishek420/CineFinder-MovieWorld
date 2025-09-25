
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import { Favorites } from './pages/Favorites'
import SearchResults from './pages/SearchResults'
import FilterResults from './pages/FilterResults'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/movie/:movie_id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path='/search' element={<SearchResults />} />
      <Route path='/filter' element={<FilterResults />} />
    </Routes>
  )
}

export default App
