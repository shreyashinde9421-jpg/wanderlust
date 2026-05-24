const sampleListings = [
  {
    title: "Snow Paradise Villa",
    description: "Cold snowy villa in Gulmarg surrounded by Himalayan peaks and pine forests.",
    image: { url: "https://source.unsplash.com/600x400/?kashmir,snow", filename: "img1" },
    price: 4500,
    location: "Gulmarg",
    country: "India",
    category: ["Mountains", "Arctic", "Trending"]
  },

  {
    title: "Dal Lake Cottage Stay",
    description: "Peaceful wooden cottage with lake views and cold mountain breeze.",
    image: { url: "https://source.unsplash.com/600x400/?dal-lake", filename: "img2" },
    price: 3200,
    location: "Srinagar",
    country: "India",
    category: ["Mountains", "Trending", "Camping"]
  },

  {
    title: "Goa Beach Luxury Villa",
    description: "Tropical beach villa with nightlife, palm trees and private pool.",
    image: { url: "https://source.unsplash.com/600x400/?goa,beach", filename: "img3" },
    price: 7500,
    location: "Goa",
    country: "India",
    category: ["Boats", "Trending", "Amazing Pools"]
  },

  {
    title: "Mumbai Skyline Apartment",
    description: "High-rise luxury apartment with modern city lifestyle and skyline view.",
    image: { url: "https://source.unsplash.com/600x400/?mumbai,skyline", filename: "img4" },
    price: 9000,
    location: "Mumbai",
    country: "India",
    category: ["Iconic Cities", "Trending", "Rooms"]
  },

  {
    title: "Jaipur Royal Palace Stay",
    description: "Traditional royal haveli with Rajasthani architecture and heritage feel.",
    image: { url: "https://source.unsplash.com/600x400/?jaipur,palace", filename: "img5" },
    price: 6000,
    location: "Jaipur",
    country: "India",
    category: ["Castles", "Iconic Cities", "Trending"]
  },

  {
    title: "Manali Snow Cabin Retreat",
    description: "Wooden cabin surrounded by snow mountains and peaceful nature.",
    image: { url: "https://source.unsplash.com/600x400/?manali,snow", filename: "img6" },
    price: 4000,
    location: "Manali",
    country: "India",
    category: ["Mountains", "Camping", "Arctic"]
  },

  {
    title: "Kerala Backwater Houseboat",
    description: "Floating luxury houseboat with calm waters and coconut trees.",
    image: { url: "https://source.unsplash.com/600x400/?kerala,houseboat", filename: "img7" },
    price: 8000,
    location: "Alleppey",
    country: "India",
    category: ["Boats", "Trending", "Amazing Pools"]
  },

  {
    title: "Delhi Heritage Haveli",
    description: "Colonial-style stay near historical monuments and old city charm.",
    image: { url: "https://source.unsplash.com/600x400/?delhi,heritage", filename: "img8" },
    price: 5500,
    location: "New Delhi",
    country: "India",
    category: ["Iconic Cities", "Rooms", "Trending"]
  },

  {
    title: "Shimla Hill Retreat",
    description: "Cold hill station stay surrounded by pine forests and fog.",
    image: { url: "https://source.unsplash.com/600x400/?shimla,hills", filename: "img9" },
    price: 3500,
    location: "Shimla",
    country: "India",
    category: ["Mountains", "Camping", "Trending"]
  },

  {
    title: "Udaipur Lake Palace",
    description: "Luxury palace floating over lake with royal vibes.",
    image: { url: "https://source.unsplash.com/600x400/?udaipur,lake", filename: "img10" },
    price: 12000,
    location: "Udaipur",
    country: "India",
    category: ["Castles", "Trending", "Iconic Cities"]
  },

  {
    title: "Ooty Tea Estate Stay",
    description: "Cool climate stay surrounded by tea gardens and mist.",
    image: { url: "https://source.unsplash.com/600x400/?ooty,tea", filename: "img11" },
    price: 4200,
    location: "Ooty",
    country: "India",
    category: ["Mountains", "Camping", "Trending"]
  },

  {
    title: "Darjeeling Mountain View",
    description: "Himalayan views with cold weather and toy train experience.",
    image: { url: "https://source.unsplash.com/600x400/?darjeeling,mountains", filename: "img12" },
    price: 3800,
    location: "Darjeeling",
    country: "India",
    category: ["Mountains", "Trending", "Camping"]
  },

  {
    title: "Rishikesh River Camp",
    description: "Adventure camping near Ganga river with rafting and nature.",
    image: { url: "https://source.unsplash.com/600x400/?rishikesh,camping", filename: "img13" },
    price: 3000,
    location: "Rishikesh",
    country: "India",
    category: ["Camping", "Trending", "Mountains"]
  },

  {
    title: "Agra Taj View Stay",
    description: "Hotel with direct view of Taj Mahal and historic charm.",
    image: { url: "https://source.unsplash.com/600x400/?agra,taj", filename: "img14" },
    price: 6500,
    location: "Agra",
    country: "India",
    category: ["Iconic Cities", "Trending", "Rooms"]
  },

  {
    title: "Hyderabad Tech Apartment",
    description: "Modern apartment in IT city with fast urban lifestyle.",
    image: { url: "https://source.unsplash.com/600x400/?hyderabad,city", filename: "img15" },
    price: 5000,
    location: "Hyderabad",
    country: "India",
    category: ["Trending", "Rooms", "Iconic Cities"]
  },

  {
    title: "Chennai Coastal Stay",
    description: "Warm coastal stay near Marina beach with sea breeze.",
    image: { url: "https://source.unsplash.com/600x400/?chennai,beach", filename: "img16" },
    price: 4800,
    location: "Chennai",
    country: "India",
    category: ["Boats", "Trending", "Amazing Pools"]
  },

  {
    title: "Pune Green Villa",
    description: "Peaceful villa surrounded by greenery and calm weather.",
    image: { url: "https://source.unsplash.com/600x400/?pune,villa", filename: "img17" },
    price: 5200,
    location: "Pune",
    country: "India",
    category: ["Trending", "Rooms", "Camping"]
  },

  {
    title: "Ladakh Desert Stay",
    description: "Cold desert mountains with extreme weather and silence.",
    image: { url: "https://source.unsplash.com/600x400/?ladakh,mountains", filename: "img18" },
    price: 7000,
    location: "Ladakh",
    country: "India",
    category: ["Arctic", "Mountains", "Camping"]
  },

  {
    title: "Nainital Lake House",
    description: "Beautiful lake town stay surrounded by hills and mist.",
    image: { url: "https://source.unsplash.com/600x400/?nainital,lake", filename: "img19" },
    price: 4100,
    location: "Nainital",
    country: "India",
    category: ["Mountains", "Trending", "Camping"]
  },

  {
    title: "Goa Luxury Pool Villa",
    description: "Private pool villa near beach with luxury lifestyle.",
    image: { url: "https://source.unsplash.com/600x400/?pool,villa", filename: "img20" },
    price: 15000,
    location: "Goa",
    country: "India",
    category: ["Amazing Pools", "Trending", "Boats"]
  },

  {
    title: "Paris Eiffel Apartment",
    description: "Romantic apartment near Eiffel Tower with city lights.",
    image: { url: "https://source.unsplash.com/600x400/?paris,eiffel", filename: "img21" },
    price: 20000,
    location: "Paris",
    country: "France",
    category: ["Iconic Cities", "Trending", "Rooms"]
  },

  {
    title: "Dubai Desert Luxury Villa",
    description: "Hot desert luxury villa with sand dunes and premium lifestyle.",
    image: { url: "https://source.unsplash.com/600x400/?dubai,desert", filename: "img22" },
    price: 22000,
    location: "Dubai",
    country: "UAE",
    category: ["Trending", "Amazing Pools", "Castles"]
  },

  {
    title: "Swiss Alps Cabin",
    description: "Snowy mountain cabin surrounded by Alps and cold weather.",
    image: { url: "https://source.unsplash.com/600x400/?swiss,alps", filename: "img23" },
    price: 25000,
    location: "Zermatt",
    country: "Switzerland",
    category: ["Mountains", "Arctic", "Camping"]
  },

  {
    title: "Bali Jungle Villa",
    description: "Tropical jungle villa with private pool and greenery.",
    image: { url: "https://source.unsplash.com/600x400/?bali,villa", filename: "img24" },
    price: 14000,
    location: "Bali",
    country: "Indonesia",
    category: ["Amazing Pools", "Trending", "Boats"]
  },

  {
    title: "Singapore Sky Stay",
    description: "Futuristic city apartment with skyline and modern design.",
    image: { url: "https://source.unsplash.com/600x400/?singapore,city", filename: "img25" },
    price: 18000,
    location: "Singapore",
    country: "Singapore",
    category: ["Iconic Cities", "Trending", "Rooms"]
  },
  {
    title: "Himalayan Ice Dome Stay",
    description: "Unique dome-shaped stay in extreme cold Himalayan region with snowy surroundings.",
    image: { url: "https://source.unsplash.com/600x400/?igloo,snow", filename: "img26" },
    price: 5200,
    location: "Spiti Valley",
    country: "India",
    category: ["Arctic", "Mountains", "Camping"]
  },

  {
    title: "Andaman Sea Cliff Resort",
    description: "Cliff-side resort overlooking crystal clear ocean waters and beaches.",
    image: { url: "https://source.unsplash.com/600x400/?andaman,sea", filename: "img27" },
    price: 9800,
    location: "Havelock Island",
    country: "India",
    category: ["Boats", "Amazing Pools", "Trending"]
  },

  {
    title: "London Heritage Apartment",
    description: "Classic European apartment near historical London streets and landmarks.",
    image: { url: "https://source.unsplash.com/600x400/?london,city", filename: "img28" },
    price: 21000,
    location: "London",
    country: "UK",
    category: ["Iconic Cities", "Rooms", "Trending"]
  },

  {
    title: "New York High Rise Studio",
    description: "Modern studio apartment in Manhattan with skyscraper views.",
    image: { url: "https://source.unsplash.com/600x400/?newyork,skyline", filename: "img29" },
    price: 25000,
    location: "New York",
    country: "USA",
    category: ["Iconic Cities", "Trending", "Rooms"]
  },

  {
    title: "Tokyo Neon Capsule Stay",
    description: "Futuristic capsule hotel experience in the heart of Tokyo city.",
    image: { url: "https://source.unsplash.com/600x400/?tokyo,city", filename: "img30" },
    price: 16000,
    location: "Tokyo",
    country: "Japan",
    category: ["Iconic Cities", "Rooms", "Trending"]
  },

  {
    title: "Swiss Alpine Glass Cabin",
    description: "Glass cabin surrounded by snowy Alps with breathtaking mountain views.",
    image: { url: "https://source.unsplash.com/600x400/?switzerland,cabin", filename: "img31" },
    price: 28000,
    location: "Interlaken",
    country: "Switzerland",
    category: ["Mountains", "Arctic", "Trending"]
  },

  {
    title: "Santorini Cliff Villa",
    description: "White and blue villa on cliffs overlooking Aegean Sea.",
    image: { url: "https://source.unsplash.com/600x400/?santorini,sea", filename: "img32" },
    price: 30000,
    location: "Santorini",
    country: "Greece",
    category: ["Amazing Pools", "Trending", "Iconic Cities"]
  },

  {
    title: "Dubai Sky Pool Penthouse",
    description: "Luxury penthouse with infinity pool and skyline desert views.",
    image: { url: "https://source.unsplash.com/600x400/?dubai,skyline", filename: "img33" },
    price: 50000,
    location: "Dubai",
    country: "UAE",
    category: ["Amazing Pools", "Iconic Cities", "Trending"]
  },

  {
    title: "Maldives Water Villa",
    description: "Overwater villa with turquoise sea and private deck.",
    image: { url: "https://source.unsplash.com/600x400/?maldives,villa", filename: "img34" },
    price: 45000,
    location: "Maldives",
    country: "Maldives",
    category: ["Boats", "Amazing Pools", "Trending"]
  },

  {
    title: "Himalayan Monastery Stay",
    description: "Peaceful monastery stay in high mountains with cold silence.",
    image: { url: "https://source.unsplash.com/600x400/?monastery,mountains", filename: "img35" },
    price: 3000,
    location: "Ladakh",
    country: "India",
    category: ["Mountains", "Arctic", "Camping"]
  },

  {
    title: "Australian Beach House",
    description: "Sunny beach house with surfing spots and ocean breeze.",
    image: { url: "https://source.unsplash.com/600x400/?australia,beach", filename: "img36" },
    price: 22000,
    location: "Sydney",
    country: "Australia",
    category: ["Boats", "Trending", "Amazing Pools"]
  },

  {
    title: "Italian Countryside Villa",
    description: "Rustic villa surrounded by vineyards and rolling hills.",
    image: { url: "https://source.unsplash.com/600x400/?italy,villa", filename: "img37" },
    price: 19000,
    location: "Tuscany",
    country: "Italy",
    category: ["Castles", "Trending", "Rooms"]
  },

  {
    title: "Canadian Snow Lodge",
    description: "Warm wooden lodge in heavy snow forest region.",
    image: { url: "https://source.unsplash.com/600x400/?canada,snow", filename: "img38" },
    price: 17000,
    location: "Banff",
    country: "Canada",
    category: ["Arctic", "Mountains", "Camping"]
  },

  {
    title: "Thailand Floating Market Stay",
    description: "Unique riverside stay near floating markets and boats.",
    image: { url: "https://source.unsplash.com/600x400/?thailand,river", filename: "img39" },
    price: 9000,
    location: "Bangkok",
    country: "Thailand",
    category: ["Boats", "Trending", "Iconic Cities"]
  },

  {
    title: "Egypt Desert Pyramid View Stay",
    description: "Hotel with direct pyramid view in hot desert climate.",
    image: { url: "https://source.unsplash.com/600x400/?egypt,pyramid", filename: "img40" },
    price: 14000,
    location: "Cairo",
    country: "Egypt",
    category: ["Iconic Cities", "Trending", "Camping"]
  },

  {
    title: "Bangalore Tech Loft",
    description: "Modern loft apartment in IT hub city with urban lifestyle.",
    image: { url: "https://source.unsplash.com/600x400/?bangalore,city", filename: "img41" },
    price: 6000,
    location: "Bangalore",
    country: "India",
    category: ["Trending", "Rooms", "Iconic Cities"]
  },

  {
    title: "Mysore Heritage Palace Stay",
    description: "Royal palace stay with traditional South Indian architecture.",
    image: { url: "https://source.unsplash.com/600x400/?mysore,palace", filename: "img42" },
    price: 7000,
    location: "Mysore",
    country: "India",
    category: ["Castles", "Iconic Cities", "Trending"]
  },

  {
    title: "Goan Cliff Sunset Villa",
    description: "Luxury villa on cliff with sunset ocean view.",
    image: { url: "https://source.unsplash.com/600x400/?goa,cliff", filename: "img43" },
    price: 11000,
    location: "South Goa",
    country: "India",
    category: ["Boats", "Amazing Pools", "Trending"]
  },

  {
    title: "Nepal Everest Base Camp Stay",
    description: "Extreme cold trekking stay near Everest base region.",
    image: { url: "https://source.unsplash.com/600x400/?everest,mountains", filename: "img44" },
    price: 8000,
    location: "Khumbu",
    country: "Nepal",
    category: ["Mountains", "Arctic", "Camping"]
  },

  {
    title: "Vietnam Rice Field Villa",
    description: "Peaceful villa surrounded by green rice terraces.",
    image: { url: "https://source.unsplash.com/600x400/?vietnam,ricefield", filename: "img45" },
    price: 7500,
    location: "Hanoi",
    country: "Vietnam",
    category: ["Trending", "Rooms", "Boats"]
  },

  {
    title: "Russia Ice Hotel Stay",
    description: "Extreme ice hotel experience in freezing conditions.",
    image: { url: "https://source.unsplash.com/600x400/?russia,snow", filename: "img46" },
    price: 26000,
    location: "Moscow",
    country: "Russia",
    category: ["Arctic", "Castles", "Mountains"]
  },

  {
    title: "France Countryside Cottage",
    description: "Calm countryside cottage surrounded by lavender fields.",
    image: { url: "https://source.unsplash.com/600x400/?france,countryside", filename: "img47" },
    price: 15000,
    location: "Provence",
    country: "France",
    category: ["Rooms", "Trending", "Castles"]
  },

  {
    title: "Sri Lanka Beach Resort",
    description: "Tropical beach resort with palm trees and calm waves.",
    image: { url: "https://source.unsplash.com/600x400/?sri-lanka,beach", filename: "img48" },
    price: 9500,
    location: "Galle",
    country: "Sri Lanka",
    category: ["Boats", "Amazing Pools", "Trending"]
  },

  {
    title: "Hong Kong Skyline Apartment",
    description: "Dense futuristic city apartment with skyscraper views.",
    image: { url: "https://source.unsplash.com/600x400/?hongkong,city", filename: "img49" },
    price: 23000,
    location: "Hong Kong",
    country: "China",
    category: ["Iconic Cities", "Trending", "Rooms"]
  },

  {
    title: "Kashmir Alpine Valley Stay",
    description: "Green valley stay with snowy mountains and fresh air.",
    image: { url: "https://source.unsplash.com/600x400/?kashmir,valley", filename: "img50" },
    price: 5000,
    location: "Pahalgam",
    country: "India",
    category: ["Mountains", "Camping", "Trending"]
  },
];

module.exports = { data: sampleListings };