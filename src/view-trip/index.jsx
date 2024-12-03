import React from 'react';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ViewTrip = () => {

    const storedTripData = localStorage.getItem("tripData");
    const parsedData = JSON.parse(JSON.parse(storedTripData));

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            <Link to={'/'}><Button className="w-32">↰ Back</Button></Link>

            {/* Information Section */}
            <br></br>
            <InfoSection trip={parsedData}/>
            
            {/* Recommended Hotels */}
            <Hotels trip={parsedData}/>

            <br></br>
            <hr></hr>
            <br></br>

            {/* Daily Plans */}
            <PlacesToVisit trip={parsedData}/>

            {/* Footer */}
        </div>
    );


};
export default ViewTrip;
