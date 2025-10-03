import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
const reviews=[
    {item:5,star:"⭐", type:"checkbox"},
     {item:4,star:"⭐", type:"checkbox"},
      {item:3,star:"⭐", type:"checkbox"},
       {item:2,star:"⭐", type:"checkbox"},
        {item:1,star:"⭐", type:"checkbox"},
]
const Reviews = () => {
  const[rev,setrev]=useState(true)
  function handleClick(){
     setrev(!rev);
  }
  return (
    <>
     <div className='w-[275px] h-[600px] border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-around items-center'>
        <h2 className='font-bold text-xl mr-25 mt-3'>Reviews Filter</h2>
          <hr className='w-[230px]  border-1 border-dashed border-gray-300 '/>
        <div className='flex flex-col justify-center gap-6'>
            <div className='flex justify-between items-center'>
                 <h3 className='font-semibold mb-'>Rating</h3>
                <MdOutlineKeyboardArrowUp onClick={handleClick}/>
            </div>
            {rev&&
            (<div className='flex flex-col gap-3'>
                {
                  reviews.map((i,id)=>(
                 <div key={id}  className='flex gap-3'>
                   <input type={i.type}/>
                   <p> <span className='mr-1'>{i.star}</span>{i.item}</p>
                 </div>
                 ))
                }
            </div>)
            }
            <hr className='w-[230px]  border-1 border-dashed border-gray-300 '/>
            <div className='mb-5'>
                 <div className='flex justify-between items-center'>
                 <h3 className='font-semibold mb-5'>Reviews Topics</h3>
                <MdOutlineKeyboardArrowUp/>
            </div>
              <div className='flex flex-col gap-3'>
                 {
                  ["Product Quality","Seller Services",
                    "Product Price","Shipment",
                    "Match with Description"].map((item,index)=>(
                       <div key={index}  className='flex gap-4'>
                   <input type="checkbox"/>
                   <p>{item}</p>
                  </div>
                    ))
                 }
              </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Reviews