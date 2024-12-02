import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <div className='flex items-center'>
            <img className='w-10 h-10' src='/logo.svg'/>
            <p className='font-extrabold text-xl'>PyroTrip</p>
        </div>
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header