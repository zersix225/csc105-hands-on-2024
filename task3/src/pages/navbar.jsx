import React, { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState('Home')  
    
    const handleClick = (link) => {
        setActive(link)  
    }

    return (
        <nav className='flex justify-between fixed w-full top-0 bg-white px-5 py-3'>
            <h1 className='cursor-pointer'>Artist Jhon</h1>

            <ul className='flex space-x-3'>
                <li>
                    <a
                        href="#"
                        className={`${active === 'Home' ? 'text-blue-600' : ''}`}  
                        onClick={() => handleClick('Home')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`${active === 'About Me' ? 'text-blue-600' : ''}`}  
                        onClick={() => handleClick('About Me')}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={` ${active === 'Gallery' ? 'text-blue-600' : ''}`} 
                        onClick={() => handleClick('Gallery')}
                    >
                        Gallery
                    </a>
                </li>
            </ul>

            <button className='cursor-pointer bg-gray-200 p-1 rounded-md'>Contact</button>
        </nav>
    )
}

export default Navbar
