import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit(trip) {
console.log(trip)
  return (
    <div>
        <h2 className='font-bold text-lg'>Places to Visit</h2>
        <div>
            {trip.trip.itinerary.map((item, array) => (
                <div>
                    <h2 className='font-medium text-lg'>Day {item.day}</h2>
                    <h2 className='font-medium text-sm text-orange-600'>{item.bestTimeToVisit}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {item.plan.map((place, index) => (
                            <div className=''>
                                <PlaceCardItem place={place}></PlaceCardItem>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit