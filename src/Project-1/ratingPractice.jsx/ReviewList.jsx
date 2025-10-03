import React, { useState } from 'react'
import { LuThumbsUp } from 'react-icons/lu';
import { LuThumbsDown } from 'react-icons/lu';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
const reviewList=[
       {
        comment:"This is amazing product I have.",date:"July 2, 2020 03:29 PM",img:"images/img5.png",name:"Darel Steward",star:"⭐⭐⭐⭐⭐"
       },{
         comment:"This is amazing product I have.",date:"July 2, 2020 03:29 PM",img:"images/img6.png",name:"Darel Steward",star:"⭐⭐⭐⭐⭐"
       },{
         comment:"This is amazing product I have.",date:"July 2, 2020 03:29 PM",img:"images/img7.png",name:"Darel Steward",star:"⭐⭐⭐⭐⭐"
       },{
         comment:"This is amazing product I have.",date:"July 2, 2020 03:29 PM",img:"images/img8.png",name:"Darel Steward",star:"⭐⭐⭐⭐⭐"
       }
]
const ReviewList = () => {
  const[add,setadd]=useState(0)
  return (
    <>
     <div className='flex flex-col items-center '>
        <div className=' w-[880px] h-[950px] '>
            <h2 className='font-bold text-2xl mb-5'>Review List</h2>
            <div className='flex gap-4'>
                <button className='text-xs w-[100px] font-semibold h-9 border-2 rounded-md border-gray-300 hover:bg-gray-300   '>All Reviews</button>
                <button  className=' text-xs w-[140px]  font-semibold h-9 border-2 rounded-md border-gray-300 hover:bg-gray-300   '>With Photo & Video</button>
                <button  className='text-xs w-[140px]  font-semibold h-9 border-2 rounded-md border-gray-300 hover:bg-gray-300   '>With Description</button>
            </div>
            <div className='flex flex-col gap-7 mt-10'>
              <div>
               
                 {
                  reviewList.map((i,id)=>(
                 <div key={id}>
                      <p className='mb-3'>{i.star}</p>
                      <strong className='text-xl font-bold '>{i.comment}</strong>
                       <p className='text-gray-400 mt-1'>{i.date}</p>
                   <div className='flex justify-between mt-5 mb-7'>
                    <div className='flex gap-x-3'>
                        <img src={i.img}/>
                        <p>{i.name}</p>
                    </div>
                    <div className='flex'>
                        <button className='flex items-center justify-center gap-2 text-xs w-[60px] font-semibold h-8 border-2 rounded-md border-gray-300   '><LuThumbsUp className='size-4  hover:text-blue-900' onClick={()=>setadd(add+1)}/>
                          <span>{add}</span></button>
                        <button className='ml-2 text-xs w-[40px] font-semibold h-8 border-2 rounded-md border-gray-300  '><LuThumbsDown className='size-4 ml-2.5  hover:text-blue-900' onClick={()=>setadd(add-1)}/></button>
                    </div>
                   </div>  
                   
                   <hr className='border-1 border-dashed border-gray-300 mb-5.5'/>
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

export default ReviewList