import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"  
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList, SelectVacationPlace } from '@/constants/options';
import { createChatSession } from '@/service/AIModal';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function CreateTrip() {
    const navigate = useNavigate();
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
        const { analyzingType, location, budget, traveler, noOfDays, place } = formData;
    
        if (!analyzingType || !location || !budget || !traveler || !noOfDays || !place) {
            toast("Please fill all details");
            return;
        }
    
        setLoading(true);
    
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', location)
            .replace('{totalDays}', noOfDays)
            .replace('{traveler}', traveler)
            .replace('{budget}', budget)
            .replace('{vacationPlace}', place);
    
        try {
            // Create a dynamic chat session using the selected analyzingType
            const chatSession = createChatSession(analyzingType);
    
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
    };
    

    return (
        <div>
            <Header />
            <div className='sm:px-10 md:px-32 lg:px-56 xl:px-96 px-5 mt-10'>
                <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
                <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
                <div className='mt-20 flex flex-col gap-10'>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
                        <Input placeholder={'Ex: Indonesia, Malang'}
                            onChange={(v) => { handleInputChange('location', v.target.value) }}
                        />
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
                        <Input max="5" placeholder="Ex: 3 (Max 5)" type="number"
                            onChange={(e) => {
                                let value = Number(e.target.value);

                                if (value > 5) value = 5;

                                if (value < 0) value = 0;

                                handleInputChange('noOfDays', value);
                            }}
                            value={formData?.noOfDays || ''}
                        />
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>How much is your budget?</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
                            {SelectBudgetOptions.map((item) => (
                                <div
                                    key={item.id}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleInputChange('budget', item.title)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleInputChange('budget', item.title);
                                        }
                                    }}
                                    className={`p-4 border cursor-pointer rounded-lg transition ease-in-out hover:scale-105
              ${formData?.budget === item.title && 'shadow-lg shadow-gray-500 border-black dark:border-white'}`}
                                >
                                    <h2 className="text-4xl">{item.icon}</h2>
                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
                            {SelectTravelesList.map((item) => (
                                <div
                                    key={item.id}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleInputChange('traveler', item.people)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleInputChange('traveler', item.people);
                                        }
                                    }}
                                    className={`p-4 border cursor-pointer rounded-lg transition ease-in-out hover:scale-105
      ${formData?.traveler === item.people && 'shadow-lg shadow-gray-500 border-black dark:border-white'}`}
                                >
                                    <h2 className="text-4xl">{item.icon}</h2>
                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>What do you prefer about vacation places?</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
                            {SelectVacationPlace.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        const currentSelection = formData?.place?.split(', ').filter(Boolean) || [];
                                        if (currentSelection.includes(item.title)) {
                                            const updatedSelection = currentSelection.filter((place) => place !== item.title);
                                            handleInputChange('place', updatedSelection.join(', '));
                                        } else {
                                            const updatedSelection = [...currentSelection, item.title];
                                            handleInputChange('place', updatedSelection.join(', '));
                                        }
                                    }}
                                    className={`p-4 border cursor-pointer rounded-lg transition ease-in-out hover:scale-105 ${formData?.place?.includes(item.title) ? 'shadow-lg shadow-gray-500 border-black dark:border-white' : ''}`}>
                                    <h2 className='text-4xl'>{item.icon}</h2>
                                    <h2 className='font-bold text-lg'>{item.title}</h2>
                                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>What analyzing type do you choose? (Increasing Generate Time)</h2>
                        <Select onValueChange={(value) => handleInputChange('analyzingType', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Analyzing Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="gemini-1.5-flash-8b-001">Normal</SelectItem>
                                <SelectItem value="gemini-1.5-flash-002">Good</SelectItem>
                                <SelectItem value="gemini-1.5-pro-002">Better</SelectItem>
                            </SelectContent>
                        </Select>
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