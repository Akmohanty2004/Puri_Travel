import React, { useState } from 'react';
import { 
  Sparkles, 
  Gift, 
  Check, 
  Copy, 
  Flame, 
  Tag, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Percent,
  CheckCircle2
} from 'lucide-react';
import { PACKAGES } from '../data/travelData';

const PACKAGE_OFFERS = [
  {
    packageId: 'pkg-1',
    packageName: 'Divine Jagannath Mahaprasad & VIP Darshan',
    tabLabel: '🛕 Jagannath VIP Darshan',
    discountBadge: 'FLAT ₹1,500 OFF',
    bonusPerk: 'Complimentary Chhappan Bhog Mahaprasad Box',
    code: 'DIVINE1500',
    validity: 'Valid for bookings made today',
    savings: 'Save ₹1,500 Instant',
    description: 'Get flat ₹1,500 off plus a complimentary consecrated Mahaprasad lunch box, dedicated Sevayat priest escort, and VIP queue-skip entry pass.',
    bgGradient: 'from-[#071e3d] via-[#005f96] to-[#ff7b00]',
    accentColor: 'text-[#ffa200]'
  },
  {
    packageId: 'pkg-2',
    packageName: 'Golden Beachfront Luxury & Marine Drive Coastal Escape',
    tabLabel: '🏖️ Golden Beach Resort',
    discountBadge: 'FLAT ₹1,200 OFF',
    bonusPerk: 'Free Sea-Facing Room Upgrade + Breakfast Buffet',
    code: 'BEACH1200',
    validity: 'Weekend & Weekday Slots Available',
    savings: 'Save ₹1,200 Instant',
    description: 'Book your beachfront getaway with an instant ₹1,200 discount, complimentary sunrise breakfast buffet, and free upgrade to a sea-facing balcony room.',
    bgGradient: 'from-[#052345] via-[#0077b6] to-[#00b4d8]',
    accentColor: 'text-cyan-300'
  },
  {
    packageId: 'pkg-7',
    packageName: 'Kashi Vishwanath & Dashashwamedh Ghat Ganga Aarti (Varanasi)',
    tabLabel: '🇮🇳 Varanasi Kashi Yatra',
    discountBadge: 'FLAT ₹2,000 OFF',
    bonusPerk: 'Reserved Private Boat for Evening Ganga Aarti',
    code: 'KASHI2000',
    validity: 'Family & Pilgrim Group Deal',
    savings: 'Save ₹2,000 Instant',
    description: 'Special Pan-India pilgrimage discount: Flat ₹2,000 off with Sugam VIP Darshan passes, private evening Ganga Aarti bajra boat, and AC airport transfers.',
    bgGradient: 'from-[#140b28] via-[#2f1c5c] to-[#ff7b00]',
    accentColor: 'text-amber-300'
  },
  {
    packageId: 'pkg-4',
    packageName: 'UNESCO Konark Sun Temple & Chandrabhaga Sunset Safari',
    tabLabel: '🏛️ Konark Heritage',
    discountBadge: 'FLAT ₹1,000 OFF',
    bonusPerk: 'Free Light & Sound 7 PM Show Pass',
    code: 'KONARK1000',
    validity: 'Exclusive Heritage Circuit Deal',
    savings: 'Save ₹1,000 Instant',
    description: 'Explore Odisha’s 13th-century chariot masterpiece with a certified historian guide, plus complimentary evening light and sound show entry passes.',
    bgGradient: 'from-[#071e3d] via-[#0d3b66] to-[#f4a261]',
    accentColor: 'text-amber-400'
  },
  {
    packageId: 'pkg-3',
    packageName: 'Chilika Lake Irrawaddy Dolphin & Kalijai Island Cruise',
    tabLabel: '🐬 Chilika Dolphins',
    discountBadge: 'FLAT ₹800 OFF',
    bonusPerk: 'Private Speedboat Upgrade + Sea Mouth Visit',
    code: 'CHILIKA800',
    validity: 'High Dolphin Sighting Season',
    savings: 'Save ₹800 Instant',
    description: 'Cruise Asia’s largest coastal lagoon in high-speed boats, spot endangered Irrawaddy dolphins at Rajhans, and receive flat ₹800 off on your tour pass.',
    bgGradient: 'from-[#04202c] via-[#006d77] to-[#83c5be]',
    accentColor: 'text-emerald-300'
  }
];

