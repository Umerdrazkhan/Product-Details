import React from 'react'
import { FaFacebook, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className='h-[190 px] flex flex-col justify-around xl:mr-12 xl:ml-12 xl:mt-28 mt-16 xl:mb-10 mb-7'>
         <img src='images2/Foodieland..png' className='w-[140px] h-6 ml-7 xl:ml-0'/>
         <div className='xl:flex justify-between xl:mb-10 xl:mt-4 mt-3 mb-5 text-center'>
            <p className='text-gray-800w w-[400px] '>Lorem ipsum dolor sit amet, consectetuipisicing, </p>
            <div className='xl:flex gap-x-12 list-none font-medium hidden'>
                <li>Recipes</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About us</li>
            </div>
         </div>
          <hr className='border-1 border-gray-300 '/>
          <div className=' xl:justify-between  items-center mb-5 mt-7 flex  flex-col-reverse'>
            <p className='font-medium xl:text-[18px] text-gray-500 text-center xl:mt-0 mt-4'>© 2020 Flowbase. Powered by <span className='text-red-500'>Webflow</span></p>
             <div className='flex gap-x-8 justify-center'>
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