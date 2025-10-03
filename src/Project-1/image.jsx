import React from 'react'
const image=[
    {id:1,img:"images/img5.png.png"},
    {id:2,img:"images/img4.png.png"},
    {id:3,img:"images/img3.png.png"},
    {id:4,img:"images/img2.png.png"},
    {id:5,img:"images/img1.png.png"}
]
const Main3 = () => {
  return (
    <>
    <div className='flex gap-6 justify-evenly'>
      {
        image.map((images,i)=>(
          <div className='bg-white  list-none' value={i}>
            <div className='bg-gray-100  rounded-[8px] '> <img src={images.img}/> </div> 
           <div className='mt-5'>  
                 <h3 className='font-semibold'>Whistle</h3>
                 <strong className='font-bold'>$26</strong>
                 <p className='text-gray-500 font-normal w-[223px] '>Wide Leg Cropped Jeans,<br/>Denim</p> 
               <div className="flex items-center justify-between mt-2 text-sm">
                  <div className="flex items-center gap-1">
                   <span>⭐</span>
                   <strong>4.9</strong>
                  </div>
                  <p className="text-gray-500">1,238 Sold</p>
               </div>
             </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Main3