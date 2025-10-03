import React, { useState } from 'react'
const buttons=[
    6,8,10,14,18,20
]

const Main2 = () => {
    const[button,setbutton]=useState("Value")
    function handleClick(index){
        setbutton(index)
    }
    
  return (
    <>
    <div className='flex justify-between mt-8'>
      <p className='text-gray-500 font-medium'>Size: <strong>{button}</strong></p>         
      <p className='text-gray-400 underline font-medium'>View Size Chart</p>
    </div>
    <div  className='flex gap-2'>
      {
        buttons.map((index,i)=>(
            <button  className='w-20 h-10 rounded-[8px] border-1 border-gray-400' onClick={()=>handleClick(index)} value={i}>{index}</button>
        )) 
      }
    </div>  
    </>
  )
}

export default Main2