import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GiFilmProjector } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.querySelector("#root")?.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.querySelector("#root")?.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.querySelector("#root")?.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };
  
    return (
        <nav className='flex justify-between items-center p-4 bg-base-100 text-base-content'>
            <div>
                <h1 className='text-xl font-bold text-primary lg:text-4xl'>
                <a href="/" className='flex flex-row items-center gap-2'>
                <GiFilmProjector className='text-5xl'/> <span>CineFinder</span>
                </a></h1> 
            </div>
            <div className='flex gap-4 lg:hidden justify-center items-center'>
                <div>
                    {
                            isDarkMode ? (
                                <button onClick={toggleDarkMode} className='text-yellow-400'>
                                    <IoSunny className='w-6 h-6'/>
                                </button>
                            ) : (
                                <button onClick={toggleDarkMode} className='text-primary'>
                                    <FaMoon className='w-5 h-5'/>
                                </button>
                            )
                        }
                </div>
                <div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
                    {isMenuOpen ? <IoClose className='w-6 h-6'/> : <FaBars className='w-6 h-6'/>}
                </button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-4 text-lg justify-center items-center'>
                    <div className='bg-base-300 rounded-full p-2'>
                        {
                            isDarkMode ? (
                                <button onClick={toggleDarkMode} className='text-yellow-400 cursor-pointer flex items-center justify-center'>
                                    <IoSunny className='w-6 h-6'/>
                                </button>
                            ) : (
                                <button onClick={toggleDarkMode} className='text-primary cursor-pointer flex items-center justify-center'>
                                    <FaMoon className='w-5 h-5'/>
                                </button>
                            )
                        }
                    </div>
                    <div className='flex gap-6'>
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

                    </div>
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
