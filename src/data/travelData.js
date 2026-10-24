// Travel Data for PuriTravel Platform

export const LIVE_TRACKER_DATA = {
  templeStatus: {
    status: "Open - Normal Darshan",
    crowdLevel: "Moderate",
    queueTime: "25 mins",
    nextAarti: "Sandhya Aarti at 6:30 PM",
    mahaprasad: "Available at Anand Bazar (Fresh Kheer & Khaja ready)"
  },
  beachStatus: {
    tide: "Gentle Low Tide",
    waveHeight: "0.8m",
    lifeguardStatus: "Active on Golden Beach (Blue Flag Zone)",
    nextSunrise: "05:28 AM",
    waterTemp: "27°C"
  },
  chilikaStatus: {
    dolphinChance: "92% High",
    boatDeparture: "Every 20 mins from Satapada",
    weather: "Calm Breeze, Sunny 28°C"
  }
};

export const PACKAGES = [
  {
    id: "pkg-1",
    title: "Divine Jagannath Mahaprasad & VIP Darshan Experience",
    category: "spiritual",
    categoryLabel: "Spiritual Pilgrimage",
    rating: 4.95,
    reviewsCount: 382,
    duration: "3 Days / 2 Nights",
    location: "Puri Temple Corridor & Sea Beach",
    price: 6499,
    originalPrice: 8999,
    discount: "28% OFF",
    featuredBadge: "Bestseller",
    badgeColor: "bg-amber-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Shri_Jagannath_Temple%2CPuri.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jagannath_Temple%2C_Puri_07.jpg"
    ],
    highlights: [
      "Special VIP Darshan Escort with Senior Sevayat",
      "Authentic Chhappan Bhog Mahaprasad Lunch Experience",
      "Gundicha Temple & Narendra Pushkarini Holy Tank Tour",
      "Evening Sunset Beach Walk at Swargadwar",
      "Luxury AC Sedan Pick & Drop from Puri Railway Station"
    ],
    inclusions: ["4-Star Hotel Stay", "Breakfast & Mahaprasad", "VIP Temple Entry Pass", "Dedicated Tour Guide", "All Transfers"],
    description: "Immerse in the divine realm of Lord Jagannath, Lord Balabhadra, and Devi Subhadra. Skip the overwhelming crowds with an accredited Sevayat guide, experience the celestial Chhappan Bhog, and absorb the divine serenity of the sacred temple city."
  },
  {
    id: "pkg-2",
    title: "Golden Beachfront Luxury & Marine Drive Coastal Escape",
    category: "beach",
    categoryLabel: "Golden Beach & Coastal",
    rating: 4.88,
    reviewsCount: 245,
    duration: "4 Days / 3 Nights",
    location: "Blue Flag Golden Beach & Marine Drive",
    price: 9999,
    originalPrice: 13500,
    discount: "26% OFF",
    featuredBadge: "Luxury Coastal",
    badgeColor: "bg-cyan-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Golden_beach_puri.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Golden_beach_puri.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
    ],
    highlights: [
      "Private Seaview Balcony Suite at Puri Golden Beach",
      "Sunrise Beach Yoga & Guided Surfing Taster Session",
      "Scenic Puri-Konark Marine Drive Coastal Cruise",
      "Private Candlelight Seafood & Odia Delicacies Dinner",
      "Access to exclusive Blue Flag eco-beach lounge"
    ],
    inclusions: ["5-Star Beach Resort", "Buffet Breakfast & Gala Dinner", "Water Sports Voucher", "Private AC Cab", "Spa Credit ₹1500"],
    description: "Relax along the shimmering sands of Puri's certified Blue Flag Golden Beach. Listen to the ocean waves, cruise the stunning Marine Drive, and experience rejuvenating coastal luxury."
  },
  {
    id: "pkg-3",
    title: "Chilika Lake Irrawaddy Dolphin & Kalijai Island Safari",
    category: "chilika",
    categoryLabel: "Chilika & Eco Wildlife",
    rating: 4.92,
    reviewsCount: 198,
    duration: "2 Days / 1 Night",
    location: "Chilika Satapada Lagoon & Sea Mouth",
    price: 4999,
    originalPrice: 6999,
    discount: "29% OFF",
    featuredBadge: "Wildlife & Nature",
    badgeColor: "bg-emerald-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chilika_lake.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chilika_lake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Chilika_Lake_4.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Chilika_Lake-_Odisha.jpg"
    ],
    highlights: [
      "Speedboat cruise to Chilika Sea-Mouth where lake meets ocean",
      "High-probability Irrawaddy Dolphin spotting experience",
      "Visit to the revered Maa Kalijai Island Shrine",
      "Fresh Chilika Crab & Tiger Prawn Culinary Tasting",
      "Migratory Bird Sanctuary vantage points at Mangalajodi"
    ],
    inclusions: ["Eco-Cottage Stay", "Lagoon Speedboat Permit", "All Meals Included", "Certified Naturalist Guide", "Transfers from Puri"],
    description: "Explore Asia's largest brackish water lagoon. Catch playful Irrawaddy dolphins breaching the blue waters, witness hundreds of migratory birds, and feast on world-famous fresh Chilika seafood."
  },
  {
    id: "pkg-4",
    title: "Konark Sun Temple & Chandrabhaga Sun-Kissed Discovery",
    category: "heritage",
    categoryLabel: "Heritage & Culture",
    rating: 4.96,
    reviewsCount: 310,
    duration: "Full Day Guided Tour",
    location: "Konark World Heritage Site & Chandrabhaga",
    price: 2499,
    originalPrice: 3500,
    discount: "28% OFF",
    featuredBadge: "UNESCO Heritage",
    badgeColor: "bg-orange-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sun_Temple_at_Konark%2C_Odisha%2C_India.JPG",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sun_Temple_at_Konark%2C_Odisha%2C_India.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/One_of_the_24_wheels_of_Konark_Sun_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Konark_Sun_Temple_wheel.jpg"
    ],
    highlights: [
      "In-depth architectural exploration of the 13th-century Black Pagoda",
      "Decode intricate stone wheels that act as ancient sundials",
      "Sunset and light-sound show at Chandrabhaga Beach",
      "Visit to the Marine Drive Craft Bazaar",
      "Expert Odisha Archaeological Historian Guide"
    ],
    inclusions: ["Monument Priority Entry", "Expert Historian Guide", "Chilled AC Cab", "Odisha Thali Lunch", "Audio Guide headset"],
    description: "Stand in awe of the colossal chariot of the Sun God at Konark, a UNESCO World Heritage marvel. Learn how 12,000 artisans spent 12 years sculpting this poetry in stone."
  },
  {
    id: "pkg-5",
    title: "Raghurajpur Heritage Craft Village & Pattachitra Art Trail",
    category: "heritage",
    categoryLabel: "Heritage & Culture",
    rating: 4.87,
    reviewsCount: 164,
    duration: "1 Day Cultural Expedition",
    location: "Raghurajpur Heritage Crafts Village",
    price: 1999,
    originalPrice: 2800,
    discount: "28% OFF",
    featuredBadge: "Art & Handloom",
    badgeColor: "bg-amber-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Raghurajpur_7.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Raghurajpur_7.jpg",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80"
    ],
    highlights: [
      "Hands-on masterclass in ancient palm leaf Pattachitra painting",
      "Meet National Award-winning master craftsmen in their open homes",
      "Witness live Gotipua classical folk dance recital",
      "Purchase authentic handmade artifacts directly from artisans",
      "Traditional Odia village tea & snacks in a coconut grove"
    ],
    inclusions: ["Art Workshop Kit", "Folk Dance Performance", "Village Guide", "All Transportation", "Village Refreshments"],
    description: "Step into India's premier heritage crafts village where every family is an artist. Experience the living traditions of Pattachitra, palm leaf engraving, and wooden Jagannath idols."
  },
  {
    id: "pkg-6",
    title: "Grand Odisha Golden Triangle (Puri - Konark - Bhubaneswar)",
    category: "family",
    categoryLabel: "Complete Circuit",
    rating: 4.97,
    reviewsCount: 520,
    duration: "5 Days / 4 Nights",
    location: "Puri • Konark • Dhauli • Bhubaneswar",
    price: 14499,
    originalPrice: 19999,
    discount: "27% OFF",
    featuredBadge: "All-Inclusive Grand Tour",
    badgeColor: "bg-blue-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lingaraj_temple_Bhubaneswar_11004.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lingaraj_temple_Bhubaneswar_11004.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sun_Temple_at_Konark%2C_Odisha%2C_India.JPG"
    ],
    highlights: [
      "Complete coverage of Jagannath Puri, Konark Sun Temple, and Lingaraj Temple",
      "Dhauli Peace Pagoda (Emperor Ashoka Kalinga War site)",
      "Udayagiri & Khandagiri ancient rock-cut Jain caves",
      "Relaxation at Golden Beach & Chilika Satapada Dolphin Cruise",
      "Dedicated professional chauffeur and 24/7 concierge coordinator"
    ],
    inclusions: ["4/5-Star Premium Hotels", "Daily Gourmet Breakfast & Dinners", "VIP Entry in all sites", "Private AC Innova/Sedan", "24/7 Concierge"],
    description: "The definitive Odyssey of Odisha. From ancient temple architectures and timeless stone carvings to peaceful beaches and sacred holy sanctums, experience the ultimate journey."
  },
  {
    id: "pkg-7",
    title: "Divine Kashi Vishwanath & Ganga Aarti Spiritual Yatra",
    category: "spiritual",
    secondaryCategory: "pan-india",
    categoryLabel: "Pan-India Spiritual",
    rating: 4.98,
    reviewsCount: 640,
    duration: "3 Days / 2 Nights",
    location: "Varanasi Ghats & Kashi Corridor, UP",
    price: 7999,
    originalPrice: 10999,
    discount: "27% OFF",
    featuredBadge: "Sacred Jyotirlinga",
    badgeColor: "bg-amber-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Evening_Ganga_Aarti%2C_at_Dashashwamedh_ghat%2C_Varanasi.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Evening_Ganga_Aarti%2C_at_Dashashwamedh_ghat%2C_Varanasi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Ganga_Aarti_at_Varanasi_ghats.jpg"
    ],
    highlights: [
      "VIP Sugam Darshan at Shri Kashi Vishwanath Jyotirlinga",
      "Private boat reserved for Dashashwamedh Ghat Evening Ganga Aarti",
      "Subah-e-Banaras sunrise holy dip and boat ride",
      "Guided spiritual walk through ancient Sarnath Buddhist site",
      "Traditional Banarasi Satvik Thali & Paan experience"
    ],
    inclusions: ["Heritage Riverside Hotel", "Breakfast & Banarasi Dinner", "VIP Sugam Darshan Pass", "Private Ganga Boat", "Local Pandit Guide"],
    description: "Experience the eternal city of Lord Shiva. Witness the mesmerizing flames of the Dashashwamedh Ghat Ganga Aarti, pray at the golden spires of Kashi Vishwanath, and cruise the sacred holy waters of Mother Ganga."
  },
  {
    id: "pkg-8",
    title: "Shri Ram Janmabhoomi & Ayodhya Dham Sacred Pilgrimage",
    category: "spiritual",
    secondaryCategory: "pan-india",
    categoryLabel: "Pan-India Spiritual",
    rating: 4.99,
    reviewsCount: 890,
    duration: "2 Days / 1 Night",
    location: "Ayodhya Dham, Uttar Pradesh",
    price: 5499,
    originalPrice: 7500,
    discount: "26% OFF",
    featuredBadge: "Ram Lalla Darshan",
    badgeColor: "bg-orange-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg"
    ],
    highlights: [
      "Special guided darshan at the magnificent Shri Ram Janmabhoomi Mandir",
      "Evening Maha Aarti at sacred Saryu Ghat",
      "Blessing visit at Hanuman Garhi temple",
      "Kanak Bhawan & Dashrath Mahal historical tour",
      "Private AC vehicle pickup & drop from Ayodhya/Lucknow airport"
    ],
    inclusions: ["Premium Hotel Stay", "Breakfast & Traditional Meals", "Priority Darshan Assistance", "Dedicated Tour Escort", "All Local Transfers"],
    description: "Embark on a soul-stirring journey to Ayodhya Dham, the birthplace of Lord Rama. Bow before the divine Ram Lalla idol in the newly consecrated grand temple and participate in the evening Saryu River aarti."
  },
  {
    id: "pkg-9",
    title: "Tirupati Balaji Sheegra VIP Darshan & Tirumala Sacred Hills",
    category: "spiritual",
    secondaryCategory: "pan-india",
    categoryLabel: "Pan-India Spiritual",
    rating: 4.97,
    reviewsCount: 710,
    duration: "2 Days / 1 Night",
    location: "Tirumala Hills, Andhra Pradesh",
    price: 6999,
    originalPrice: 9500,
    discount: "26% OFF",
    featuredBadge: "Sheegra Darshan",
    badgeColor: "bg-amber-500",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Tirumala_Tirupati.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Tirumala_Tirupati.jpg"
    ],
    highlights: [
      "Guaranteed Sheegra Special Entry VIP Darshan for Lord Venkateswara",
      "Sacred Tirupati Laddu Prasadam included for all devotees",
      "Visit to Goddess Padmavathi Ammavari Temple at Tiruchanur",
      "Scenic AC vehicle drive through the holy Seven Seshachalam Hills",
      "Assistance with traditional tonsuring / seva rituals"
    ],
    inclusions: ["3-Star Hotel in Tirupati", "Breakfast & South Indian Meals", "Official TTD Special Entry Pass", "Private AC Cab Transfer", "Experienced Tour Guide"],
    description: "Receive the divine blessings of Lord Venkateswara at Tirumala, the Kaliyuga Vaikuntham. Our seamless pilgrimage package handles your Sheegra Darshan pass, transport up the hills, and temple prasad effortlessly."
  },
  {
    id: "pkg-10",
    title: "Kashmir Paradise: Dal Lake Shikara & Gulmarg Alpine Meadow",
    category: "family",
    secondaryCategory: "pan-india",
    categoryLabel: "Pan-India Holidays",
    rating: 4.95,
    reviewsCount: 430,
    duration: "5 Days / 4 Nights",
    location: "Srinagar • Gulmarg • Pahalgam, Kashmir",
    price: 16999,
    originalPrice: 22999,
    discount: "26% OFF",
    featuredBadge: "Paradise on Earth",
    badgeColor: "bg-emerald-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Shikara_Dal_Lake.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Shikara_Dal_Lake.jpg"
    ],
    highlights: [
      "Luxury carved wooden Houseboat stay on Dal Lake",
      "Sunset Shikara ride through floating gardens and lotus lakes",
      "Gulmarg Gondola Phase 1 & 2 scenic mountain cable car ride",
      "Pahalgam Betaab Valley & Aru Valley excursion",
      "Mughal Gardens (Nishat & Shalimar Bagh) heritage tour"
    ],
    inclusions: ["Luxury Houseboat & 4-Star Resort", "Daily Breakfast & Dinner", "Shikara Ride Voucher", "Heated Private AC Cab", "All Tolls & Permits"],
    description: "Discover why Kashmir is called Paradise on Earth. Glide peacefully across Dal Lake on a traditional Shikara, ascend the snow-capped peaks of Gulmarg, and immerse yourself in the warm hospitality of the valley."
  },
  {
    id: "pkg-11",
    title: "Rishikesh & Haridwar: Holy Ganga Aarti & Himalayan Foothills",
    category: "spiritual",
    secondaryCategory: "pan-india",
    categoryLabel: "Pan-India Spiritual",
    rating: 4.93,
    reviewsCount: 380,
    duration: "3 Days / 2 Nights",
    location: "Rishikesh • Haridwar, Uttarakhand",
    price: 5999,
    originalPrice: 8200,
    discount: "26% OFF",
    featuredBadge: "Yoga & Ganga Aarti",
    badgeColor: "bg-cyan-600",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Lakshman_Jhula%2C_Rishikesh%2C_Uttarakhand%2C_India.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Lakshman_Jhula%2C_Rishikesh%2C_Uttarakhand%2C_India.jpg"
    ],
    highlights: [
      "VIP Seating at Har Ki Pauri Evening Ganga Aarti in Haridwar",
      "Guided walk across iconic Lakshman Jhula and Ram Jhula suspension bridges",
      "Morning Himalayan sunrise yoga and meditation session by the river",
      "Visit to the historic Beatles Ashram & Triveni Ghat",
      "Neelkanth Mahadev sacred mountain temple excursion"
    ],
    inclusions: ["Riverfront Resort Stay", "Pure Vegetarian Meals", "Yoga Session with Master", "Private AC Cab Transfer", "Aarti Puja Samagri"],
    description: "Recharge your mind and spirit in the Yoga Capital of the World where the sacred Ganga emerges crystal clear from the Himalayas. Enjoy soothing river breezes, divine aarti chants, and scenic mountain views."
  }
];

export const HOTELS = [
  {
    id: "htl-1",
    name: "Mayfair Waves Beach Resort & Spa",
    rating: 4.9,
    reviews: 420,
    location: "Chakratirtha Road, Puri Sea Beach",
    pricePerNight: 8500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    tag: "Beachfront Luxury",
    amenities: ["Ocean View Balcony", "Infinity Pool", "Private Beach Access", "Ayurvedic Spa", "Seafood Restaurant"]
  },
  {
    id: "htl-2",
    name: "Sterling Puri Golden Sands",
    rating: 4.7,
    reviews: 380,
    location: "Sipasarubali, Near River Mouth, Puri",
    pricePerNight: 5800,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    tag: "Estuary & Beach View",
    amenities: ["Private Beach", "Kids Play Area", "Multi-Cuisine Dining", "Cultural Evening Shows", "Free Wi-Fi"]
  },
  {
    id: "htl-3",
    name: "The Chariot Resort & Heritage Stays",
    rating: 4.6,
    reviews: 290,
    location: "Sipasarubali Sand Dunes, Puri",
    pricePerNight: 4600,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    tag: "Family Heritage Resort",
    amenities: ["Olympic Sized Pool", "Lush Gardens", "Temple Shuttle Service", "Gym & Wellness", "Buffet Breakfast"]
  },
  {
    id: "htl-4",
    name: "Toshali Sands Nature & Wellness Resort",
    rating: 4.8,
    reviews: 310,
    location: "Puri-Konark Marine Drive",
    pricePerNight: 6200,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    tag: "Eco Village Stays",
    amenities: ["Private Balighai Beach", "Ayurvedic Retreat", "Tennis Courts", "Organic Farm Food", "Campfire Nights"]
  }
];

