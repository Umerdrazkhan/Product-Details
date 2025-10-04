import React from 'react'

const LearnMore = () => {
  return (
    <>
      <div className='xl:flex xl:ml-14 ml-0 mt-48'>
        <div className='xl:w-[600px] w-xs xl:ml-0 ml-3 flex flex-col justify-evenly' > 
            <div>
              <h2 className='xl:text-5xl text-2xl font-bold xl:font-semibold xl:leading-14 leading-7 mb-5'>Everyone can be a <br/>chef in their own kitchen</h2>
              <p className='xl:leading-7  w-[400px] xl:block text-gray-800'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <button className='w-[180px] h-14 rounded-2xl bg-black text-white xl:mt-0 mt-9 '>Learn More</button>
        </div>
        <div className='relative'> 
           <div className="xl:w-[641px] xl:h-[500px] w-auto h-[440px]  inset-x-0 top-0
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