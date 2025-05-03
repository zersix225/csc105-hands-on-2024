import React from 'react'
import {
  Hero,
  Login,
  Favourite,
  FavouriteDetail,
  PageNotFound,
  SignUp
} from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from '@/layouts/root-layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path='fav' element={<Favourite />} />
          <Route path="fav/:id" element={<FavouriteDetail />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