export const ITINERARY_ACTIVITIES = [
  { id: "act-1", title: "Jagannath Temple Mangala Alati (5:00 AM)", category: "Spiritual", duration: "2 hrs", cost: 500, timeSlot: "Early Morning" },
  { id: "act-2", title: "Chhappan Bhog Sacred Mahaprasad Feast", category: "Culinary", duration: "1.5 hrs", cost: 650, timeSlot: "Lunch" },
  { id: "act-3", title: "Puri Golden Beach Surfing & Speedboat", category: "Adventure", duration: "2 hrs", cost: 1200, timeSlot: "Morning" },
  { id: "act-4", title: "Konark Sun Temple Light & Sound Spectacle", category: "Culture", duration: "3 hrs", cost: 950, timeSlot: "Evening" },
  { id: "act-5", title: "Chilika Dolphin Boat Cruise at Satapada", category: "Nature", duration: "4 hrs", cost: 1800, timeSlot: "Morning" },
  { id: "act-6", title: "Raghurajpur Village Pattachitra Art Painting", category: "Handicrafts", duration: "2.5 hrs", cost: 800, timeSlot: "Afternoon" },
  { id: "act-7", title: "Sunset Camel Ride & Seaside Street Food", category: "Leisure", duration: "1.5 hrs", cost: 400, timeSlot: "Sunset" },
  { id: "act-8", title: "Chandan Yatra Boat Ritual at Narendra Tank", category: "Spiritual", duration: "1.5 hrs", cost: 350, timeSlot: "Late Afternoon" }
];

export const TEMPLE_TIPS = [
  {
    title: "Mandatory Dress Code",
    desc: "Traditional Indian attire is encouraged. Men wear Dhoti/Kurta or formal pants & shirts; women wear Sarees, Salwar Kameez, or traditional suits.",
    icon: "Shirt"
  },
  {
    title: "Electronic & Leather Restrictions",
    desc: "Strictly no mobile phones, cameras, smartwatches, leather belts, or leather wallets are permitted inside the temple. Safe lockers are available at the entrance.",
    icon: "ShieldAlert"
  },
  {
    title: "Mahaprasad Timings",
    desc: "Fresh Mahaprasad (Abhada) arrives at Anand Bazar daily between 1:00 PM and 3:30 PM. Prepared in earthen pots over wood fires, it is celestial.",
    icon: "Utensils"
  },
  {
    title: "Accredited Sevayat Escort",
    desc: "Always book through PuriTravel verified guides to avoid unofficial touts and ensure peaceful, respectful Darshan without rush.",
    icon: "Award"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Ananya Mohapatra",
    city: "Bhubaneswar & Bengaluru",
    role: "Family Vacationer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "PuriTravel made our family pilgrimage effortless! Having a designated Sevayat escort at Jagannath Temple saved my elderly parents from the long queues. The Chhappan Bhog arrangement was divine.",
    tourTaken: "Divine Jagannath Mahaprasad & VIP Darshan"
  },
  {
    id: 2,
    name: "Rajesh & Priya Sharma",
    city: "New Delhi",
    role: "Honeymoon Couple",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The Golden Beach resort they arranged had the most breathtaking morning sunrise views. Marine Drive drive in the convertible cab was the highlight of our coastal trip!",
    tourTaken: "Golden Beachfront Luxury & Marine Drive"
  },
  {
    id: 3,
    name: "Marcus Vance",
    city: "Sydney, Australia",
    role: "Cultural Photographer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The Chilika Lake boat ride was spectacular—we spotted four Irrawaddy dolphins right beside our boat! Raghurajpur artisans were so warm. Perfectly organized by PuriTravel.",
    tourTaken: "Chilika Lake Dolphin & Kalijai Island Safari"
  }
];

