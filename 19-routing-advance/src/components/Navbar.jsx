import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-cyan-900 justify-between'>
        <h2 className='text-2xl font-bold'>Biswajit Rout</h2>
        <div className='flex gap-10 '>
            <a className='text-lg font-medium' href="/">Home</a>
            <a className='text-lg font-medium' href="/about">About</a>
            <a className='text-lg font-medium' href="/product">Product</a>
        </div>
    </div>
  )
}

export default Navbar



