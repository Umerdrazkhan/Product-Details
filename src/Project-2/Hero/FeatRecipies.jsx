import React from 'react'
import { BiHeart, BiSolidStopwatch } from 'react-icons/bi';
import { PiForkKnifeFill } from 'react-icons/pi';
const FeatRecipies = () => {
  return (
    <>
      <div className='flex ml-12 mt-12'>
        <div className='bg-sky-100 w-[620px] h-[640px] flex flex-col justify-around rounded-l-4xl'>
            <button className='h-11 w-40 ml-8 bg-white rounded-full shadow-2xl shadow-gray-300 mt-8'>Hot Recipes</button>
            <div className='flex flex-wrap gap-y-7 mb-16 ml-8'>
                 <h1 className='text-6xl font-semibold leading-18'>Spicy delicious chicken wings</h1>
                 <p className='leading-7 text-gray-700 w-[520px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            
             <div className='flex gap-x-4 '>
                <button className='bg-gray-200 w-32 h-10 rounded-full text-gray-700 flex justify-center items-center gap-x-1'><span><BiSolidStopwatch/></span>30 Minutes</button>
                <button className='bg-gray-200 w-32 h-10 rounded-full text-gray-700 flex justify-center items-center gap-x-2'><span><PiForkKnifeFill/></span>Chicken</button>
           </div>
            </div>
            <div className='flex justify-between items-center mb-10 ml-8 mr-8'>
                <div className='flex gap-x-3'>
                    <img className='h-12' src='images2/Ellipse 2.png'/>
                    <div>
                        <strong>John Smith</strong>
                        <p>15 March 2022</p>
                    </div>
                </div>
                <div>
                     <button className='w-[200px] h-14 rounded-2xl bg-black text-white'>View Recipes</button>
                </div>
            </div>
        </div>
        <div >
            <img className='w-[620px] h-[640px]  rounded-r-4xl' src='images2/BakeWings.png'/>
        </div>
      </div>
    </>
  )
}

export default FeatRecipies