export const SOCIAL_CHANNELS = [
  {
    name: "WhatsApp Concierge",
    color: "#25D366",
    handle: "+91 98610 99880",
    description: "Instant 24/7 Booking & Darshan assistance on WhatsApp",
    action: "Chat Now",
    icon: "MessageCircle"
  },
  {
    name: "Instagram Stories",
    color: "#E1306C",
    handle: "@PuriTravel.Official",
    description: "Daily live darshan glimpses, beach sunrises & traveler stories",
    action: "Follow Reels",
    icon: "Instagram"
  },
  {
    name: "YouTube Vlogs",
    color: "#FF0000",
    handle: "PuriTravel Explorer",
    description: "Virtual 4K temple walking tours & Odisha food guides",
    action: "Watch Vlogs",
    icon: "Youtube"
  },
  {
    name: "Facebook Community",
    color: "#1877F2",
    handle: "Puri Travelers Club",
    description: "45,000+ devotees & coastal travelers sharing tips",
    action: "Join Club",
    icon: "Users"
  },
  {
    name: "Twitter / X Alerts",
    color: "#0f172a",
    handle: "@PuriTravelAlerts",
    description: "Live Mandir queue timings, beach weather & road conditions",
    action: "Get Alerts",
    icon: "Bell"
  }
];
