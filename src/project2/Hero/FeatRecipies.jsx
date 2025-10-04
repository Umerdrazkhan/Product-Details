import React from 'react'
import { BiHeart, BiSolidStopwatch } from 'react-icons/bi';
import { PiForkKnifeFill } from 'react-icons/pi';
const FeatRecipies = () => {
  return (
    <>
      <div className='xl:flex xl:ml-12  xl:mt-12 mt-8 xl:mr-12 block'>
        <div className='bg-sky-100 xl:w-[620px] w-full xl:h-[640px] h-[450px]  flex flex-col justify-around xl:rounded-l-4xl rounded-t-2xl'>
            <button className='hidden xl:block h-11 w-40 ml-8 bg-white rounded-full shadow-2xl shadow-gray-300 mt-8'>Hot Recipes</button>
            <div className='xl:flex flex-wrap gap-y-7 xl:mb-16 xl:ml-8 ml-4'>
                 <h1 className='xl:text-6xl text-5xl font-semibold xl:leading-18 leading-18'>Spicy delicious chicken wings</h1>
                 <p className='leading-7 text-gray-700 xl:w-[520px] w-[380px] text-sm xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            
             <div className='flex gap-x-4  mt-6'>
                <button className='bg-gray-200 w-32 h-10 rounded-full text-gray-700 flex justify-center items-center gap-x-1'><span><BiSolidStopwatch/></span>30 Minutes</button>
                <button className='bg-gray-200 w-32 h-10 rounded-full text-gray-700 flex justify-center items-center gap-x-2'><span><PiForkKnifeFill/></span>Chicken</button>
             </div>
            </div>
            <div className='flex justify-between items-center xl:mb-10 xl:ml-8 xl:mr-8 ml-6 '>
                <div className='xl:flex gap-x-3  hidden'>
                    <img className='xl:h-12 ' src='images2/Ellipse 2.png'/>
                    <div>
                        <strong>John Smith</strong>
                        <p>15 March 2022</p>
                    </div>
                </div>
                <div>
                     <button className='xl:w-[200px] w-[360px] xl:h-14 h-10 rounded-xl xl:rounded-2xl bg-black text-white'>View Recipes</button>
                </div>
            </div>
        </div>
        <div >
            <img className='xl:w-[620px] xl:h-[640px] h-[400px] w-[430px] xl:rounded-r-4xl rounded-b-2xl' src='images2/BakeWings.png'/>
        </div>
      </div>
    </>
  )
}

export default FeatRecipies