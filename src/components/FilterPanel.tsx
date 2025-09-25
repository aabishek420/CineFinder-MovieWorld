import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterPanel = () => {
  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const fetchGenres = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/genre/movie/list`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    return res.data.genres;
  };

  const { data: genres } = useQuery(['genres'], fetchGenres);

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (selectedGenre) params.append('genre', selectedGenre);
    if (selectedYear) params.append('year', selectedYear);
    if (selectedRating) params.append('rating', selectedRating);
    navigate(`/filter?${params.toString()}`);
  };

  return (
    <div>
    <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 '>
      <div className='bg-base-100 items-center justify-center font-semibold inline-flex p-3 mb-6  rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}
          className='bg-base-100 border-none focus:outline-none'
          >
          <option value="">Sort by Genre</option>
          {genres?.map((genre : any) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div >
      <div className='bg-base-100 items-center justify-center font-semibold inline-flex p-3 mb-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}
          className='bg-base-100 border-none focus:outline-none'
          >
          <option value="">Sort by Year</option>
          {Array.from({ length: 123 }, (_, i) => 2025 - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className='bg-base-100 items-center justify-center font-semibold inline-flex p-3 mb-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'>
        <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}
          className='bg-base-100 border-none focus:outline-none'
          >
          <option value="">Sort by Rating</option>
          {Array.from({ length: 5 }, (_, i) => 5 - i).map(rating => (
            <option key={rating} value={rating}>{rating}+</option>
          ))}
        </select>
      </div>
      <div 
      className='bg-primary text-primary-content cursor-pointer items-center justify-center font-semibold inline-flex p-3 mb-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'
      onClick={handleFilter}
      >
         <button className='cursor-pointer'>Apply Filters</button>
      </div>
     </div>
    </div>
  );
};

export default FilterPanel;
