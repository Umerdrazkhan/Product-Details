import React from 'react'
import { BsBoxArrowUp } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Main1 from './main1';
import Main2 from './main2';
import Main3 from './main3';
const Main = () => {
  return (
    <>
    
      <div className='flex justify-around '>
        <div className='flex gap-8'>
            <div className='flex flex-col w-[458px]'>
                <div  className='bg-gray-100 h-[610px] rounded-xl'><img src='images/image 19.png'/></div>
                 <Main1/>
            </div>
            <div className=' flex flex-col justify-between h-[610px] bg-white w-13'>
              <div>
                <BsBoxArrowUp className='bg-gray-100 h-14 w-13 p-4 rounded-xl mb-3'/>
                <FaRegHeart  className='bg-gray-100 h-14 w-13 p-4 rounded-xl'/>
              </div>
              <div>
                <RiArrowRightSLine  className='bg-gray-200 h-14 w-13 p-4 rounded-xl'/>
                <MdOutlineKeyboardArrowLeft  className='bg-gray-200 h-14 w-13 p-4 rounded-xl mt-3'/>
              </div>
            </div>
        </div>
         <div className='w-[520px] flex flex-col justify-between mt-2'>
           <div>
             <div>
                <div>
                   <p className='w-[176px] mb-2 font-medium text-gray-400'>John Lewis ANYDAY</p>
                   <h1 className='w-[511px] font-bold text-3xl'>Long Sleeve Overshirt, Khaki, 6</h1>
                   <div className='flex justify-between w-[520px] mt-4'>
                     <p className='line-through'>£40.00 <span className='font-bold '>£28.00</span></p>
                     <div className='flex gap-2 w-[176px]'>
                       <p className='text-gray-400'>1,238 Sold</p>
                       <div className='flex gap-1.5 w-16'>
                        <p>icon</p>
                        <strong>4.5</strong>
                       </div>
                     </div>
                   </div>
                </div>
                <hr className='border-1 border-gray-400 border-dashed mt-6'/>
                <div className='mt-8'>
                   <strong>Description:</strong>
                   <p>Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon <button className='font-semibold'>See More...</button></p>
                   <div className='flex-col gap-2 mt-9'>
                     <p className='text-gray-400'>Color:  <span className='font-bold text-black'>Royal Brown</span></p>
                     <div className='flex gap-2 mt-7'>
                       <button className='w-20 h-10 rounded-[8px] opacity-90 bg-orange-900'></button>
                       <button className='w-20 h-10 rounded-[8px] bg-gray-300'></button>
                       <button className='w-20 h-10 rounded-[8px] opacity-90 bg-blue-900'></button>
                       <button className='w-20 h-10 rounded-[8px] opacity-95 bg-black'></button>
                     </div>
                   </div>
                   <div className='flex flex-col gap-3'>
                     <Main2/>
                   </div>
                </div>
             </div>
             <div className='flex justify-between mt-13'>
               <button className='w-[296px] h-14 bg-black border-1 rounded-[8px] text-white'>Add To Cart</button>
               <button className='w-[200px] h-14 border-1 rounded-[8px] border-gray-400'>Checkout Now</button>
             </div>
           </div>
           <p className='underline text-gray-400 mb-2.5'>Delivery T&C</p>
         </div>
      </div>
     
     
      {/* Main-2 */}
      <main className='flex flex-col items-center'>
         <hr className='border-1 border-gray-400 border-dashed mt-16 w-[1200px]'/>
        <div className='flex w-[1200px] justify-between mt-12 mb-9 '>
          <h2 className='font-bold text-2xl'>Related Product</h2>
          <button className='font-normal underline text-gray-500'>View All</button>
        </div>
        <Main3/>
      </main> 
      
    </>
  )
} 

export default Main