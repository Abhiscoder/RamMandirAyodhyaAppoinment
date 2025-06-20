import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {aToken,setAToken} = useContext(AdminContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white border-orange-400'>
      <div className='flex items-center gap-2 text-xs'>
        <img className=' mb-5 w-16 h-20 sm:w-20 cursor-pointer' src={assets.admin_logo} alt="admin_logo" />
        <p className='border px-2.5 py-0.5 rounded-full border-orange-500 text-gray-600'>{aToken ? 'Admin' : 'Service'}</p>
      </div>
      <button onClick={logout} className='bg-orange-400 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
