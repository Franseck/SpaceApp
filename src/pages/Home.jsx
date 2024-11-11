import React from 'react'
import MainOne from '../component/MainOne'
import MainTwo from "../component/MainTwo"
import MainThree from "../component/MainThree"
import Footer from "../component/Footer"
import earth from "../assets/earth-bg.mp4"

const Home = () => {
  return (
    <div className=''>
      <div className='h-[500px] relative'>
      <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          <source src={earth} type="video/mp4" />
          
        </video>
        
<MainOne/>

       </div> 
<MainTwo/>
<MainThree/>
<Footer/>

    </div>
  )
}

export default Home