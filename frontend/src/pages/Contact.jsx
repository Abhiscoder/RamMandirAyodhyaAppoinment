import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-black-500'>
        <p className='font-semibold text-orange-400'>CONTACT US </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact_image" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-orange-400'>OUR OFFICE</p>
          <p>You can also contact us at the following address: DIO, NIC District Centre, Civil Lines, Vikas Bhawan, Ayodhya-224001 <br/>
          OR <br/>
          <b>Office Address: </b> Mandir Nirma Karyashala, Ramghat Chauraha, Near Menas Bhawan, Ayodhya, Uttar Pradesh - 224123, India</p>
          <p>email id: upfai[at]nic[dot]in <br />Phone: +91 5278224202 <br/> HelpDesk Number: +91-80095-22111 <br/>Toll Free Number: 1860-180-1992 <br/><b>Timing (Open All Days): </b> From 10 AM to 9 PM<br/></p>
        </div>
      </div>
    </div>
  )
}

export default Contact
