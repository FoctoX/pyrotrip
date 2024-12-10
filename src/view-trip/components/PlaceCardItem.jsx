import React from 'react'
import { Link } from 'react-router-dom'

function PlaceCardItem(place) {
    console.log(place)
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.place.placeName.replace(" ", "+")} target='_blank'>
        <div className='border rounded-xl p-3 mt-2 flex gap-5 transition ease-in-out shadow-gray-500 dark:shadow-black hover:shadow-md hover:translate-x-1'>
            <img src="/placeholder.jpeg" alt='place-img'
            className='w-[130px] h-[130px] rounded-xl'/>
            <div>
                <h2 className='font-bold text-lg text-black dark:text-white'>{place.place.placeName}</h2>
                <p className='text-sm text-gray-400'>{place.place.placeDetails}</p>
                <h2 className='mt-2 text-black dark:text-white'>💲 {place.place.ticketPricing}</h2>
                <h2 className='mt-2 text-black dark:text-white'>⭐ {place.place.rating}/5</h2>
            </div>
        </div>
    </Link>

  )
}

export default PlaceCardItem