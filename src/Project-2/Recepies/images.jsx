import React from 'react'
import { BiHeart, BiSolidStopwatch } from 'react-icons/bi';
import { PiForkKnifeFill } from 'react-icons/pi';
const array=[
   {img:"images2/image 40.png",text:"Mixed Tropical Fruit Salad with Superfood Boosts",p:"Healthy", left:"50", right:"20"},
   {img:"images2/image 41.png",text:"Big and Juicy Wagyu Beef Cheeseburger",p:"Weatern", left:"80", right:"10"},
   {img:"images2/image 42.png",text:"Healthy Japanese Fried Rice with Asparagus",p:"Healty", left:"90", right:"4"},
   {img:"images2/image 43.png",text:"Cauliflower Walnut Vegetarian Taco Meat",p:"Eastern", left:"50", right:"20"},
   {img:"images2/image 44.png",text:"Rainbow Chicken Salad with Almond Honey Mustard Dressing",p:"Healthy", left:"50", right:"20"},
   {img:"images2/image 48.png"},
   {img:"images2/image 45.png",text:"Barbeque Spicy Sandwiches with Chips ",p:"Snack", left:"9/12", right:"20"},
   {img:"images2/image 46.png",text:"Firecracker Vegan Lettuce Wraps - Spicy! ",p:"Seafood", left:"50", right:"20"},
   {img:"images2/image 47.png",text:"Firecracker Vegan Lettuce Wraps - Spicy! ",p:"Japanese", left:"50", right:"20"}
]
const Images = () => {
  return (
    <>
      <div className='grid grid-cols-3 mr-2 ml-2 gap-8 '>
               {
                   array.map((i,id)=>(
                    (id==5)?(
                        <div className='bg-green-800 relative overflow-hidden h-[410px] flex flex-col justify-between'>
                            <p className='w-[200px] font-normal text-2xl text-center ml-24 text-white mt-10'>Don’t forget to eat healthy food</p>
                            <img src='images2/Star 1.png' className='absolute bottom-10 top-0'/>
                             <img src={i.img} className='absolute left-5 top-24'/>
                             <p className='font-medium text-gray-500 ml-30 mb-6'>www.foodieland.com</p>

                        </div>
                    ) :(
                   <div className='w-[390px] h-[400px] bg-sky-100 flex flex-wrap rounded-2xl pl-2.5' key={id}>
                     <div className='relative'>
                        <img src={i.img} className='rounded-2xl'/>
                     </div>
                     <div className={`bg-white h-12 w-12 rounded-full flex justify-center items-center absolute  ${i.left} ${i.right} shadow`}>
                         <BiHeart className='size-7 ' />
                     </div>
                     <h3 className='font-semibold text-xl leading-6 w-[350px] ml-1'>{i.text} </h3>
                     <div className='flex justify-start gap-x-4 mb-8 ml-1'>
                       <p className='font-medium text-sm text-gray-800 flex items-center gap-x-2'><span><BiSolidStopwatch/></span>30 Minutes</p>
                        <p  className='font-medium text-sm text-gray-800  flex items-center gap-x-2'><span><PiForkKnifeFill/></span>{i.p}</p>
                     </div>
                    </div>)
                  ))
               }
               </div>
    </>
  )
}

export default Images