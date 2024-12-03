import React from 'react'
import { Link } from 'react-router-dom'

function Hotels(trip) {

  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {trip.trip.hotels.map((hotel, index)=>(
                <div className='transition-all cursor-pointer'>
                    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel.hotelName +","+ hotel.hotelAddress} target='_blank'>
                        <img src='/placeholder.jpeg' className='rounded-xl' />
                        <div className='my-2'>
                            <h2 className='font-medium'>{hotel.hotelName}</h2>
                            <h2 className='text-xs text-gray-500'>📍 {hotel.hotelAddress}</h2>
                            <h2 className='text-sm'>💰 {hotel.price}</h2>
                            <h2 className='text-sm'>⭐ {hotel.rating}/5 Stars</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotels