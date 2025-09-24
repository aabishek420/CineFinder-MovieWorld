import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar: React.FC = () => {
  
    return (
        <nav className='flex justify-between items-center p-4 bg-base-100 text-base-content'>
            <div>
                <h1 className='text-xl font-bold text-primary lg:text-3xl'><a href="/">CineFinder</a></h1>
            </div>
            <div>
                <ul className='flex gap-4 text-lg'>
                    <li
                        className="cursor-pointer"
                       
                    >
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li
                        className="cursor-pointer"
                       
                    >
                        <NavLink to={'/favorites'}>Favorites</NavLink>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar
