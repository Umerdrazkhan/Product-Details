import React from 'react'
import { BiHeart, BiSolidStopwatch } from 'react-icons/bi';
import { PiForkKnifeFill } from 'react-icons/pi';
const array=[
   {img:"images2/image 30.png",text:"Mixed Tropical Fruit Salad with Superfood Boosts",p:"Healthy"},
   {img:"images2/image 31.png",text:"Big and Juicy Wagyu Beef Cheeseburger",p:"Weatern"},
   {img:"images2/image 32.png",text:"Healthy Japanese Fried Rice with Asparagus",p:"Healty"},
   {img:"images2/image 33.png",text:"Cauliflower Walnut Vegetarian Taco Meat",p:"Eastern"},
   {img:"images2/image 34.png",text:"Rainbow Chicken Salad with Almond Honey Mustard Dressing",p:"Healthy"},
   {img:"images2/image 35.png",text:"Barbeque Spicy Sandwiches with Chips ",p:"Snack"},
   {img:"images2/image 36.png",text:"Firecracker Vegan Lettuce Wraps - Spicy! ",p:"Seafood"},
   {img:"images2/image 37.png",text:"Firecracker Vegan Lettuce Wraps - Spicy! ",p:"Japanese"}
]
const MoreRecipes = () => {
  return (
    <>
     <div className='h-[865px] xl:flex flex-col hidden justify-between mt-36'>
         <div className='flex justify-around'> 
            <h2 className='font-semibold text-5xl tracking-wide w-[540px] '>Try this delicious recipe to make your day</h2>
            <p className='leading-7 text-gray-800 w-[580px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
         </div> 
         <div className='flex flex-wrap justify-evenly mr-6 ml-6 gap-y-8 '>
         {
             array.map((i,id)=>(
             <div className='w-[290px] h-[315px]  flex flex-wrap ' key={id}>
               <div className='relative'>
                  <img src={i.img} className='rounded-2xl'/>
               </div>
               <div className='bg-white h-12 w-12 rounded-full flex justify-center items-center absolute '>
                   <BiHeart className='size-7' />
               </div>
               <h3 className='font-semibold text-xl leading-6'>{i.text} </h3>
               <div className='flex justify-start gap-x-4'>
                 <p className='font-medium text-sm text-gray-800 flex items-center gap-x-2'><span><BiSolidStopwatch/></span>30 Minutes</p>
                  <p  className='font-medium text-sm text-gray-800  flex items-center gap-x-2'><span><PiForkKnifeFill/></span>{i.p}</p>
               </div>
              </div>
            ))
         }
         </div>
     </div> 






    








    </>
  )
}

export default MoreRecipes