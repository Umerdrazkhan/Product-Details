import React from 'react'
const array=[{text:"Breakfast", img:"images2/image 25.png", bg:"bg-gray-100"},
{text:"Vegan", img:"images2/image 20.png" , bg:"bg-green-200"},
{text:"Meat", img:"images2/image 21.png", bg:"bg-red-200"},
{text:"Dessert", img:"images2/image 22.png", bg:"bg-pink-100"},
{text:"Lunch", img:"images2/image 23.png", bg:"bg-gray-200"},
{text:"Chocolate", img:"images2/image 24.png", bg:"bg-gray-200"},
]
const Categories = () => {
  return (
    <>
      <div className='flex justify-between mt-28 ml-14 mr-14'>
         <h2 className='font-semibold text-5xl'>Categories</h2>
         <button className='w-[200px] h-14 bg-sky-100 rounded-2xl'>View All Categories</button>
      </div>
      <div className='flex flex-wrap justify-between mr-14 ml-14 mt-32'>
        {
          array.map((i,id)=>(
           <div className='relative '>
              <div className={`w-[160px] h-[130px]   inset-x-0 top-0
              bg-gradient-to-b 
              from-white/100 via-white/80 to-transparent 
              backdrop-blur-sm 
              pointer-events-none  rounded-2xl  flex  justify-center items-end ${i.bg}`}>
                <strong  className='font-semibold text-xl mb-8 '>{i.text}</strong>
              </div>
              <img src={i.img} className=' bottom-24 left-8 absolute'/>
           </div>
          ))
        }
      </div>
    </>  
  )
}

export default Categories