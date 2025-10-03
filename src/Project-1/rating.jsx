import React from 'react'
import RatingBarLine from './ratingPractice.jsx/ratingbar'
import Reviews from './ratingPractice.jsx/Reviews'
import ReviewList from './ratingPractice.jsx/ReviewList'

const Rating = () => {
  return (
    <>
     <h2 className='text-2xl font-bold ml-18 mb-8 mt-10'>Product Reviews</h2>
     <div className='flex flex-col items-center '>
        <div className='flex flex-col justify-center gap-9'>
            <div className='flex justify-around items-center border-2 border-dashed rounded-xl border-gray-300 w-[1200px] h-[230px]'>
                <div className='flex items-start h-[160px]  w-[300px] gap-3'>
                    <div className='h-20 w-20 rounded-full border-3 border-orange-400 flex items-center justify-center'>
                         <span className='font-bold text-xl'>4.5</span> 
                    </div>
                    <div className='text-[14px] mt-5'>
                         <p>⭐⭐⭐⭐⭐</p> 
                         <p className='text-gray-400 '>from 125k reviews</p>
                    </div>
                </div>
               <RatingBarLine/>
            </div>
            <div className='flex gap-x-12'>
              <Reviews/>
              <ReviewList/>
            </div>
        </div>
        <div></div>
     </div>
    </>
  )
}

export default Rating


 {/* <div className='w-[600px] flex flex-col gap-3'> 
                    <div className='flex justify-between items-center '>
                     <strong>5.0 <span>⭐</span></strong>
                      <RatingBarLine strokeWidth={90}/>

                     <strong>2823</strong>
                    </div>
                     <div className='flex justify-between items-center '>
                     <strong>5.0 <span>⭐</span></strong>
                      <RatingBarLine strokeWidth={60}/>

                     <strong>2823</strong>
                    </div>
                     <div className='flex justify-between items-center '>
                     <strong>5.0 <span>⭐</span></strong>
                      <RatingBarLine strokeWidth={40}/>

                     <strong>2823</strong>
                    </div>
                     <div className='flex justify-between items-center '>
                     <strong>5.0 <span>⭐</span></strong>
                      <RatingBarLine strokeWidth={20}/>

                     <strong>2823</strong>
                     </div>
                     <div className='flex justify-between items-center '>
                     <strong>5.0 <span>⭐</span></strong>
                      <RatingBarLine strokeWidth={10}/>

                     <strong>2823</strong>
                    </div>
                </div>*/}