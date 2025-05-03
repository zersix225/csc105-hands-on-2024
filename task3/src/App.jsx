import React from 'react'
import { Navbar, Hero, About, Gallery } from '@/pages'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <div className='min-h-screen md:pt-20 pt-16'>
        <Hero />
        <About />
        <Gallery />
      </div>
    </div>
  )
}

export default App
