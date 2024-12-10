import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='grid lg:grid-cols-2 gap-12 mx-8 md:mx-16 lg:mx-32 xl:mx-64 sm:mt-2 md:mt-5 lg:mt-10 xl:mt-20'>
      <div className='flex flex-col items-start justify-center gap-10 text-center lg:text-left'>
        <h1
          className='font-extrabold text-[50px] mt-16'
        ><span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span><br></br>Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        <Link className='mx-auto lg:mx-0' to={'/create-trip'}>
          <Button className=''>Get Started</Button>
        </Link>
      </div>
      <div className='hidden lg:flex items-center justify-end'>
        <img src="/laptop.svg" alt="laptop" />
      </div>
    </div>
  )
}

export default Hero