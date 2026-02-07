import React from 'react'
import 'remixicon/fonts/remixicon.css'

const JobCard = () => {
  return (
    <div className="min-h-screen bg-[#FDE6DE] flex items-center justify-center">
      
      <div className="w-[340px] min-h-[260px] bg-[#FFF6E5] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
        
        {/* Top section */}
        <div>
          <p className="text-sm font-semibold">$120/hr</p>
          <h2 className="text-2xl font-semibold mt-4">
            Senior UI Developer
          </h2>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between mt-6">
          <i className="ri-nike-fill text-2xl"></i>

          <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
            View
          </button>
        </div>

      </div>

    </div>
  )
}

export default JobCard
