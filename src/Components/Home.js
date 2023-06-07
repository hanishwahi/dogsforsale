import React from 'react'
import Slider from './Slider'
import CallNow from './CallNow'
import DogsBreed from './DogsBreed'
import Banner from './Banner'
import Record from './Record'
import Footer from '../Footer/Footer'
// import ScrollToTop from './ScrollToTop'
 
function Home() {
  return (
     <>
     <Slider/>
     <CallNow/>
     <DogsBreed/>
     <Banner/>
     <Record/>
     <Footer/>
     {/* <ScrollToTop/> */}
     </>
  )
}

export default Home