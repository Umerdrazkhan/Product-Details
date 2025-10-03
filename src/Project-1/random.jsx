import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';
let arrays=[
    {id:1,name:"Homepage"},
    {id:2,name:"Women"},
    {id:3, name:"Women's Shirts & Tops"}
]
console.log(arrays)

const Random = () => {
  return (
    <>
    <div className=' flex   mt-7 mb-10'>
     <div className='flex  gap-4'>
      {
        arrays.map((array,index)=>(
               <li  value={index} className='flex items-center gap-1.5 text-gray-500'>{array.name}<span> <RiArrowRightSLine/></span></li>  
        ))
      }
       <p>Long Sleeve Overshirt, Khaki, 6</p>
      </div>
    </div>
    </>
  )
}

export default Random