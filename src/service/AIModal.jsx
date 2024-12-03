import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan With Real Information for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with hotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripDetails\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"From $30/night (prices vary)\",\n      \"hotelImageUrl\": \"https://www.excalibur.com/content/dam/excalibur/property/hero-images/Excalibur-Exterior-Twilight-Hero-1.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0954,\n        \"longitude\": -115.1762\n      },\n      \"rating\": 3.5,\n      \"description\": \"Medieval-themed resort with affordable rooms, various dining options, and a casino.\"\n    },\n    {\n      \"hotelName\": \"Luxor Hotel & Casino\",\n      \"hotelAddress\": \"3900 S Las Vegas Blvd, Las Vegas, NV 89119\",\n      \"price\": \"From $40/night (prices vary)\",\n      \"hotelImageUrl\": \"https://www.luxor.com/content/dam/luxor/property/hero-images/luxor-exterior-day-hero.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0937,\n        \"longitude\": -115.1764\n      },\n      \"rating\": 3.5,\n      \"description\": \"Iconic pyramid-shaped hotel with affordable rooms, a casino, and various entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"From $25/night (prices vary)\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/-/media/Project/CircusCircus/CircusCircusDotCom/hotel/exterior/cc-exterior-hero.jpg?h=576&la=en&w=1024&hash=B77E59715A5C9B51D41D056306295139\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1228,\n        \"longitude\": -115.1693\n      },\n      \"rating\": 3.0,\n      \"description\": \"Family-friendly resort with a circus theme, affordable rooms, and a casino.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"Iconic welcome sign\",\n          \"placeImageUrl\": \"https://www.lasvegashowto.com/wp-content/uploads/2013/08/las-vegas-sign.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.089,\n            \"longitude\": -115.174\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with light shows and live entertainment\",\n          \"placeImageUrl\": \"https://www.vegas.com/wp-content/uploads/2022/06/freemont-street-experience-las-vegas-viva-vision.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.170,\n            \"longitude\": -115.143\n          },\n          \"ticketPricing\": \"Free (shows are free to watch)\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"2-3 hours\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Daytime\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip (Las Vegas Boulevard)\",\n          \"placeDetails\": \"Explore hotels and casinos\",\n          \"placeImageUrl\": \"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/lasvegas/lv-strip-day-745037a55056a36_7450383f-5056-a36a-07ed8dd2e288d263.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.113,\n            \"longitude\": -115.173\n          },\n          \"ticketPricing\": \"Free (except for attractions within hotels)\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"4-5 hours\" \n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Giant Ferris wheel with city views\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/linq/Property/Activities/high-roller/linq-high-roller-overview.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.117,\n            \"longitude\": -115.175\n          },\n          \"ticketPricing\": \"From $30 (prices vary)\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"1-2 hours\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"bestTimeToVisit\": \"Daytime\",\n       \"plan\": [\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Public art installation south of the city\",\n          \"placeImageUrl\": \"https://www.escapetravel.com.au/wp-content/uploads/2022/03/seven-magic-mountains-1-scaled.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 35.985,\n            \"longitude\": -115.008\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"2-3 hours (including travel time)\"\n        },\n\n        {\n          \"placeName\": \"Arts District\",\n          \"placeDetails\": \"Explore street art, galleries, and antique shops\",\n          \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/13/e3/83/02/arts-district.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.168,\n            \"longitude\": -115.140\n          },\n          \"ticketPricing\": \"Free (except for purchases)\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"2-3 hours\"\n        }\n      ]\n    }\n  }\n}\n```"},
          ],
        },
      ],
    });