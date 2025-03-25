import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    return (
        <nav className='flex justify-between fixed w-full top-0 bg-white px-5 py-3'>
            <ul className='flex space-x-3'>
                <li>
                    <Link
                        to='/'
                        className={`${location.pathname === '/' ? 'text-blue-600' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='/login'
                        className={`${location.pathname === '/login' ? 'text-blue-600' : ''}`}
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to='/fav'
                        className={`${location.pathname.startsWith('/fav') ? 'text-blue-600' : ''}`}
                    >
                        Favourite
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
