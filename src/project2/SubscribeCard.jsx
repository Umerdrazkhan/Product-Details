import React from 'react'

const SubscribeCard = () => {
  return (
    <>
      <div className='xl:h-[430px] h-[300px] bg-sky-100 relative overflow-hidden xl:rounded-[52px] rounded-2xl xl:ml-12 xl:mr-12 mt-32 '>
        <div className='flex justify-center items-center'>
        <div className='xl:w-[600px] w-[370px] xl:h-[280px] h-[200px] flex flex-wrap justify-center items-center xl:mt-12 mt-4'>
            <h2 className='xl:text-5xl text-2xl font-semibold'>Deliciousness to your inbox</h2>
            <p className='xl:leading-7 text-xs xl:text-[16px] text-center text-gray-800'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='flex  xl:w-[480px] w-[280px] xl:h-16 h-12 rounded-2xl items-center bg-white justify-between'>
                <input placeholder='Your email address...' className='border-none text-center ml-2'/>
                <button className='bg-black xl:text-md text-sm xl:rounded-2xl rounded-xl text-white xl:w-[160px] w-[120px] xl:h-14 h-10 mr-1'>Subscribe</button>
            </div>
        </div>
        </div>
        <div className='flex justify-between '>
            <img src='images2/image 39.png'  className='absolute bottom-28 left-8/11 xl: w-32 h-32 hidden xl:block'/>
           <img src='images2/image 38.png' className='absolute bottom-0 left-0  w-40 h-48 xl:w-[375px] xl:h-[405px]'/>
            <img src='images2/Photo-plate.png' className='absolute bottom-0 left-8/10 xl:w-[360px] xl:h-[235px]  w-60 h-42'/> 
            
        </div>
       </div> 
    </>
  )
}

export default SubscribeCard