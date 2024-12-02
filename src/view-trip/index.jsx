import React, { useState, useEffect } from 'react';

const ViewTrip = () => {
    const [tripData, setTripData] = useState(null);
    const [loading, setLoading] = useState(true); // track loading state

    useEffect(() => {
        const storedTripData = localStorage.getItem("tripData");

        if (storedTripData) {
            try {
                const parsedData = JSON.parse(storedTripData);
                setTripData(parsedData);
            } catch (error) {
                console.error("Error parsing stored trip data", error);
                setTripData({});
            }
        } else {
            setTripData({});
        }

        setLoading(false); // Set loading to false after data is processed
    }, []);

    if (loading) {
        return <div>Loading...</div>;  // Render loading message while fetching data
    }

    if (!tripData || Object.keys(tripData).length === 0) {
        return <div>No trip data found.</div>; // Fallback in case of empty or invalid data
    }

    return (
        <div>
            <h1>{tripData.tripDetails.destination}</h1>
            <p>Duration: {tripData.tripDetails.duration}</p>
            <p>Travelers: {tripData.tripDetails.travelers}</p>
            <p>Budget: {tripData.tripDetails.budget}</p>
            {/* Render the rest of your trip data here */}
        </div>
    );
};
export default ViewTrip;
