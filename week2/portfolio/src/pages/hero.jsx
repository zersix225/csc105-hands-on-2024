import React from 'react'

import { Facebook, Instagram, Mail } from 'lucide-react'

const Hero = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 items-center px-10 min-h-screen'>

            <div className='order-2 mt-5 md:order-1'>
                <p className='font-bold'>Hello, It's me</p>
                <h1 className='font-bold text-5xl my-3'>Artist Jhon</h1>
                <p className='mb-2 font-bold'>I'm a Artist</p>
                <p>Please hold your breath as we dive into a world full of
                    creativity with designer John.
                </p>

                <div className='flex gap-2 my-6'>
                    <Facebook  className='cursor-pointer'/>
                    <Instagram className='cursor-pointer'/>
                    <Mail className='cursor-pointer'/>
                </div>

                <button className='bg-gray-200 p-1 rounded-md cursor-pointer'>My Portfolio</button>
            </div>
            <img 
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png" 
                alt="pic-profile"
                className='order-1 md:order-2 rounded-md'
            />
        </section>
    )
}

export default Hero
