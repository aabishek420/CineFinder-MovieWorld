import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

    const [query, setQuery] = useState('');


    const navigate = useNavigate();

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        if(query.trim() === '') return;
        navigate(`/search?query=${query}`);
        setQuery('');
    }

  return (
    <div className='flex flex-col justify-center p-4 gap-5 py-10'>
      <div>
        <h1 className='text-center text-3xl font-bold text-primary'>Find The Movies You Love</h1>
      </div>
      <form className='bg-base-100 flex items-center gap-2 border border-gray-300 rounded-lg p-2 mt-2'
        onSubmit={handleSubmit}
      >
        <CiSearch /> 
        <input type='text' placeholder='Search for movies...' className='flex-1 border-none outline-none' value={query} onChange={(e)=>setQuery(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchBar
