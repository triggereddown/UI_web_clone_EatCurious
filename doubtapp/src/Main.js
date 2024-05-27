import React from 'react'
import burger from '../src/burger.png';


const Main = () => {
  return (
    <div id ='mainbodydiv' className='mainbody text-center h-screen relative '>
  <div className='mainbody text-center h-screen py-10 relative'>
  <div id="meatfree" className='text-white text-9xl absolute inset-0 z-0  pop-animation'>
    MEAT FREE
  </div>
  <div className='flex justify-center items-center pop-animation1'>
    <img  id='burger' className='w-80 h-auto z-10' src={burger} alt="burger" />
  </div>
  <div id='yourmind' className='text-white text-9xl inset-0 z-20  pop-animation2'>
    YOUR MIND
  </div>
</div>






</div>


  
  
  )
}

export default Main
