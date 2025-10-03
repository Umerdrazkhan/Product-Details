import React from 'react'
 import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
 import { IoIosContact } from 'react-icons/io';
 import { FaRegHeart } from 'react-icons/fa';
 import { BiShoppingBag } from 'react-icons/bi';
import Random from './random';


function Header() {
  return (
    <>
      <header>
        {/* offer */}
        <div className='bg-black text-white xl:w-full sm:w-[375px] flex gap-5 justify-center items-center h-11'>
            <p>New season coming!  Discount 10% for all product!  Checkout Now!</p>
            <div className='bg-gray-700 w-18 text-center rounded-2xl'><strong className='text-white-700'>20:40</strong></div> 
        </div>
        {/* logos and icons */}
        <div className='flex flex-col  items-center'>
        <div className='flex h-12 w-[1200px] pr- mt-7 mb-5 justify-between items-center'>
          <div><img src='images/image 16.png'/></div>
          <div className='flex justify-center gap-7 items-center'>
             <div><HiMiniMagnifyingGlass/></div>
             <div>Categories</div>
             <div className='flex gap-2 items-center'> <IoIosContact/>Sign in</div>
             <div><FaRegHeart/></div>
             <div><BiShoppingBag/></div>  
          </div>
        </div>
         <hr className='w-[1200px] border-1 border-dashed border-gray-300'/>
          
      </div>
         {/* Pagination */}
         <div className='flex ml-18'><Random /></div> 
      </header>
       
    </>
  )
}
export default Header