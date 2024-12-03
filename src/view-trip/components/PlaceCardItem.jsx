import React from 'react'
import { Link } from 'react-router-dom'

function PlaceCardItem(place) {
    console.log(place)
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.place.placeName.replace(" ", "+")} target='_blank'>
        <div className='border rounded-xl p-3 mt-2 flex gap-5'>
            <img src="/placeholder.jpeg" 
            className='w-[130px] h-[130px] rounded-xl'/>
            <div>
                <h2 className='font-bold text-lg'>{place.place.placeName}</h2>
                <p className='text-sm text-gray-400'>{place.place.placeDetails}</p>
                <h2 className='mt-2'>🚌 {place.place.timeTravel}</h2>
            </div>
        </div>
    </Link>

  )
}

export default PlaceCardItem