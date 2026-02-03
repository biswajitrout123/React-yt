import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='container'>
        <div className='card'>
            <img className='img' src="https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1>Biswajit Rout</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est.</p>
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card


