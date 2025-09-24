import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
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
    <div className='flex items-center justify-center gap-4'>
      <div className='bg-base-100 items-center justify-center  inline-flex p-4 mb-6  rounded-full shadow-md'>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">Sort by Genre</option>
          {genres?.map((genre : any) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div >
      <div className='bg-base-100 items-center justify-center inline-flex p-4 mb-6 rounded-full shadow-md'>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">Sort by Year</option>
          {Array.from({ length: 123 }, (_, i) => 2025 - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className='bg-base-100 items-center justify-center inline-flex p-4 mb-6 rounded-full shadow-md'>
        <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
          <option value="">Sort by Rating</option>
          {Array.from({ length: 5 }, (_, i) => 5 - i).map(rating => (
            <option key={rating} value={rating}>{rating}+</option>
          ))}
        </select>
      </div>
      <div className='bg-base-200 items-center justify-center  inline-flex p-4 mb-6 rounded-full shadow-md hover:bg-blend-hard-light'>
         <button onClick={handleFilter}>Apply Filters</button>
      </div>
     </div>
    </div>
  );
};

export default FilterPanel;
