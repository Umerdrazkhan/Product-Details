import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const array=[
  {text:"Breakfast", img:"images2/image 25.png", bg:"bg-gray-100"},
{text:"Vegan", img:"images2/image 20.png" , bg:"bg-green-200"},
{text:"Meat", img:"images2/image 21.png", bg:"bg-red-200"},
{text:"Dessert", img:"images2/image 22.png", bg:"bg-pink-100"},
{text:"Lunch", img:"images2/image 23.png", bg:"bg-gray-200"},
{text:"Chocolate", img:"images2/image 24.png", bg:"bg-gray-200"},
]
const Categories = () => {
  return (
    <>
      <div className='flex justify-between xl:mt-28 mt-20 xl:ml-14 xl:mr-14 ml-10'>
         <h2 className='font-semibold xl:text-5xl text-4xl'>Categories</h2>
         <button className='w-[200px] hidden xl:block  h-14 bg-sky-100 rounded-2xl'>View All Categories</button>
      </div>
      <div className="block xl:hidden ml-6 ">
        <Swiper
          modules={[ Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
         navigation
          className="w-full"
        >
          {array.map((i, id) => (
            <SwiperSlide key={id}>
              <Cards data={i} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>

      <div className="hidden xl:flex justify-between gap-6 ml-12 mr-12 flex-wrap">
        {array.map((i, id) => (
          <Cards key={id} data={i} />
        ))}
      </div>

      
    </>  
  )
}

const Cards = ({data}) => (
  <>
      
      <div className='flex  justify-between  mt-32'>
           <div className='relative '>
              <div className={`w-[160px] h-[130px]   inset-x-0 top-0
              bg-gradient-to-b 
              from-white/100 via-white/80 to-transparent 
              backdrop-blur-sm 
              pointer-events-none  rounded-2xl  flex  justify-center items-end ${data.bg}`}>
                <strong  className='font-semibold text-xl mb-8 '>{data.text}</strong>
              </div>
              <img src={data.img} className=' bottom-24 left-8 absolute'/>
           </div>
          
      </div>
   </>   
  )



export default Categories