import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

      let navigate = useNavigate()


    return (
        <div className='py-2 px-5 bg-cyan-800'>

            {/* THIS NAVIGATE TO HOME PAGE DIRECTLY */}
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Return to Home Page
            </button>


            {/* IT TAKES YOUT O 1 SETP BACK */}
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back
            </button>



            {/* IT TAKES YOU TO 1 STEP FORWARD */}
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    )
}

export default Navbar2



