import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { Link } from "react-router-dom";
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import HomeSkeleton from '../Skeletons/HomeSkeleton';

const Home = () => {

  const fetchTrendingMovies = async (): Promise<Movie[]> => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    return res.data.results;
  }

  const { data, isLoading, error } = useQuery<Movie[], Error>({
    queryKey: ['trendingMovies'],
    queryFn: fetchTrendingMovies
  })

  if (isLoading) return <div className=''>
    <HomeSkeleton />
  </div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
  
    <div className='p-10'>
      <SearchBar />
      <FilterPanel />
      <h1 className='text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-primary font-bold mb-5'>Trending Movies</h1>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
     </div>   
      </>
  )
}

export default Home
