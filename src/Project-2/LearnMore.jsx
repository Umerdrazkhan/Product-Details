import React from 'react'

const LearnMore = () => {
  return (
    <>
      <div className='flex ml-14 mt-48'>
        <div className='w-[600px]  flex flex-col justify-evenly' > 
            <div>
              <h2 className='text-5xl font-semibold leading-14 mb-5'>Everyone can be a <br/>chef in their own kitchen</h2>
              <p className='leading-7 text-gray-800'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <button className='w-[180px] h-14 rounded-2xl bg-black text-white '>Learn More</button>
        </div>
        <div className='relative'> 
           <div className="w-[641px] h-[500px]   inset-x-0 top-0
              bg-gradient-to-b 
              from-white/100 via-white/80 to-transparent 
              backdrop-blur-sm 
              pointer-events-none  rounded-2xl  flex  justify-center items-end bg-sky-100">
           </div>
           <img src='images2/chef.png' className='absolute bottom-0 right-13'/>
        </div>
      </div>
    </>
  )
}

export default LearnMore