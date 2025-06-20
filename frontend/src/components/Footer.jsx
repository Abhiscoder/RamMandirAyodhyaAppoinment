import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-2 mt-14 text-sm'>

        {/*.......left section....*/}
        <div>
        <p className='text-xl font-medium mb-5'>About Us</p>
          {/* <img className='mb-5 w-16 h-16' src={assets.logo} alt="logo" /> */}
          <p className='w-full md:w-2/3 text-gray-600 leading-6 text-justify'>Visitors can explore a range of services available on the Ram Mandir Ayodhya visit website, including Pandits for rituals, tourist guides, photographers, local rooms for stay, and curated options to explore Ayodhya more deeply and many Facility🙏🏻.</p>
        </div>

        {/*.......center section....*/}
        <div>
          <p className='text-xl font-medium mb-5'>Facility</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href='/services/Pandit' className='hover:text-orange-400 transition'>Pandit</a></li>
            <li><a href='/services/TouristGuide' className='hover:text-orange-400 transition'>Tour Guide</a></li>
            <li><a href='/services/Photographer' className='hover:text-orange-400 transition'>Photographer</a></li>
            <li><a href='/services/LocalRooms' className='hover:text-orange-400 transition'>Hotesl/Rooms</a></li>
            <li><a href='#' className='hover:text-orange-400 transition'>Transport</a></li>
          </ul>
        </div>

        {/*.......right section....*/}
        <div>
          <p className='text-xl font-medium mb-5'>Contact Us</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Phone : +91 5278224202</li>
            <li>email id : upfai[at]nic[dot]in</li>
          </ul>
        </div>

      </div>
      {/*..........copyright text.....*/}
      <div>
        <hr />
        <p className='py-2 text-sm text-center'>Copyright © 2025 AbhishekGEU - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
