import React from 'react'
import Navbar from '@/pages/navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className='pt-16'>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
