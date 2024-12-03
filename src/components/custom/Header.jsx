import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full bg-white p-3 shadow-sm flex justify-between items-center px-5 sticky top-0'>
        <Link className='flex items-center' to={'/'}>
          <img className='w-10 h-10' src='/logo.svg'/>
          <p className='font-extrabold text-xl text-black'>PyroTrip</p>
        </Link>
    </div>
  )
}

export default Header