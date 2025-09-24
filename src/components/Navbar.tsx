import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GiFilmProjector } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";


const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
        <nav className='flex justify-between items-center p-4 bg-base-100 text-base-content'>
            <div>
                <h1 className='text-xl font-bold text-primary lg:text-4xl'>
                <a href="/" className='flex flex-row items-center gap-2'>
                <GiFilmProjector className='text-5xl'/> <span>CineFinder</span>
                </a></h1> 
            </div>
            <div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
                    {isMenuOpen ? <IoClose className='w-6 h-6'/> : <FaBars className='w-6 h-6'/>}
                </button>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-4 text-lg'>
                    <li
                        className="cursor-pointer"
                       
                    >
                        <NavLink style={{display:'flex', alignItems:'center',gap:'2px',justifyContent:'center'}} className={({isActive})=>isActive ? "text-primary" : ""} to={'/'}><IoIosHome/> <span>Home</span></NavLink>
                    </li>
                    <li
                        className="cursor-pointer"
                       
                    >
                        <NavLink style={{display:'flex', alignItems:'center',gap:'5px',justifyContent:'center'}} className={({isActive})=>isActive ? "text-primary" : ""} to={'/favorites'}><FaHeart/> <span>Favorites</span></NavLink>
                    </li>

                </ul>
            </div>

            {
                isMenuOpen && (
                    <div className='absolute top-16 right-4 bg-base-100 p-4 rounded-lg shadow-md lg:hidden '>
                <ul className='flex gap-4 text-lg flex-col'>
                    <li
                        className="cursor-pointer "
                       onClick={()=> setIsMenuOpen(false)}
                    >
                        <NavLink style={{display:'flex', alignItems:'center',gap:'2px',justifyContent:'center'}} className={({isActive})=>isActive ? "text-primary" : ""} to={'/'}><IoIosHome/> <span>Home</span></NavLink>
                    </li>
                    <li
                        className="cursor-pointer "
                       onClick={()=> setIsMenuOpen(false)}
                    >
                        <NavLink style={{display:'flex', alignItems:'center',gap:'5px',justifyContent:'center'}} className={({isActive})=>isActive ? "text-primary" : ""} to={'/favorites'}><FaHeart/> <span>Favorites</span></NavLink>
                    </li>

                </ul>
            </div>
                )
            }

        </nav>
    )
}

export default Navbar
