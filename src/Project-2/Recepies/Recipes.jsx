import React from 'react'
import Images from './images'

const Recipes = () => {
  return (
    <>
      <div className='mr-12 ml-12 mt-32 '>
        <div className='flex flex-col items-center mb-18'>
            <h2 className='font-semibold text-5xl text-center'>Simple and tasty recipes</h2> <br/>
            <p className='leading-7 text-gray-500 text-center w-[700px] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div>
            <Images/>
        </div>
      </div>
    </>
  )
}

export default Recipes