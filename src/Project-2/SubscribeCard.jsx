import React from 'react'

const SubscribeCard = () => {
  return (
    <>
      <div className='h-[448px] bg-sky-100 relative overflow-hidden rounded-[52px] ml-12 mr-12 mt-32'>
        <div className='flex justify-center items-center'>
        <div className='w-[600px] h-[280px] flex flex-wrap justify-center items-center mt-16'>
            <h2 className='text-5xl font-semibold'>Deliciousness to your inbox</h2>
            <p className='leading-7 text-center text-gray-800'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='flex  w-[480px] h-16 rounded-2xl items-center bg-white justify-between'>
                <input placeholder='Your email address...' className='border-none text-center ml-2'/>
                <button className='bg-black text-md rounded-2xl text-white w-[160px] h-14 mr-1'>Subscribe</button>
            </div>
        </div>
        </div>
        <div className='flex justify-between '>
            <img src='images2/image 39.png'  className='absolute bottom-28 left-8/11 '/>
           <img src='images2/image 38.png' className='absolute bottom-0 left-0 w-[380px] h-[400px]'/>
            <img src='images2/Photo-plate.png' className='absolute bottom-0 left-8/10 w-[305px] h-[275px]'/> 
        </div>
      </div>
    </>
  )
}

export default SubscribeCard