import React, { useState } from 'react';
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
  Star,
  PlusCircle,
  Layers,
  Check
} from 'lucide-react';
import { PACKAGES } from '../data/travelData';

const AVAILABLE_PLACES = [
  { id: 'puri', name: 'Puri (Jagannath Mandir & Beach)', price: 3499, icon: '🛕' },
  { id: 'konark', name: 'Konark (Sun Temple & Chandrabhaga)', price: 1800, icon: '🏛️' },
  { id: 'chilika', name: 'Chilika (Irrawaddy Dolphins Lagoon)', price: 2400, icon: '🐬' },
  { id: 'bbsr', name: 'Bhubaneswar (Lingaraj & Dhauli)', price: 2100, icon: '🛕' },
  { id: 'varanasi', name: 'Varanasi (Kashi Vishwanath & Aarti)', price: 3900, icon: '🕉️' },
  { id: 'ayodhya', name: 'Ayodhya (Shri Ram Janmabhoomi)', price: 3900, icon: '🏹' }
];

export default function FacilitySelectorModal({ isOpen, onClose, onSelectFacility }) {
  const [selectedPlaces, setSelectedPlaces] = useState(['puri', 'konark', 'chilika']);

  if (!isOpen) return null;

  const togglePlace = (placeId) => {
    setSelectedPlaces((prev) => {
      if (prev.includes(placeId)) {
        if (prev.length <= 1) return prev; // Keep at least one place
        return prev.filter((id) => id !== placeId);
      } else {
        return [...prev, placeId];
      }
    });
  };

  // Calculate dynamic multi-place package price with bundle discount
  const selectedPlacesData = AVAILABLE_PLACES.filter((p) => selectedPlaces.includes(p.id));
  const rawTotal = selectedPlacesData.reduce((sum, p) => sum + p.price, 0);
  // 15% discount for 2 places, 20% for 3+ places
  const discountMultiplier = selectedPlaces.length >= 3 ? 0.8 : selectedPlaces.length === 2 ? 0.85 : 1.0;
  const calculatedCustomPrice = Math.round(rawTotal * discountMultiplier);

  const handleBookCustomCombo = () => {
    const placesNames = selectedPlacesData.map((p) => p.name.split(' (')[0]);
    const customComboPkg = {
      id: `pkg-custom-combo-${Date.now()}`,
      title: `${placesNames.join(' + ')} Multi-Destination Tour`,
      category: 'family',
      categoryLabel: 'Custom Multi-Place Circuit',
      rating: 4.98,
      reviewsCount: 260,
      duration: `${selectedPlaces.length + 1} Days / ${selectedPlaces.length} Nights`,
      location: placesNames.join(' ➔ '),
      places: placesNames,
      comboBadge: `${selectedPlaces.length} Places in 1 Package`,
      price: calculatedCustomPrice,
      originalPrice: Math.round(calculatedCustomPrice * 1.3),
      discount: `${Math.round((1 - discountMultiplier) * 100 + 10)}% OFF`,
      featuredBadge: 'Custom Multi-Place Combo',
      image: PACKAGES[0]?.image || 'https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg',
      highlights: [
        `Complete coordinated tour of ${placesNames.join(', ')}`,
        'Private sanitized AC cab with verified chauffeur connecting all destinations',
        'VIP Darshan & monument passes included for every stop',
        'Certified local destination historians & temple escorts'
      ],
      inclusions: ['4-Star Hotels at All Locations', 'Daily Breakfast & Dinners', 'All VIP Passes', 'Dedicated AC Cab Transfers'],
      description: `Tailored multi-place package covering ${placesNames.join(' and ')}. Enjoy comfortable travel across destinations with transparent fixed pricing and zero hidden fees.`
    };

    onClose();
    onSelectFacility(customComboPkg);
  };

  // Ready-made packages for quick booking
  const multiPlaceCombos = [
    PACKAGES.find((p) => p.id === 'pkg-13') || PACKAGES[5], // Puri + Konark + Chilika
    PACKAGES.find((p) => p.id === 'pkg-12') || PACKAGES[6], // Varanasi + Ayodhya
    PACKAGES.find((p) => p.id === 'pkg-6')  || PACKAGES[5], // Grand Golden Triangle
    PACKAGES.find((p) => p.id === 'pkg-14') || PACKAGES[10] // Haridwar + Rishikesh
  ].filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-sky-100 flex flex-col relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#071e3d] via-[#0077b6] to-[#ff7b00] p-5 sm:p-6 text-white flex items-center justify-between sticky top-0 z-30 shadow-md">
          <div className="pr-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
              <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                Multi-Place Booking & Package Customizer
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white mt-1">
              Select Places & Packages to Book
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-0.5">
              Add multiple places to your tour to calculate live pricing, or pick from popular multi-destination circuits.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ── INTERACTIVE MULTI-PLACE BUILDER (Add more than 1 place) ── */}
        <div className="p-5 sm:p-6 bg-gradient-to-br from-amber-500/10 via-sky-500/10 to-transparent border-b border-slate-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#071e3d] text-white">
              CUSTOM MULTI-PLACE TOUR BUILDER
            </span>
            <span className="text-xs text-amber-900 font-bold">
              Pick 2 or more places to unlock bundle savings!
            </span>
          </div>

          <p className="text-xs text-slate-700 mb-3.5">
            Click on the places below to add or remove them from your itinerary. The package price updates automatically according to the places visited:
          </p>

          {/* Places Checkbox Chips Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-4">
            {AVAILABLE_PLACES.map((place) => {
              const isSelected = selectedPlaces.includes(place.id);
              return (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => togglePlace(place.id)}
                  className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-[#ff7b00] shadow-md shadow-orange-500/15 ring-2 ring-orange-400/20'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-xl">{place.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-[#071e3d] leading-tight">
                        {place.name}
                      </div>
                      <span className="text-[11px] font-semibold text-[#0077b6]">
                        ₹{place.price.toLocaleString('en-IN')} / person
                      </span>
                    </div>
                  </div>

                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                    isSelected ? 'bg-[#ff7b00] border-[#ff7b00] text-white' : 'border-slate-300 bg-slate-50'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Calculated Route & Price Strip */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">
                Selected Route ({selectedPlaces.length} Places Included):
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-extrabold text-[#071e3d] mt-0.5 flex-wrap">
                {selectedPlacesData.map((p, idx) => (
                  <span key={p.id} className="inline-flex items-center space-x-1">
                    <span className="bg-sky-50 text-[#0077b6] px-2 py-0.5 rounded-md border border-sky-200">
                      {p.name.split(' (')[0]}
                    </span>
                    {idx < selectedPlacesData.length - 1 && <span className="text-[#ff7b00] font-black">➔</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Book CTA */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end shrink-0">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block line-through">₹{rawTotal.toLocaleString('en-IN')}</span>
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-black text-[#071e3d]">₹{calculatedCustomPrice.toLocaleString('en-IN')}</span>
                  <span className="text-[11px] text-slate-500 font-medium">/ person</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBookCustomCombo}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#ff7b00] via-[#ffa200] to-[#ff7b00] hover:from-[#e06a00] hover:to-[#ffa200] shadow-md shadow-orange-500/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5"
              >
                <span>Book This {selectedPlaces.length}-Place Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── READY-MADE MULTI-PLACE PACKAGES SECTION ── */}
        <div className="p-5 sm:p-6 bg-slate-50/60">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0077b6]"></span>
            <h4 className="text-sm font-extrabold text-[#071e3d] uppercase tracking-wider">
              Popular Pre-Packaged Multi-City Circuits
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {multiPlaceCombos.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200/90 hover:border-sky-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white bg-gradient-to-r from-[#ff6f00] to-[#ffa200] shadow-xs">
                      {pkg.comboBadge || 'Multi-Place Package'}
                    </span>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {pkg.duration}
                    </span>
                  </div>

                  <h5 className="text-sm sm:text-base font-bold text-[#071e3d] group-hover:text-[#0077b6] transition-colors line-clamp-2 leading-snug">
                    {pkg.title}
                  </h5>

                  {/* Route Chain */}
                  {pkg.places && (
                    <div className="mt-2 text-[11px] font-bold text-[#0077b6] flex items-center space-x-1 flex-wrap">
                      <MapPin className="w-3.5 h-3.5 text-[#ff7b00] shrink-0" />
                      <span>{pkg.places.join(' ➔ ')}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Price & Book Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block line-through">₹{pkg.originalPrice?.toLocaleString('en-IN')}</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-xl font-black text-[#071e3d]">₹{pkg.price.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-slate-500">/ person</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectFacility(pkg);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-[#0077b6] hover:bg-[#005f96] transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All multi-place packages include certified local drivers, sanitized vehicles & verified temple guides</span>
          </div>
          <span className="font-semibold text-slate-700">Need immediate help? Call +91 98610 99880</span>
        </div>
      </div>
    </div>
  );
}
