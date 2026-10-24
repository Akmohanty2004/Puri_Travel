import React from 'react';
import { 
  X, 
  Sparkles, 
  Flame, 
  Waves, 
  Compass, 
  Car, 
  Calendar, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import { PACKAGES, HOTELS } from '../data/travelData';

export default function FacilitySelectorModal({ isOpen, onClose, onSelectFacility }) {
  if (!isOpen) return null;

  const facilities = [
    {
      id: 'fac-darshan',
      title: 'VIP Jagannath Darshan & Priest Escort',
      subtitle: 'Char Dham Sacred Pilgrimage',
      badge: 'Most Popular',
      badgeColor: 'bg-amber-500',
      price: '₹1,499',
      priceUnit: '/ devotee',
      icon: Flame,
      iconColor: 'text-[#ff7b00]',
      bgColor: 'from-amber-500/10 to-orange-500/5',
      borderColor: 'hover:border-amber-400',
      description: 'Skip overwhelming queues with an accredited Sevayat priest. Includes holy sanctum escort, Chhappan Bhog Mahaprasad, and locker facility.',
      perks: ['Authorized Temple Sevayat', 'Express Sanctum Darshan', 'Fresh Mahaprasad Bento', 'Safe Locker & Shoe Care'],
      actionText: 'Book VIP Darshan',
      targetPackage: PACKAGES[0]
    },
    {
      id: 'fac-resort',
      title: 'Puri Beachfront Luxury Resorts & Stays',
      subtitle: 'Blue Flag Golden Beach Accommodations',
      badge: 'Instant Confirmation',
      badgeColor: 'bg-cyan-500',
      price: '₹4,600',
      priceUnit: '/ night',
      icon: Waves,
      iconColor: 'text-[#0077b6]',
      bgColor: 'from-sky-500/10 to-blue-500/5',
      borderColor: 'hover:border-sky-400',
      description: 'Handpicked beachfront resorts along Chakratirtha and Marine Drive with private beach access, pool, and buffet breakfast.',
      perks: ['Direct Sea View Balconies', 'Complimentary Breakfast', 'Private Beach Access', 'Free Temple Shuttle'],
      actionText: 'Book Resort Stay',
      targetPackage: {
        id: 'htl-mayfair',
        title: 'Mayfair Waves Beach Resort Luxury Stay',
        category: 'hotel',
        categoryLabel: 'Resort Stay',
        rating: 4.9,
        reviewsCount: 420,
        duration: '2 Days / 1 Night',
        location: 'Chakratirtha Road, Puri Sea Beach',
        price: 8500,
        originalPrice: 10500,
        discount: '20% OFF',
        featuredBadge: 'Beachfront Luxury',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        highlights: ['Private Beach Access', 'Infinity Pool', 'Ayurvedic Spa'],
        inclusions: ['Breakfast Included', 'Oceanview Balcony', 'Temple Shuttle', 'Free Wi-Fi'],
        description: 'Luxury oceanfront stay in Puri with private beach access and authentic Odia dining.'
      }
    },
    {
      id: 'fac-chilika',
      title: 'Chilika Dolphin & Island Speedboat Safari',
      subtitle: 'Satapada Lagoon & Kalijai Island',
      badge: 'Wildlife Safari',
      badgeColor: 'bg-emerald-500',
      price: '₹4,999',
      priceUnit: '/ person',
      icon: Compass,
      iconColor: 'text-emerald-600',
      bgColor: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'hover:border-emerald-400',
      description: 'Exclusive speedboat safari across Asia’s largest coastal lagoon. High probability Irrawaddy dolphin sightings and Maa Kalijai temple visit.',
      perks: ['Private Speedboat Cruise', 'Naturalist Guide Included', '92% Dolphin Sighting Rate', 'Chilika Crab/Prawn Lunch'],
      actionText: 'Book Dolphin Safari',
      targetPackage: PACKAGES[2]
    },
    {
      id: 'fac-heritage',
      title: 'Konark Sun Temple & Artisan Village Tour',
      subtitle: 'UNESCO Monument & Raghurajpur Crafts',
      badge: 'Heritage Circuit',
      badgeColor: 'bg-orange-600',
      price: '₹2,499',
      priceUnit: '/ person',
      icon: Star,
      iconColor: 'text-orange-600',
      bgColor: 'from-orange-500/10 to-amber-500/5',
      borderColor: 'hover:border-orange-400',
      description: 'Guided tour of the 13th-century Konark Sun Temple chariot and master craftsmen workshops in Raghurajpur heritage village.',
      perks: ['Priority Monument Entry', 'Archaeology Historian Guide', 'Pattachitra Art Workshop', 'Private AC Cab Transfer'],
      actionText: 'Book Heritage Tour',
      targetPackage: PACKAGES[3]
    },
    {
      id: 'fac-custom',
      title: 'Custom Tailored Pilgrimage & Holiday Plan',
      subtitle: 'Design Your Own Dream Journey',
      badge: '100% Flexible',
      badgeColor: 'bg-purple-600',
      price: 'Live Estimate',
      priceUnit: '',
      icon: Calendar,
      iconColor: 'text-purple-600',
      bgColor: 'from-purple-500/10 to-indigo-500/5',
      borderColor: 'hover:border-purple-400',
      description: 'Select your preferred duration, temple rituals, water sports, and meal preferences. Our custom planner auto-calculates costs in real time.',
      perks: ['Choose 1 to 5 Days', 'Select Specific Rituals', 'Real-time Budget Calculator', 'Instant Bundle Discounts'],
      actionText: 'Open Trip Planner',
      isCustomPlanner: true
    },
    {
      id: 'fac-cab',
      title: 'Puri Station & Airport AC Chauffeur Cab',
      subtitle: 'Reliable On-Time Station Transfers',
      badge: '24/7 Service',
      badgeColor: 'bg-blue-600',
      price: '₹450',
      priceUnit: 'starts from',
      icon: Car,
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-500/10 to-sky-500/5',
      borderColor: 'hover:border-blue-400',
      description: 'Sanitized AC Sedan or Innova with verified professional chauffeur. On-time pickup from Puri Station or Bhubaneswar Airport directly to your resort.',
      perks: ['Flight/Train Tracking', 'Luggage Assistance', 'Zero Surge Pricing', 'AC Sedan / Innova Choice'],
      actionText: 'Book Chauffeur Cab',
      targetPackage: {
        id: 'pkg-cab-transfer',
        title: 'Puri Station / Airport AC Chauffeur Cab Service',
        category: 'cab',
        categoryLabel: 'Cab Rental',
        rating: 4.95,
        reviewsCount: 512,
        duration: 'On-Demand Transfer',
        location: 'Puri Station / Bhubaneswar Airport (BBI)',
        price: 450,
        originalPrice: 750,
        discount: '40% OFF',
        featuredBadge: 'Guaranteed On-Time',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
        highlights: ['Verified Chauffeur', 'Complimentary Waiting Time', 'AC Sedan / Innova', 'Toll & Parking Included'],
        inclusions: ['Clean Sanitized Vehicle', 'Luggage Handling', 'Flight/Train Tracking', '24/7 Helpline Support'],
        description: 'Comfortable, sanitized AC chauffeur transfer between Puri Railway Station, Bhubaneswar Airport, and your hotel.'
      }
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-sky-100 flex flex-col relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#071e3d] via-[#0077b6] to-[#ff7b00] p-6 text-white flex items-center justify-between sticky top-0 z-20 shadow-md">
          <div className="pr-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
              <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                PuriTravel Facility & Booking Center
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Select Your Travel Facility or Service
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-0.5">
              Choose from verified VIP temple darshans, beachfront resorts, lagoon dolphin safaris, or custom itineraries.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Facility Cards Grid */}
        <div className="p-6 sm:p-8 bg-slate-50/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {facilities.map((fac) => {
              const Icon = fac.icon;
              return (
                <div
                  key={fac.id}
                  className={`bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200/90 ${fac.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden`}
                >
                  {/* Subtle Top Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${fac.bgColor}`}></div>

                  <div>
                    {/* Header Row: Icon + Badge + Price */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-100 to-sky-50 border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                          <Icon className={`w-6 h-6 ${fac.iconColor}`} />
                        </div>
                        <div>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${fac.badgeColor} shadow-xs mb-1`}>
                            {fac.badge}
                          </span>
                          <h4 className="text-base font-bold text-[#071e3d] group-hover:text-[#0077b6] transition-colors leading-snug">
                            {fac.title}
                          </h4>
                          <span className="text-xs text-slate-400 font-medium">{fac.subtitle}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {fac.description}
                    </p>

                    {/* Key Perks Checkmarks */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                      {fac.perks.map((perk, i) => (
                        <div key={i} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Price & 1-Click Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Pricing</span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-black text-[#071e3d]">
                          {fac.price}
                        </span>
                        {fac.priceUnit && (
                          <span className="text-xs text-slate-500 font-medium">
                            {fac.priceUnit}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        if (fac.isCustomPlanner) {
                          const el = document.getElementById('itinerary-builder');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          onSelectFacility(fac.targetPackage);
                        }
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#ff6f00] hover:to-[#ffa200] shadow-md shadow-sky-800/15 hover:shadow-orange-500/30 transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span>{fac.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All facilities backed by Official Puri Tourism Standards & Verified Sevayats</span>
          </div>
          <span className="font-semibold text-slate-700">Need immediate help? Call +91 98610 99880</span>
        </div>
      </div>
    </div>
  );
}
