import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const createChatSession = (modelType) => {
    const model = genAI.getGenerativeModel({
        model: modelType, // Use the dynamically passed model type
    });

    return model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan With Real And Fact Information for Location : Las Vegas, for 3 Days for Couple with a Cheap budget with taking place of itinerary at beach, and make sure the itinerary is the popular place in Las Vegas, Give me a Hotels options list with hotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with taking place of itinerary at beach with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit as clock format (AM/PM) only, write in JSON format, and make hotels and itinerary as array. (JUST SEND JSON DONT WRITE NOTE OR SMTH AFTER IT)"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripDetails\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\",\n    \"theme\": \"Beach Getaway (Simulated)\" \n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$30-$70/night (variable)\", \n      \"hotelImageUrl\": \"https://www.excalibur.com/content/dam/excalibur/Property/Excalibur_Exterior_Night.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.097954,\n        \"longitude\": -115.175935\n      },\n      \"rating\": \"3.5\",\n      \"description\": \"Affordable and themed hotel with a castle-like exterior, various dining options, and entertainment.\"\n    },\n    {\n      \"hotelName\": \"Luxor Hotel and Casino\",\n      \"hotelAddress\": \"3900 S Las Vegas Blvd, Las Vegas, NV 89119\",\n      \"price\": \"$40-$80/night (variable)\",\n      \"hotelImageUrl\": \"https://www.luxor.com/content/dam/luxor/Property/Luxor_Exterior_Night.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0944,\n        \"longitude\": -115.1762 \n      },\n      \"rating\": \"3.5\",\n      \"description\": \"Pyramid-shaped hotel offering affordable rooms, a casino, and various entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$35-$75/night (variable)\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/content/dam/circus/Property/Circus_Exterior_Night.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1218,\n        \"longitude\": -115.1664\n      },\n      \"rating\": \"3.0\",\n      \"description\": \"Family-friendly hotel with a circus theme, affordable rooms, a casino, and an Adventuredome.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Mandalay Bay Beach\",\n          \"placeDetails\": \"Artificial beach with a wave pool, lazy river, and beachside casino.\",\n          \"placeImageUrl\": \"https://www.mandalaybay.com/content/dam/mandalaybay/Property/Mandalay_Beach_Aerial_Day.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0915,\n            \"longitude\": -115.1739\n          },\n          \"ticketPricing\": \"$20-$30 (variable)\", \n          \"rating\": \"4.0\",\n          \"time\": \"10:00 AM - 4:00 PM\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Open-air shopping and dining district with the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/linq/Property/LINQ_Promenade_Night_Hero.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1189,\n            \"longitude\": -115.1724\n          },\n          \"ticketPricing\": \"Free (shopping and dining vary)\",\n          \"rating\": \"4.0\",\n          \"time\": \"6:00 PM - 9:00 PM\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"The Venetian Pool Deck\",\n          \"placeDetails\": \"Multiple pools, including a Canyon Ranch SpaClub pool, offering a relaxing experience.\",\n          \"placeImageUrl\": \"https://www.venetian.com/content/dam/venetian/Property/Venetian_Pool_Deck.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1172,\n            \"longitude\": -115.1714\n          },\n          \"ticketPricing\": \"Hotel guests: Free, Others: Variable\", \n          \"rating\": \"4.5\",\n          \"time\": \"10:00 AM - 4:00 PM\" \n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Covered pedestrian mall with live entertainment, light shows, and zip lines.\",\n          \"placeImageUrl\": \"https://vegasexperience.com/wp-content/uploads/2016/09/FSE-VivaVision-04-1024x683.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1696,\n            \"longitude\": -115.1416\n          },\n          \"ticketPricing\": \"Free (attractions vary)\",\n          \"rating\": \"4.0\",\n          \"time\": \"7:00 PM - 10:00 PM\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Wet'n'Wild Las Vegas (Closed)\",\n          \"placeDetails\": \"(NOTE: Permanently Closed. Consider an alternative water park or pool option).\", \n          \"placeImageUrl\": \"N/A\",\n          \"geoCoordinates\": { \"latitude\": \"N/A\", \"longitude\": \"N/A\" },\n          \"ticketPricing\": \"N/A\",\n          \"rating\": \"N/A\",\n          \"time\": \"N/A\"\n        },\n         {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Giant Ferris wheel offering panoramic views of the Las Vegas Strip.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/linq/Things-To-Do/High-Roller/LINQ_High_Roller_Night_01.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1187,\n            \"longitude\": -115.1726\n          },\n          \"ticketPricing\": \"$30-$40 (variable)\", \n          \"rating\": \"4.5\",\n          \"time\": \"7:00 PM - 9:00 PM\"\n        }\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
};
