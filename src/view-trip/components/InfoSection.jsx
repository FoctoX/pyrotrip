import React from 'react'
import PropTypes from 'prop-types';

function InfoSection({trip}) {
  return (
    <div>
        <img src="/placeholder.jpeg" alt="placeholder" className='h-[340px] w-full object-cover rounded-xl'/>
        <div>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip.tripDetails.destination}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 dark:bg-gray-950 rounded-full text-gray-500 dark:text-white text-xs md:text-md'>📆 {trip.tripDetails.duration}</h2>
                    <h2 className='p-1 px-3 bg-gray-200 dark:bg-gray-950 rounded-full text-gray-500 dark:text-white text-xs md:text-md'>💲 {trip.tripDetails.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 dark:bg-gray-950 rounded-full text-gray-500 dark:text-white text-xs md:text-md'>👨‍👩‍👧‍👦 No. Of Traveler: {trip.tripDetails.travelers}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

InfoSection.propTypes = {
  trip: PropTypes.string.isRequired
};

export default InfoSection