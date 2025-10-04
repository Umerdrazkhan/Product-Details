
 import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FeatRecipies from '../Project-2/Hero/FeatRecipies';

const Swip = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full flex"
      >
        <SwiperSlide className="   h-[800px] bg-blue-700">
          <FeatRecipies/>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[800px] ">
            <FeatRecipies/>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center   h-[800px]">
           <FeatRecipies/>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center h-[800px] ">
           <FeatRecipies/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swip;





import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const array = [
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle.png" },
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle (1).png" },
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle (2).png" },
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle (3).png" },
];

const Instagram = () => {
  return (
    <div className="max-w-full h-full xl:h-[856px] flex flex-col justify-evenly inset-x-0 top-0
                    bg-gradient-to-b from-white/100 via-white/80 to-transparent 
                    backdrop-blur-sm rounded-2xl mt-24 bg-sky-100">

      {/* Header */}
      <div className='flex flex-col items-center text-center'>
        <h2 className='xl:text-4xl text-2xl font-bold tracking-wide mb-5'>
          Check out @foodieland on Instagram
        </h2>
        <p className='text-gray-800 leading-6 xl:w-[740px] hidden sm:block text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* ✅ Swiper directly here */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full flex justify-center "
      >
        {array.map((i, id) => (
          <SwiperSlide key={id} className=" justify-center grid grid-cols-1">
            <div className='w-[290px] h-[480px] bg-white xl:flex flex-col justify-evenly shadow-md'>
              {/* Top bar */}
              <div className='flex justify-between items-center h-11 px-3'>
                <div className='flex space-x-2 items-center'>
                  <img src='images2/Oval1.png' alt='profile' className='h-7 w-7 rounded-full' />
                  <div className='leading-tight'>
                    <strong className='text-[14px]'>{i.strong}</strong>
                    <p className='text-xs'>{i.text}</p>
                  </div>
                </div>
                <BsThreeDots />
              </div>

              {/* Post image */}
              <img src={i.img} alt='post' className='w-full object-cover' />

              {/* Post actions */}
              <div className='px-3 flex flex-col gap-y-2 mt-4 mb-4'>
                <div className='flex justify-between'>
                  <div className='flex gap-x-3'>
                    <FaRegHeart className='size-5' />
                    <TbMessageCircle className='size-5' />
                    <IoPaperPlaneOutline className='size-5' />
                  </div>
                  <BsBookmark className='size-5' />
                </div>

                <div className='flex gap-x-1.5 items-center'>
                  <img src='images2/Oval.png' alt='liked' className='h-5 w-5 rounded-full' />
                  <p className='text-xs tracking-wide'>
                    Liked by <span className='font-semibold'>craig_love</span> and 44,686 others
                  </p>
                </div>

                <p className='text-xs tracking-wide'>
                  <span className='font-semibold'>Foodieland.</span> The vegetable dishes need to have certain vitamins for those people.
                </p>
                <p className='text-gray-800 text-xs font-semibold'>September 19</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button */}
      <div className='text-center mt-10'>
        <button className='bg-black text-white w-[230px] h-14 rounded-2xl text-[14px] font-semibold'>
          Visit Our Instagram
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Nav = () => {
  const[toggle,setToggle]=useState(false)
  function handleClick(){
    setToggle(true)
  }
  return (
   <>
   <nav className='flex justify-between xl:mr-13 xl:ml-13 items-center mt-10 mb-10'>
     <div>
        <img className='h-5' src='images2/Foodieland..png'/>
     </div>
     {toggle?(
     <div className='xl:flex justify-between items-center gap-x-16 hidden'>
        {
          ["Home","Recipes","Blog","Contact","About us"].map((i,id)=>(
            <li  className='font-medium list-none' key={id}>{i}</li>
             ))
        }
     </div>):(<HiMenu className='block xl:hidden' onClick={handleClick}/>)}
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