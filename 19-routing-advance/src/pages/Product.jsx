import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/mens'>Mens</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
        <Link className='text-xl font-semibold' to='/products/kids'>Kids</Link>
      </div>
      <h2>Product Page</h2>

      <Outlet />
    </div>
  )
}

export default Product


