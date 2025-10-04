import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Nav = () => {
  return (
   <>
   <nav className='flex justify-between mr-13 ml-13 items-center mt-10 mb-10'>
     <div>
        <img className='h-5' src='images2/Foodieland..png'/>
     </div>
     <div className='flex justify-between items-center gap-x-16'>
        {
          ["Home","Recipes","Blog","Contact","About us"].map((i,id)=>(
            <li  className='font-medium list-none' key={id}>{i}</li>
             ))
        }
     </div>
     <div  className='flex justify-between items-center gap-x-8'>
         <div><FaFacebookF className='size-4'/></div>
         <div><FaTwitter className='size-4'/></div> 
         <div><FiInstagram className='size-4'/></div>
     </div>
    </nav> 
    <hr className='border-1 border-gray-200'/>
   </>
  )
}

export default Nav