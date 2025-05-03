import React from 'react'

const About = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 items-center px-10 md:gap-10 min-h-screen'>
            <img
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png"
                alt="pic-profile"
                className='rounded-md'
            />
            <div>
                <h1 className='font-bold text-5xl my-3'>About Me</h1>
                <p className='my-6 font-bold'>Artist & Designer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui velit totam vel. Natus recusandae corrupti consequatur optio eius sequi soluta quo ratione. Sint autem officia aliquam iste rem blanditiis iusto reiciendis, nobis nesciunt mollitia vitae ipsum quaerat explicabo hic consequatur distinctio, tenetur eius. Alias quas deserunt fuga quo repellat.
                </p>

                <button className='mt-6 bg-gray-200 p-1 rounded-md'>Read More</button>
            </div>
        </section>
    )
}

export default About
