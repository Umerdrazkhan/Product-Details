import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';

const array = [
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle.png" },
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle (1).png" },
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle (2).png" },
  { strong: "Foodieland", text: "Tokyo, Japan", img: "images2/Rectangle (3).png" },
];

const Instagram = () => {
  return (
    <div className="max-w-full h- xl:h-[856px] flex flex-col justify-evenly inset-x-0 top-0
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

      {/* ✅ Swiper for small screens only */}
      <div className="block xl:hidden">
        <Swiper
          modules={[ Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
         // navigation
          className="w-full"
        >
          {array.map((i, id) => (
            <SwiperSlide key={id}>
              <PostCard data={i} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6 bg-amber-400"></div>
      </div>

      {/* ✅ Flex layout for XL screens */}
      <div className="hidden xl:flex justify-center gap-6 flex-wrap">
        {array.map((i, id) => (
          <PostCard key={id} data={i} />
        ))}
      </div>

      {/* Button */}
      <div className='text-center '>
        <button className='bg-black text-white w-[230px] h-14 rounded-2xl text-[14px] font-semibold xl:mb-0 xl:mt-0 mt-6 mb-8'>
          Visit Our Instagram
        </button>
      </div>
    </div>
  );
};

// ✅ Reusable Post Card Component
const PostCard = ({ data }) => (
  <div className='w-[290px] h-[480px] bg-white flex flex-col justify-evenly shadow-md xl:ml-0 ml-14'>
    {/* Top bar */}
    <div className='flex justify-between items-center h-11 px-3'>
      <div className='flex space-x-2 items-center'>
        <img src='images2/Oval1.png' alt='profile' className='h-7 w-7 rounded-full' />
        <div className='leading-tight'>
          <strong className='text-[14px]'>{data.strong}</strong>
          <p className='text-xs'>{data.text}</p>
        </div>
      </div>
      <BsThreeDots />
    </div>

    {/* Post image */}
    <img src={data.img} alt='post' className='w-full object-cover' />

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
);

export default Instagram;
