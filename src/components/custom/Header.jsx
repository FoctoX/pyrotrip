import React from 'react'

function Header() {
  return (
    <div className='w-full bg-white p-3 shadow-sm flex justify-between items-center px-5 sticky top-0'>
        <div className='flex items-center'>
            <img className='w-10 h-10' src='/logo.svg'/>
            <p className='font-extrabold text-xl'>PyroTrip</p>
        </div>
    </div>
  )
}

export default Header