export default function CouponBanner({ onClaimCode, onBookPackage }) {
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);

  const currentOffer = PACKAGE_OFFERS[selectedOfferIndex];
  const linkedPackage = PACKAGES.find((p) => p.id === currentOffer.packageId);

  const handleCopy = (code) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
      if (onClaimCode) onClaimCode(code);
    }
  };

  const handleBookWithOffer = () => {
    if (onClaimCode) onClaimCode(currentOffer.code);
    if (onBookPackage && linkedPackage) {
      onBookPackage(linkedPackage);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 mb-2">
            <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-500" />
            <span>LIMITED-TIME PACKAGE DISCOUNTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071e3d] tracking-tight">
            Special Offers & Deals for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f00] to-[#ffa200]">
              Every Package
            </span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            Select a package below to claim its exclusive discount code, free upgrades, and instant voucher.
          </p>
        </div>

        {/* Live Offer Badge */}
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>5 Package Deals Active Today</span>
        </div>
      </div>

      {/* Package Offer Selector Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {PACKAGE_OFFERS.map((offer, idx) => {
          const isSelected = selectedOfferIndex === idx;
          return (
            <button
              key={offer.packageId}
              onClick={() => setSelectedOfferIndex(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                isSelected
                  ? 'bg-[#071e3d] text-white shadow-md shadow-sky-950/20 ring-2 ring-[#ff7b00]'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200 hover:border-sky-300'
              }`}
            >
              <span>{offer.tabLabel}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                isSelected ? 'bg-[#ff7b00] text-white' : 'bg-amber-100 text-amber-800'
              }`}>
                {offer.discountBadge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Dynamic Package Offer Banner Card */}
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-r ${currentOffer.bgGradient} p-6 sm:p-8 text-white shadow-xl shadow-sky-950/20 transition-all duration-500`}>
        {/* Ambient Decorative Glow Orbs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-400/25 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Image Preview + Offer Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Package Image Thumbnail with Deal Stamp */}
            {linkedPackage && (
              <div className="relative w-full sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 shrink-0 border border-white/25 shadow-lg group">
                <img
                  src={linkedPackage.image}
                  alt={currentOffer.packageName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-600 text-white shadow-sm">
                  {currentOffer.discountBadge}
                </span>
                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white/90 truncate">
                  {linkedPackage.duration}
                </span>
              </div>
            )}

            {/* Offer Text Details */}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-900 shadow-xs">
                  {currentOffer.savings}
                </span>
                <span className="text-xs text-amber-200/90 font-medium">
                  {currentOffer.validity}
                </span>
              </div>

              {/* Package Title & Offer Title */}
              <div className="text-xs text-sky-200 font-bold uppercase tracking-wide mt-1.5">
                Special Deal for {currentOffer.packageName}
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5 leading-snug">
                {currentOffer.discountBadge} + {currentOffer.bonusPerk}
              </h3>

              <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed">
                {currentOffer.description}
              </p>

              {/* Bonus Perk Tag */}
              <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-white/15 backdrop-blur-md border border-white/20 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Bonus Included: {currentOffer.bonusPerk}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Coupon Code Card & Direct Booking Button (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5 justify-center">
            {/* Voucher Box */}
            <div className="bg-black/40 backdrop-blur-md border-2 border-dashed border-amber-300/70 p-4 rounded-2xl flex items-center justify-between shadow-inner">
              <div>
                <span className="text-[10px] text-amber-300 block font-bold uppercase tracking-wider">
                  Package Coupon Code
                </span>
                <strong className="text-xl sm:text-2xl font-mono font-black text-white tracking-widest drop-shadow">
                  {currentOffer.code}
                </strong>
                <span className="text-[10px] text-sky-200/80 block mt-0.5">
                  Applies directly to this package at checkout
                </span>
              </div>

              <button
                onClick={() => handleCopy(currentOffer.code)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-900 transition-all flex items-center space-x-1.5 shadow-md active:scale-95 cursor-pointer shrink-0"
              >
                {copiedCode === currentOffer.code ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-800" />
                    <span>Applied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Booking CTA */}
            <button
              onClick={handleBookWithOffer}
              className="w-full flex items-center justify-center space-x-2 py-3 px-5 rounded-2xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-[#ffa200] hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-black/30 hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book This Package with {currentOffer.savings}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
