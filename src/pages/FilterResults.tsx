import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import FilterSkeleton from '../Skeletons/FilterSkeleton';

const FilterResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const genre = params.get('genre');
  const year = params.get('year');
  const rating = params.get('rating');

  const fetchFilteredMovies = async () => {
    const queryParams = new URLSearchParams();
    if (genre) queryParams.append('with_genres', genre);
    if (year) queryParams.append('primary_release_year', year);
    if (rating) queryParams.append('vote_average.gte', String(Number(rating) * 2));
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/discover/movie?${queryParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
        },
      }
    );

    return res.data.results;
  };

  const { data: movies, isLoading, error } = useQuery(
    ['filteredMovies', genre, year, rating],
    fetchFilteredMovies
  );

  if (isLoading) return <FilterSkeleton />;
  if (error) return <div>Error loading movies</div>;
  if (!movies || movies.length === 0) return <div>No movies found</div>;

  return (
    <div>
      <h2 className='text-lg md:text-xl lg:text-3xl font-bold m-5 text-center'>Filtered Movies</h2>
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10'>
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterResults;
