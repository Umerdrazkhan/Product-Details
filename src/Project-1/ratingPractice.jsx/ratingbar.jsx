// RatingBarLine.jsx
import React from "react";
const rating=[
  {rate:5.0, year:2030 ,width:"90"},
  {rate:4.0, year:200 ,width:"70"},
  {rate:3.0, year:20,width:"50"},
  {rate:2.0, year:1,width:"20"},
  {rate:1.0, year:0,width:"10"}
]
const RatingBarLine = () => {
  return (
    <>
    <div className='w-[600px]  flex flex-col gap-3'>
    {
      rating.map((rates,id)=>(

        <div key={id} className='flex justify-between items-center '> 
            <strong className="w-10 text-right ">
              {rates.rate} <span>⭐</span>
            </strong>
             <div className="w-full max-w-md flex-1">

      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-4">
        {/* background stroke */}
        <line
          x1="0"
          y1="5"
          x2="100"
          y2="5"
          strokeWidth="3"
          strokeLinecap="round"
          className="stroke-gray-200"
        />

        {/* foreground stroke using stroke-dasharray for partial length */}
        <line
          x1="0"
          y1="5"
          x2={rates.width}
          y2="5"
          strokeWidth="3"
          strokeLinecap="round"
         
          className="stroke-black transition-all duration-500"
        />
      </svg>

      
             </div>
            <strong>
              {rates.year}
            </strong>
        </div>
          
      )
      )
    }
    </div>
  
    </>
  );
};

export default RatingBarLine;
