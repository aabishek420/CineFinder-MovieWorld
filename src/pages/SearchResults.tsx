import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';

import FilterSkeleton from '../Skeletons/FilterSkeleton';

const SearchResults = () => {

    const navigate = useNavigate();

    const query = new URLSearchParams(window.location.search);
    const searchTerm = query.get('query');
    // console.log(searchTerm);

    const fetchSearchResults = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/search/movie?query=${searchTerm}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
            'Content-Type': 'application/json;charset=utf-8'
          }
        });
        return res.data.results;
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['searchResults', searchTerm],
        queryFn: fetchSearchResults,
        enabled: !!searchTerm
    });
    if (isLoading) return <FilterSkeleton />;
   if (error) return <div>Error: {(error as Error)?.message || String(error)}</div>;
    if (!data || data.length === 0) return <div className="text-center font-semibold mt-5 text-base-content/80">No results found for "{searchTerm}"</div>


  return (
    <div>
      {data.length !== 0 && (
        <div className='p-10'>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>Search Results for "{searchTerm}"</h2>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                
            >
                {
                data.map((movie : any) => (
                    <div onClick={()=> navigate(`/movie/${movie.id}`)} key={movie.id}>
                        <MovieCard 
                     
                    movie={movie} 
                    />
                    </div>
                ))
            }
            </div>
        </div>
      )}
    </div>
  )
}

export default SearchResults
