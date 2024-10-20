import React from 'react'
const Hero = () => {
  return (
    <div className='w-full relative'>
     <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/dubai.mp4" type="video/mp4" />
        </video>
        <div className=' absolute top-[15rem] left-16 flex flex-col gap-6'>
          <h1 className=' text-[#fff] text-[45px] font-[600] max-w-[555px]'>Discover Dubai’s Best Properties</h1>
          <p className=' text-white text-[26px] font-[300]'>Introducing Six Senses Residences in Dubai Marina</p>
          <button className=' py-3 px-5 bg-[#AE8E50] text-white rounded-md w-fit'>ENQUIRE NOW</button>
          <div className=' flex items-center gap-12 mt-7'>
              <span className=' flex flex-col'>
              <h1 className=' text-[25px] font-[400] text-white'>1200 +</h1>
              <p className=' text-[15px] text-white font-[300]'>Properties</p>
              </span>
              <span className=' flex flex-col'>
              <h1 className=' text-[25px] font-[400] text-white'>4500 +</h1>
              <p className=' text-[15px] text-white font-[300]'>Happy Costumers</p>
              </span>

              <span className=' flex flex-col '>
              <h1 className=' text-[25px] font-[400] text-white'>100 +</h1>
              <p className=' text-[15px] text-white font-[300]'>Awards </p>
              </span>
          </div>
        </div>
    </div>
  )
}

export default Hero