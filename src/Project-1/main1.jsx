import React from 'react'
const arrays=[
    {
        id:1, img:"images/image 22.png"
    },{
         id:2, img:"images/image 21.png"
    },{
         id:3, img:"images/image 20.png"
    },{
          id:4, img:"images/image 21.png"
    },{
          id:5, img:"images/image 23.png"
    }
]
const Main1 = () => {
  return (
    <>
    <ul className='flex gap-3.5 flex-wrap mt-4'>
      {
        arrays.map((array,index)=>(
            <li className='bg-gray-100 w-20 h-25 rounded-[8px]' value={index}><img src={array.img}/></li>
        ))
      }
      </ul>
    </>
  )
}

export default Main1