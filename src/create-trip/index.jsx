import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { chatSession } from '@/service/AIModal';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Link, Route, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function CreateTrip() {
    const navigate = useNavigate();
    const [place, setPlace] = useState();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState([]);

    const handleInputChange = (name, value) => {
        if (name == 'noOfDays' && value > 5) {
            return;
        }
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const OnGenerateTrip = async () => {

        if (formData?.noOfDays > 5 && !formData?.location || !formData?.budget || !formData.traveler) {
            toast("Please fill all details")
            return;
        }

        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{traveler}', formData?.traveler)
            .replace('{budget}', formData?.budget)
            .replace('{totalDays}', formData?.noOfDays)

        try {
            const rawResult = await chatSession.sendMessage(FINAL_PROMPT);
            const responseResult = rawResult.response.text();

            let result;
            if (typeof rawResult === "string") {
                result = JSON.parse(responseResult.response.text());
            } else {
                result = responseResult;
            }
            localStorage.setItem("tripData", JSON.stringify(result));
            navigate('/view-trip');

        } catch (error) {
            console.error("Error generating trip:", error);
            toast("Failed to generate trip");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Header/>
            <div className='sm:px-10 md:px-32 lg:px-56 xl:px-96 px-5 mt-10'>
                <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
                <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
                <div className='mt-20 flex flex-col gap-10'>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
                        <Input placeholder={''}
                            onChange={(v) => { setPlace(v.target.value); handleInputChange('location', v.target.value) }}
                        />
                        {/* <GooglePlacesAutocomplete
                            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                            selectProps={{
                                place,
                                onChange:(v)=>{setPlace(v); handleInputChange('location', v)}
                            }}
                        /> */}
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
                        <Input type="number"
                            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
                        />
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>How much is your budget?</h2>
                        <div className='grid grid-cols-3 gap-5 mt-5'>
                            {SelectBudgetOptions.map((item, index) => (
                                <div key={index}
                                    onClick={() => handleInputChange('budget', item.title)}
                                    className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                            ${formData?.budget == item.title && 'shadow-lg border-black'}`}>
                                    <h2 className='text-4xl'>{item.icon}</h2>
                                    <h2 className='font-bold text-lg'>{item.title}</h2>
                                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
                        <div className='grid grid-cols-3 gap-5 mt-5'>
                            {SelectTravelesList.map((item, index) => (
                                <div key={index}
                                    onClick={() => handleInputChange('traveler', item.people)}
                                    className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                                    ${formData?.traveler == item.people && 'shadow-lg border-black'}`}>
                                    <h2 className='text-4xl'>{item.icon}</h2>
                                    <h2 className='font-bold text-lg'>{item.title}</h2>
                                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='my-10 flex justify-end'>
                    <Button className="w-32"
                        onClick={OnGenerateTrip} disabled={loading}>
                        {loading ? (
                            <img src="/loading.gif" alt="Loading" className="w-6 h-6" />
                        ) : (
                            "Generate Trip"
                        )}
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default CreateTrip