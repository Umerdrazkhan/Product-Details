import React from 'react'
import { FaFacebook, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className='h-[190 px] flex flex-col justify-around mr-12 ml-12 mt-28 mb-10'>
         <img src='images2/Foodieland..png' className='w-[140px] h-6 '/>
         <div className='flex justify-between mb-10 mt-4'>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            <div className='flex gap-x-12 list-none font-medium'>
                <li>Recipes</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About us</li>
            </div>
         </div>
          <hr className='border-1 border-gray-300 '/>
          <div className='flex justify-between items-center mb-5 mt-7 '>
            <p className='font-medium text-[18px] text-gray-500 text-center'>© 2020 Flowbase. Powered by <span className='text-red-500'>Webflow</span></p>
             <div className='flex gap-x-8 '>
               <FaFacebookF/>
               <FaTwitter/>
               <FiInstagram/>
             </div>
          </div>
      </div>
    </>
  )
}

export default Footer