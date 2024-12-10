export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'',
        people:'1 Person'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adventure',
        icon:'',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'',
        people:'6 - 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:''
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:''
    },
    {
        id:3,
        title:'Expensive',
        desc:'Dont worry about cost',
        icon:''
    }
]

export const SelectVacationPlace=[
    {
        id: 1,
        title: 'Theme Park',
        desc: 'Exciting rides and family fun',
        icon: ''
    },
    {
        id: 2,
        title: 'Forest',
        desc: 'Peaceful retreat surrounded by nature',
        icon: ''
    },
    {
        id: 3,
        title: 'Mountain',
        desc: 'Adventure and breathtaking views',
        icon: ''
    },
    {
        id: 4,
        title: 'Beach',
        desc: 'Relax by the sea under the sun',
        icon: ''
    },
    {
        id: 5,
        title: 'Historical Sites',
        desc: 'Step back in time at iconic landmarks',
        icon: ''
    },
]
                          
export const AI_PROMPT = "Generate Travel Plan With Real And Fact Information for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget  with taking place of itinerary at {vacationPlace}, and make sure the itinerary is the popular place in {location}, Give me a Hotels options list with hotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with taking place of itinerary at {vacationPlace} with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit as clock format (AM/PM) only, write in JSON format, and make hotels and itinerary as array. (JUST SEND JSON DONT WRITE NOTE OR SMTH AFTER IT)"