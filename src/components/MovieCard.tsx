import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useFavourites } from '../contexts/FavouriteContext';
import { useNavigate } from 'react-router-dom';



const MovieCard:React.FC<MovieCardProps> = ({movie}) => {

  const navigate = useNavigate();
     
    const {addToFavourites,isFavorite} = useFavourites();

    const getReleaseYear = (datestring:string)=>{
      if (!datestring) return 'N/A';
        const year = datestring.split('-')[0];
        return year;
    }

  return (
    <div className='bg-base-100 p-2 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 hover:scale-103 cursor-pointer transition-transform relative'
      onClick={()=> navigate(`/movie/${movie.id}`)}
    >
         <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToFavourites(movie);

        }}
        className="absolute top-2 right-2"
      >
       <FaHeart
          className={`w-5 h-5 ${
            isFavorite(movie.id) ? "text-red-500" : "text-gray-400"
          }`}
        />
      </button>
        <img className='w-50' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} />
        <h2 className='text-sm truncate w-50 text-center font-bold'>{movie.title}</h2>
        <div className='flex justify-between w-full px-2 text-sm items-center px-8'>
            <div className='flex flex-row items-center justify-center gap-1 text-primary/90 '>
                <CiStar/>
                <p>{Math.ceil(movie.vote_average)/2}</p>
            </div>
            <div>
                <p className='text-primary/90'>{getReleaseYear(movie.release_date)}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
