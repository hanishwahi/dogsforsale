import React from 'react'
import Slider from './Slider'
import CallNow from './CallNow'
import DogsBreed from './DogsBreed'
import Banner from './Banner'
import Record from './Record'
  // import ScrollToTop from './ScrollToTop'
 
function Home() {
  return (
     <>
     <Slider/>
     <CallNow/>
     <DogsBreed/>
     <Banner/>
     <Record/>
      
     {/* <ScrollToTop/> */}
     </>
  )
}

export default Home