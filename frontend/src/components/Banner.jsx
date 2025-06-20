import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-orange-400 rounded-lg px-6 md:px-10 lg:px-10'>
      {/*.........left side...........*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-4 m-auto md:py-[4vw] md:mb-[-3px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Visit RamMandir
        </p>
        <a href="#speciality" className='flex items-center gap-2 bg-orange-100 px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 '>
          Book Appointment <img className='w-3' src={assets.arrow_icon} alt="icon" />
        </a>
      </div>

      {/*......right side....*/}
      <div className='md:w-1/2 relative'>
        {/* <img className='w-full md:absolute top-0 left-11  h-auto rounded-lg ' src={assets.header_img} alt="header_image" /> */}
        <img
          className='w-full h-auto max-w-[58vh] max-h-[50vh] aspect-[3/2] md:absolute md:top-2 md:left-36 md:bottom-0 rounded-lg object-cover'
          src={assets.header_img}
          alt="header_image"
        />
      </div>

    </div>
  )
}

export default Banner
