import React from 'react';
import { 
  Building2, 
  Star, 
  MapPin, 
  Check, 
  Coffee, 
  Wifi, 
  Waves, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { HOTELS } from '../data/travelData';

export default function HotelStays({ onBookHotel }) {
  return (
    <section id="hotels" className="py-20 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-[#0077b6] border border-cyan-200 mb-2.5">
              <Waves className="w-3.5 h-3.5" />
              <span>LUXURY & HERITAGE COASTAL STAYS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071e3d] tracking-tight">
              Puri Beachfront Resorts &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#00b4d8]">
                Temple Havens
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Wake up to breathtaking Bay of Bengal sunrises. All partner resorts offer private beach access, complimentary temple shuttles, and authentic Odia dining.
            </p>
          </div>

          <div className="text-xs text-slate-500 flex items-center space-x-1.5 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Live Inventory • Instant Booking Confirmation</span>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTELS.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Hotel Image with Tag */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                  {hotel.tag}
                </span>

                <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-white/95 px-2 py-0.5 rounded-lg text-xs font-bold text-slate-800 shadow-md">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{hotel.rating}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-[#071e3d] group-hover:text-[#0077b6] transition-colors line-clamp-1">
                  {hotel.name}
                </h3>

                <div className="mt-1 flex items-center space-x-1 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                  <span className="truncate">{hotel.location}</span>
                </div>

                {/* Amenities */}
                <div className="mt-3.5 space-y-1 text-xs text-slate-600 flex-grow">
                  {hotel.amenities.slice(0, 3).map((am, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[11px]">
                      <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{am}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Starts from</span>
                    <span className="text-lg font-black text-[#071e3d]">
                      ₹{hotel.pricePerNight.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-slate-500"> / night</span>
                  </div>

                  <button
                    onClick={() => {
                      const hotelPkg = {
                        id: hotel.id,
                        title: `${hotel.name} Staycation`,
                        category: 'hotel',
                        categoryLabel: 'Resort Stay',
                        rating: hotel.rating,
                        reviewsCount: hotel.reviews,
                        duration: '2 Days / 1 Night Stay',
                        location: hotel.location,
                        price: hotel.pricePerNight,
                        originalPrice: Math.round(hotel.pricePerNight * 1.25),
                        discount: '20% OFF',
                        featuredBadge: hotel.tag,
                        image: hotel.image,
                        highlights: hotel.amenities,
                        inclusions: ['Breakfast Buffet Included', 'Free Wi-Fi', 'Beach Access', 'Temple Shuttle'],
                        description: `Luxury resort stay in Puri at ${hotel.name}. Includes beachfront relaxation, swimming pool access, and authentic Odia buffet breakfast.`
                      };
                      onBookHotel(hotelPkg);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#ff6f00] hover:to-[#ffa200] transition-colors cursor-pointer shadow-sm"
                  >
                    Reserve Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
