import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-4 bg-base-100 text-base-content'>
            <div>
                <h1 className='text-3xl'>CineFinder</h1>
            </div>
            <div>
                <ul className='flex gap-4 text-lg'>
                    <li>Home</li>
                    <li>Favourites</li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
