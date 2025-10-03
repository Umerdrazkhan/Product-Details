import React from 'react'
import Main3 from './image'

const ThisWeek = () => {
  return (
    <>
     <div className='flex flex-col items-center mb-18'>
        <hr className='w-[1200px] border-1 border-dashed border-gray-300 mb-16'/>
        <div className='flex flex-col gap-y-7'>
          <h2 className='text-2xl font-bold'>Popular this week</h2>
        <Main3/>
        </div>
     </div>
    </>
  )
}

export default ThisWeek