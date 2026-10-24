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
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=900&q=80"
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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
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
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=900&q=80"
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
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=900&q=80"
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
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80"
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
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
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
