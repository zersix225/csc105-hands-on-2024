import React from 'react'

const Gallery = () => {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center mt-16'>
            <h1 className='text-center mb-10 font-bold text-5xl'>Gallery</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-20'>
                <div className='card'>
                    <img src="https://picsum.photos/200" alt="Gallery Item" className='rounded-md' />
                </div>
                <div className='card'>
                    <img src="https://picsum.photos/200" alt="Gallery Item" className='rounded-md'/>
                </div>
                <div className='card'>
                    <img src="https://picsum.photos/200" alt="Gallery Item" className='rounded-md'/>
                </div>
                <div className='card'>
                    <img src="https://picsum.photos/200" alt="Gallery Item" className='rounded-md'/>
                </div>
                <div className='card'>
                    <img src="https://picsum.photos/200" alt="Gallery Item" className='rounded-md'/>
                </div>
                <div className='card'>
                    <img src="https://picsum.photos/200" alt="Gallery Item" className='rounded-md'/>
                </div>
            </div>
        </section>

    )
}

export default Gallery
