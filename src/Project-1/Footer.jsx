import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
//import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
const Footer = () => {
  return (
    <>
      <div className='h-[385px] bg-gray-100 flex flex-col items-center justify-evenly '>
        <div className='flex h-[170px] justify-between '>
           <div className='h-[160px] w-[310px]'>
             <div className='flex flex-col mt-3 gap-y-10 '>
                <img className='h-8 w-[170px]' src='images/image 16.png'/>
                <div className='flex justify-between'>
                <p>Get latest offers to your inbox</p>
                <div className='h-7 w-10 mr-12 rounded-[8px] bg-black flex justify-center items-center'><RiArrowRightSLine className='text-white'/></div>
                </div> 
             </div>
             <div className='flex gap-x-3 mt-3'>
              <div className='bg-white h-8 w-8 rounded-full flex justify-center items-center'><FiFacebook className='size-4'/></div>
              <div className='bg-white h-8 w-8 rounded-full flex justify-center items-center'><MdOutlineMarkEmailUnread className='size-4'/></div>
               <div className='bg-white h-8 w-8 rounded-full flex justify-center items-center'><FiInstagram className='size-4'/></div>
                <div className='bg-white h-8 w-8 rounded-full flex justify-center items-center'><FiTwitter className='size-4'/></div>
             </div>
           </div>
           <div className='flex flex-wrap justify-evenly w-[870px]'>
             <div>
                <strong className=''>Shop</strong>
                <div className='list-none mt-4 flex flex-col gap-1.5'>
                  <li>My account</li>
                  <li>Login</li>
                  <li>Wishlist</li>
                  <li>Cart</li>
                </div>
             </div>
             <div>
               <strong>Information</strong>
                <div  className='list-none mt-4 flex flex-col gap-1.5'>
                  <li>Shopping Policey</li>
                  <li>Return & Refund</li>
                  <li>Cookies Policey</li>
                  <li>Cart</li>
                </div>
             </div>
             <div>
               <strong>Company</strong>
                <div className='list-none mt-4 flex flex-col gap-1.5'>
                  <li>About us</li>
                  <li>Privacy Policey</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                </div>
             </div>
           </div>
        </div>
        <hr className='border-1 border-gray-300 border-dashed w-[1200px]'/>
        <div className='flex justify-between w-[1200px]'>
          <p>© John Lewis plc 2001 - 2024</p>
          <div className='flex gap-x-6'>
            <p>icon</p>
            <p>ixon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer