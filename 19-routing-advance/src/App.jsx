import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Mens from './pages/Mens'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Product' element={<Product />}>
          <Route path='mens' element={<Mens />} />
          <Route path='women' element={<Women />} />
          <Route path='Kids' element={<Kids />}/>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App


























