import React from 'react';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';

const ViewTrip = () => {

    const storedTripData = localStorage.getItem("tripData");
    const parsedData = JSON.parse(JSON.parse(storedTripData));

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Information Section */}
            <InfoSection trip={parsedData}/>

            {/* Recommended Hotels */}
            <Hotels trip={parsedData}/>

            {/* Daily Plans */}
            <PlacesToVisit trip={parsedData}/>

            {/* Footer */}

        </div>
    );
};
export default ViewTrip;
