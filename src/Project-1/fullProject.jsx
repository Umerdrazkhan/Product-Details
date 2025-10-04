import React from 'react'
import Main from './main'
import Rating from './rating'
import Footer from './Footer'
import Header from './header'
//import Main3 from './Main3'
import ThisWeek from './thisWeek'

const FullProject = () => {
  return (
    <>
     <div className=''>
        <Header/>
        <Main/>
        <Rating/>
        <ThisWeek/>
        <Footer/>
     </div>
    </>
  )
}

export default FullProject