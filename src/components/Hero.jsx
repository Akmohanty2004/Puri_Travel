import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Waves, 
  Star,
  Check,
  Landmark,
  Gift,
  Copy,
  Flame,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { PACKAGES } from '../data/travelData';

// ── Classical UNESCO Colonnade Temple Icon ─────────────────────────────────────
const UnescoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ffa200]">
    <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
  </svg>
);

// ── Konark 24-spoke Sun Wheel Icon ─────────────────────────────────────────────
const KonarkWheelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-sky-300">
    <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="#38bdf8" strokeWidth="1.5" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="#38bdf8" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#38bdf8" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#38bdf8" />
    <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" stroke="#38bdf8" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#38bdf8" transform="rotate(30 12 12)" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#38bdf8" transform="rotate(60 12 12)" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#38bdf8" transform="rotate(120 12 12)" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#38bdf8" transform="rotate(150 12 12)" />
  </svg>
);

// ── Light & Sound Projector Beam Icon ──────────────────────────────────────────
const LightSoundIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400">
    <polygon points="12 3 2 19 22 19" stroke="#ffa200" strokeWidth="1.5" fill="rgba(255,162,0,0.15)" />
    <line x1="12" y1="9" x2="12" y2="13" stroke="#ffa200" />
    <line x1="8" y1="15" x2="16" y2="15" stroke="#ffa200" />
  </svg>
);

// ── Historian Tour Guide Icon ──────────────────────────────────────────────────
const TourGuideIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400">
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#34d399" />
    <circle cx="10" cy="7" r="4" stroke="#34d399" />
    <path d="M14 8h5l2 3h-7" stroke="#34d399" />
    <line x1="19" y1="11" x2="19" y2="15" stroke="#34d399" />
  </svg>
);



// ── 5 Slides matching authentic Odisha locations ─────────────────────────────
const heroSlides = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sun_Temple_at_Konark%2C_Odisha%2C_India.JPG",
    badge: "UNESCO World Heritage",
    location: "Konark Sun Temple",
    subtitle: "A Timeless Marvel of Odisha",
    rating: "4.97",
    stat1Comp: KonarkWheelIcon,
    stat1Label: "Stone Architecture",
    stat1Val: "24 Wheels",
    stat1Highlight: false,
    stat2Comp: LightSoundIcon,
    stat2Label: "Light & Sound",
    stat2Val: "7:00 PM Show",
    stat2Highlight: true,
    stat3Comp: TourGuideIcon,
    stat3Label: "Tour Guide",
    stat3Val: "Historian Inc.",
    stat3Color: "text-emerald-400",
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg",
    badge: "Lord Jagannath Mandir",
    location: "Shree Jagannath Sanctum",
    subtitle: "Sacred Chhappan Bhog & Aarti",
    rating: "4.98",
    stat1Comp: () => <span className="text-xl">🛕</span>,
    stat1Label: "Darshan Flow",
    stat1Val: "VIP Sevayat",
    stat1Highlight: false,
    stat2Comp: () => <span className="text-xl">🕕</span>,
    stat2Label: "Next Aarti",
    stat2Val: "6:30 PM",
    stat2Highlight: true,
    stat3Comp: () => <span className="text-xl">🍛</span>,
    stat3Label: "Mahaprasad",
    stat3Val: "Fresh & Ready",
    stat3Color: "text-amber-300",
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Golden_beach_puri.jpg",
    badge: "Blue Flag Certified",
    location: "Puri Golden Beach",
    subtitle: "Sunrise Waves & Marine Drive",
    rating: "4.92",
    stat1Comp: () => <span className="text-xl">🌅</span>,
    stat1Label: "Next Sunrise",
    stat1Val: "05:28 AM",
    stat1Highlight: false,
    stat2Comp: () => <span className="text-xl">🌊</span>,
    stat2Label: "Wave Tide",
    stat2Val: "0.8m Gentle",
    stat2Highlight: true,
    stat3Comp: () => <span className="text-xl">🛟</span>,
    stat3Label: "Lifeguards",
    stat3Val: "On-Duty 24/7",
    stat3Color: "text-cyan-300",
  },
  {
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chilika_lake.jpg",
    badge: "Satapada Lagoon",
    location: "Chilika Dolphin Safari",
    subtitle: "Asia's Largest Coastal Lagoon",
    rating: "4.94",
    stat1Comp: () => <span className="text-xl">🐬</span>,
    stat1Label: "Dolphin Sighting",
    stat1Val: "92% High",
    stat1Highlight: false,
    stat2Comp: () => <span className="text-xl">⛵</span>,
    stat2Label: "Speedboats",
    stat2Val: "Every 20m",
    stat2Highlight: true,
    stat3Comp: () => <span className="text-xl">🏝️</span>,
    stat3Label: "Destination",
    stat3Val: "Kalijai Island",
    stat3Color: "text-emerald-400",
  },
  {
    id: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Raghurajpur_7.jpg",
    badge: "National Craft Heritage",
    location: "Raghurajpur Heritage Village",
    subtitle: "Ancient Pattachitra Art Masters",
    rating: "4.91",
    stat1Comp: () => <span className="text-xl">🎨</span>,
    stat1Label: "Master Artists",
    stat1Val: "300+ Artisans",
    stat1Highlight: false,
    stat2Comp: () => <span className="text-xl">📜</span>,
    stat2Label: "GI Tag Heritage",
    stat2Val: "Since 1950",
    stat2Highlight: true,
    stat3Comp: () => <span className="text-xl">🏺</span>,
    stat3Label: "Workshops",
    stat3Val: "Daily 9:00 AM",
    stat3Color: "text-amber-300",
  },
];

// ── Package-Specific Flash Offers for Front Hero Section ────────────────────────
const HERO_PACKAGE_OFFERS = [
  {
    packageId: 'pkg-1',
    packageName: 'Lord Jagannath VIP Darshan',
    tabLabel: '🛕 Jagannath VIP Darshan',
    discountBadge: 'FLAT ₹1,500 OFF',
    bonusPerk: 'Complimentary Chhappan Bhog Mahaprasad Box',
    code: 'DIVINE1500',
    description: 'Special pilgrimage discount with verified Sevayat priest escort, Mahaprasad kit & priority temple queue pass.',
    savings: 'Save ₹1,500',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg',
    locationShort: 'Puri Temple, Odisha'
  },
  {
    packageId: 'pkg-2',
    packageName: 'Golden Beachfront Resort',
    tabLabel: '🏖️ Beachfront Resort',
    discountBadge: 'FLAT ₹1,200 OFF',
    bonusPerk: 'Free Sea-Facing Room Upgrade + Breakfast',
    code: 'BEACH1200',
    description: 'Luxury resort on Blue Flag Golden Beach with private sand access, ocean view upgrade & sunrise buffet.',
    savings: 'Save ₹1,200',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Golden_beach_puri.jpg',
    locationShort: 'Golden Beach, Puri'
  },
  {
    packageId: 'pkg-7',
    packageName: 'Varanasi Kashi Vishwanath Yatra',
    tabLabel: '🇮🇳 Varanasi Yatra',
    discountBadge: 'FLAT ₹2,000 OFF',
    bonusPerk: 'Reserved Private Ganga Aarti Bajra Boat',
    code: 'KASHI2000',
    description: 'Pan-India pilgrimage deal: Sugam VIP Darshan passes, private evening Ganga Aarti boat & AC cab transfers.',
    savings: 'Save ₹2,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Evening_Ganga_Aarti%2C_at_Dashashwamedh_ghat%2C_Varanasi.jpg',
    locationShort: 'Varanasi Ghat, UP'
  },
  {
    packageId: 'pkg-4',
    packageName: 'Konark Sun Temple Heritage',
    tabLabel: '🏛️ Konark Heritage',
    discountBadge: 'FLAT ₹1,000 OFF',
    bonusPerk: 'Free 7 PM Light & Sound Show Entry Pass',
    code: 'KONARK1000',
    description: 'Explore the 13th-century Sun Temple with accredited historian guide plus evening light & sound passes.',
    savings: 'Save ₹1,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Sun_Temple_at_Konark%2C_Odisha%2C_India.JPG',
    locationShort: 'Konark Temple, Odisha'
  },
  {
    packageId: 'pkg-3',
    packageName: 'Chilika Dolphin Lagoon Cruise',
    tabLabel: '🐬 Chilika Cruise',
    discountBadge: 'FLAT ₹800 OFF',
    bonusPerk: 'Private Speedboat Upgrade + Sea Mouth Tour',
    code: 'CHILIKA800',
    description: 'Speedboat cruise in Asia’s largest brackish lagoon with guaranteed Irrawaddy dolphin sightings & island temple visit.',
    savings: 'Save ₹800',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Chilika_lake.jpg',
    locationShort: 'Chilika Lake, Odisha'
  }
];

export default function Hero({ onSearch, onSelectCategory, onOpenFacilities, onBookPackage, onClaimCode }) {
  const [activeTab, setActiveTab]       = useState('all');
  const [destination, setDestination]   = useState('Puri Golden Beach & Temple Corridor');
  const [travelDate, setTravelDate]     = useState('2026-11-20');
  const [guests, setGuests]             = useState('2 Adults, 1 Child');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused]         = useState(false);
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [isOfferPaused, setIsOfferPaused]       = useState(false);
  const [copiedHeroCode, setCopiedHeroCode]     = useState(null);

  const handleCopyHeroCode = (code) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedHeroCode(code);
      setTimeout(() => setCopiedHeroCode(null), 2500);
      if (onClaimCode) onClaimCode(code);
    }
  };

  const handleBookWithHeroOffer = (off) => {
    if (onClaimCode) onClaimCode(off.code);
    const targetPkg = PACKAGES.find((p) => p.id === off.packageId);
    if (onBookPackage && targetPkg) {
      onBookPackage(targetPkg);
    } else {
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-advance offer banner carousel every 4.5s (pauses when user hovers/interacts)
  useEffect(() => {
    if (isOfferPaused) return;
    const timer = setInterval(() => {
      setActiveOfferIndex((prev) => (prev + 1) % HERO_PACKAGE_OFFERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isOfferPaused]);

  // Auto-advance hero right-side architectural card carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((p) => (p + 1) % heroSlides.length);
  };

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch({ tab: activeTab, destination, travelDate, guests });
    const target = document.getElementById('packages');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = heroSlides[currentSlide];
  const Stat1Comp = slide.stat1Comp;
  const Stat2Comp = slide.stat2Comp;
  const Stat3Comp = slide.stat3Comp;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0c2f66] via-[#103d7c] to-[#0a2550] text-white pt-8 pb-16 lg:pt-12 lg:pb-20">

      {/* ── Lighter Oceanic Twilight Atmosphere & Atmospheric Lighting ──── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft atmospheric blue sky light across top */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-sky-400/20 via-blue-500/10 to-transparent" />
        {/* Luminous light ocean blue glow behind left content */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-[#0077b6]/35 blur-[120px]" />
        {/* Warm golden sunset radiance contained strictly behind the temple card on the far right */}
        <div className="absolute top-12 right-0 w-[420px] h-[420px] rounded-full bg-[#ffa200]/12 blur-[120px]" />
        {/* Subtle celestial stars / ocean mist particle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
        
        {/* Subtle sea water wave crest silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#061935] via-[#092244]/80 to-transparent opacity-85" />
      </div>

      {/* ── Floating Amber Airplane with Trail ─────────────────────────── */}
      <div className="absolute top-6 right-16 pointer-events-none z-10 animate-plane-float hidden lg:block">
        <div className="relative flex items-center">
          <svg className="w-44 h-16 text-amber-400/30" viewBox="0 0 200 80" fill="none">
            <path d="M10,70 Q90,10 190,30" stroke="#ffa200" strokeWidth="2.5" strokeDasharray="5,4" opacity="0.6" />
          </svg>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff7b00] to-[#ffa200] p-2 shadow-lg shadow-orange-500/40 flex items-center justify-center transform rotate-12">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* ════ Hero Main Section ════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-10">

          {/* ── LEFT COLUMN: Headline & Booking Actions (6.5 cols) ─────── */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left">

            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full text-xs font-bold border border-white/25 bg-[#0a2347]/70 backdrop-blur-md text-white shadow-lg mb-5">
              <span className="text-[#ffa200] text-sm">🛕</span>
              <span className="tracking-widest uppercase font-extrabold text-white">PLAN. BOOK. EXPLORE.</span>
              <span className="text-white/40">|</span>
              <span className="text-[#ffa200] font-semibold">Official Odisha Pilgrimage Portal</span>
            </div>

            {/* Main Headline with exact glowing "Golden Shores." styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black tracking-tight leading-[1.12]">
              <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                Sacred Darshan.
              </span>
              <br />
              {/* Golden Shores: 100% clean, crisp text with NO back side glow or drop shadow */}
              <span className="relative inline-block my-1">
                {/* Crisp pure golden gradient text without any back side glow */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ffa200] to-[#ff7b00] font-black">
                  Golden Shores.
                </span>

                {/* Crisp curved golden swoosh stroke underneath matching reference image */}
                <svg 
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none" 
                  viewBox="0 0 320 22" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  {/* Main golden curved gradient stroke */}
                  <path 
                    d="M 6,15 C 95,5 225,5 314,12" 
                    stroke="url(#goldenUnderlineGradient)" 
                    strokeWidth="3.6" 
                    strokeLinecap="round" 
                  />
                  {/* High-intensity crisp center reflection */}
                  <path 
                    d="M 35,13 C 110,6 205,6 285,11" 
                    stroke="#ffffff" 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    opacity="0.9"
                  />
                  <defs>
                    <linearGradient id="goldenUnderlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff7b00" stopOpacity="0.5" />
                      <stop offset="25%" stopColor="#ffa200" stopOpacity="1" />
                      <stop offset="55%" stopColor="#ffe477" stopOpacity="1" />
                      <stop offset="85%" stopColor="#ffa200" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ff7b00" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                Effortless Booking.
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Your certified booking gateway for Lord Jagannath VIP Darshan with verified Sevayat
              priests, luxury beachfront resorts on Blue Flag Golden Beach, and dolphin safaris in Chilika.
            </p>

            {/* Trust feature pills (Exact 3 items with circular outline badges) */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3 text-xs sm:text-sm text-white/90">
              {/* Feature 1 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full border border-[#ffa200]/80 bg-[#ffa200]/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#ffa200]" />
                </div>
                <div className="text-left leading-tight">
                  <div className="font-bold text-white">100% Verified</div>
                  <div className="text-[11px] text-white/65">Temple Priests</div>
                </div>
              </div>

              <div className="h-6 w-px bg-white/20 hidden sm:block" />

              {/* Feature 2 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full border border-sky-400/80 bg-sky-400/15 flex items-center justify-center shrink-0">
                  <Waves className="w-4 h-4 text-sky-300" />
                </div>
                <div className="text-left leading-tight">
                  <div className="font-bold text-white">Blue Flag</div>
                  <div className="text-[11px] text-white/65">Certified Beach</div>
                </div>
              </div>

              <div className="h-6 w-px bg-white/20 hidden sm:block" />

              {/* Feature 3 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full border border-[#ffa200]/80 bg-[#ffa200]/15 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#ffa200]">Ø</span>
                </div>
                <div className="text-left leading-tight">
                  <div className="font-bold text-white">Zero</div>
                  <div className="text-[11px] text-white/65">Booking Fees</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Primary Glowing Amber Pill */}
              <button
                onClick={onOpenFacilities}
                className="group flex items-center space-x-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#ff7b00] via-[#ffa200] to-[#ff7b00] hover:from-[#e06a00] hover:to-[#ffa200] shadow-[0_8px_30px_rgba(255,123,0,0.55)] hover:shadow-[0_12px_36px_rgba(255,123,0,0.7)] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white drop-shadow" />
                <span>Book Facilities Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Ghost Dark Pill with Amber Pin */}
              <button
                onClick={() => {
                  const el = document.getElementById('itinerary-builder');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white border border-white/30 bg-[#092242]/75 hover:bg-[#0c2e59] backdrop-blur-md shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#ffa200]" />
                <span>Custom Trip Planner</span>
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Unique Sacred Archway Portal Silhouette Showcase ── */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">

            {/* Ambient Grand Arch Halo Backdrop */}
            <div className="absolute -inset-1.5 rounded-t-[76px] sm:rounded-t-[100px] rounded-b-[34px] bg-gradient-to-b from-[#ffa200]/35 via-sky-500/20 to-blue-600/10 blur-xl opacity-85 pointer-events-none" />

            {/* Main Showcase Card with Unique Arched Temple Gateway Silhouette */}
            <div
              className="relative w-full max-w-[560px] rounded-t-[72px] sm:rounded-t-[96px] rounded-b-[30px] p-[2px] bg-gradient-to-b from-[#ffa200] via-sky-400/50 to-[#0077b6]/80 shadow-[0_25px_65px_rgba(2,12,30,0.85),0_0_35px_rgba(255,162,0,0.25)] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative rounded-t-[70px] sm:rounded-t-[94px] rounded-b-[28px] overflow-hidden bg-[#091f3d]/95 backdrop-blur-xl">
                {/* Golden Arch Crown Glow */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-amber-400/35 via-orange-400/10 to-transparent pointer-events-none z-20 rounded-t-[94px]" />

                {/* ── Image Area with Arched Portal Crown ── */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900 rounded-t-[68px] sm:rounded-t-[92px]">
                  {heroSlides.map((s, index) => (
                    <div
                      key={s.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.location}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Dark gradient overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081b35] via-[#081b35]/35 to-transparent" />
                    </div>
                  ))}

                  {/* UNESCO / Heritage Badge & Offers Counter Top-Left of Arch */}
                  <div className="absolute top-5 sm:top-6 left-5 sm:left-6 z-20 flex flex-wrap items-center gap-2">
                    <div className="flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md border border-white/25 px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-lg shadow-black/40">
                      <UnescoIcon />
                      <span className="tracking-wide font-extrabold">{slide.badge}</span>
                    </div>

                    {/* How Many Offers Added Counter Badge */}
                    <div className="flex items-center space-x-1.5 bg-gradient-to-r from-[#ff7b00] to-[#ffa200] text-slate-950 px-3 py-1.5 rounded-full text-xs font-black shadow-lg shadow-orange-500/35 border border-white/25 tracking-wide">
                      <Flame className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                      <span>{HERO_PACKAGE_OFFERS.length} Offers Added</span>
                    </div>
                  </div>

                  {/* User-Friendly Slide Counter & Navigation Chevrons Top-Right of Arch */}
                  <div className="absolute top-5 sm:top-6 right-5 sm:right-6 z-20 flex items-center space-x-2">
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-extrabold text-white border border-white/20 shadow-md">
                      {currentSlide + 1} / {heroSlides.length}
                    </span>
                    <button
                      onClick={handlePrevSlide}
                      className="w-8 h-8 rounded-full bg-slate-950/80 hover:bg-[#0077b6] hover:border-sky-300 backdrop-blur-md flex items-center justify-center text-white border border-white/20 cursor-pointer transition active:scale-95 shadow-md"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="w-8 h-8 rounded-full bg-slate-950/80 hover:bg-[#0077b6] hover:border-sky-300 backdrop-blur-md flex items-center justify-center text-white border border-white/20 cursor-pointer transition active:scale-95 shadow-md"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Overlay: Location Pin + Subtitle + Star Rating */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 pb-4 pt-10 bg-gradient-to-t from-[#081b35] via-[#081b35]/80 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-center space-x-1.5 text-white font-black text-lg sm:text-xl drop-shadow-md">
                          <MapPin className="w-4 h-4 text-[#ffa200] shrink-0 drop-shadow-[0_0_8px_rgba(255,162,0,0.8)]" />
                          <span>{slide.location}</span>
                        </div>
                        <p className="text-sky-100/80 text-xs sm:text-sm mt-0.5 font-medium drop-shadow">
                          {slide.subtitle}
                        </p>
                      </div>

                      {/* Star Rating Badge & Live Offers Pill */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1.5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/40 shrink-0 shadow-lg shadow-black/40">
                          <Star className="w-3.5 h-3.5 text-[#ffa200] fill-[#ffa200] drop-shadow-[0_0_6px_rgba(255,162,0,0.8)]" />
                          <span className="text-white text-xs font-black">{slide.rating}</span>
                        </div>
                        <div className="hidden sm:flex items-center space-x-1 bg-amber-400/20 backdrop-blur-md border border-amber-400/50 text-amber-200 px-3 py-1.5 rounded-full text-xs font-black shrink-0 shadow-md">
                          <Tag className="w-3 h-3 text-[#ffa200]" />
                          <span>{HERO_PACKAGE_OFFERS.length} Deals Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Active Offers Strip for Hero Profile ── */}
                <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 via-[#ff7b00]/25 to-amber-500/20 border-t border-amber-400/30 flex items-center justify-between text-xs font-bold text-amber-200">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-extrabold text-white text-[11px] sm:text-xs">
                      🔥 {HERO_PACKAGE_OFFERS.length} Special Package Offers Added
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black bg-gradient-to-r from-amber-400 to-[#ffa200] text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
                    Save up to ₹2,000
                  </span>
                </div>

                {/* ── 3 Stat Mini-Cards (Konark Wheels, Light & Sound, Tour Guide) ── */}
                <div className="grid grid-cols-3 gap-2.5 p-3.5 sm:p-4 bg-gradient-to-b from-[#081b35] to-[#0a2040] border-t border-white/10">
                  {/* Stat 1 */}
                  <div className="bg-gradient-to-b from-[#0f2d59]/90 to-[#0c2345]/90 border border-sky-400/20 hover:border-amber-400/50 hover:bg-[#14376c]/90 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center gap-1 transition-all duration-300 shadow-md cursor-default">
                    <Stat1Comp />
                    <span className="text-[10px] sm:text-[11px] text-sky-200/75 font-semibold tracking-wide uppercase leading-tight">
                      {slide.stat1Label}
                    </span>
                    <strong className="text-xs sm:text-sm font-black text-white leading-tight">
                      {slide.stat1Val}
                    </strong>
                  </div>

                  {/* Stat 2 (Golden Highlight) */}
                  <div className="bg-gradient-to-b from-[#0f2d59]/90 to-[#0c2345]/90 border border-sky-400/20 hover:border-amber-400/50 hover:bg-[#14376c]/90 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center gap-1 transition-all duration-300 shadow-md cursor-default">
                    <Stat2Comp />
                    <span className="text-[10px] sm:text-[11px] text-sky-200/75 font-semibold tracking-wide uppercase leading-tight">
                      {slide.stat2Label}
                    </span>
                    <strong className="text-xs sm:text-sm font-black text-[#ffa200] leading-tight drop-shadow-[0_0_8px_rgba(255,162,0,0.6)]">
                      {slide.stat2Val}
                    </strong>
                  </div>

                  {/* Stat 3 */}
                  <div className="bg-gradient-to-b from-[#0f2d59]/90 to-[#0c2345]/90 border border-sky-400/20 hover:border-amber-400/50 hover:bg-[#14376c]/90 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center gap-1 transition-all duration-300 shadow-md cursor-default">
                    <Stat3Comp />
                    <span className="text-[10px] sm:text-[11px] text-sky-200/75 font-semibold tracking-wide uppercase leading-tight">
                      {slide.stat3Label}
                    </span>
                    <strong className={`text-xs sm:text-sm font-black leading-tight ${slide.stat3Color || 'text-white'}`}>
                      {slide.stat3Val}
                    </strong>
                  </div>
                </div>

                {/* ── Slide Pill Indicators (Golden Active Pill) ── */}
                <div className="flex items-center justify-center gap-1.5 py-3 bg-[#0a2040]">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? 'w-7 h-2 bg-gradient-to-r from-[#ff7b00] to-[#ffa200] shadow-[0_0_12px_rgba(255,162,0,0.9)]' : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════ HERO PACKAGE OFFERS BANNER (PROPERLY ALIGNED & ATTRACTIVE) ════ */}
        {(() => {
          const currentHeroOffer = HERO_PACKAGE_OFFERS[activeOfferIndex];
          return (
            <div 
              className="mb-6 rounded-3xl bg-[#092244]/90 backdrop-blur-xl border border-amber-400/40 p-4 sm:p-5 shadow-[0_20px_50px_rgba(2,12,30,0.65)] text-white"
              onMouseEnter={() => setIsOfferPaused(true)}
              onMouseLeave={() => setIsOfferPaused(false)}
            >
              {/* Top Row: Flash Badge & Deal Selector Tabs */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-3 mb-3.5 border-b border-white/10 gap-3">
                <div className="flex items-center space-x-2.5">
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-[#ff7b00] to-[#ffa200] text-white shadow-md shadow-orange-500/30">
                    <Flame className="w-3.5 h-3.5 fill-white text-white" />
                    <span>PACKAGE FLASH DEALS</span>
                  </span>
                  <span className="text-xs text-sky-200/90 font-semibold hidden sm:inline">
                    Auto-sliding exclusive live offers • Click tabs or arrows to explore
                  </span>
                </div>

                {/* Package Filter Pills */}
                <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                  {HERO_PACKAGE_OFFERS.map((off, idx) => {
                    const isSelected = activeOfferIndex === idx;
                    return (
                      <button
                        key={off.packageId}
                        type="button"
                        onClick={() => setActiveOfferIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-1.5 ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-white/30'
                            : 'bg-white/10 text-white/85 hover:bg-white/20'
                        }`}
                      >
                        <span>{off.tabLabel}</span>
                        <span className={`text-[10px] font-black px-1.5 py-0.2 rounded ${
                          isSelected ? 'bg-slate-950 text-amber-300' : 'bg-amber-400/25 text-amber-300'
                        }`}>
                          {off.discountBadge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Row: Offer Details & Voucher Action */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Authentic Destination Image Slide + Offer Details */}
                <div className="flex items-center space-x-3.5 sm:space-x-4 w-full md:w-auto">
                  {/* Real Package Place Large Slide Card */}
                  <div className="relative w-32 h-22 sm:w-40 sm:h-26 md:w-48 md:h-28 rounded-2xl overflow-hidden bg-slate-900 border-2 border-amber-400/80 shadow-xl shrink-0 group/slide cursor-pointer">
                    <img
                      src={currentHeroOffer.image}
                      alt={currentHeroOffer.packageName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-black/25 pointer-events-none" />

                    {/* Slide Counter on Top-Right of Image */}
                    <div className="absolute top-1.5 right-1.5 z-20 flex items-center space-x-1 bg-black/65 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                      <span className="text-[10px] font-black text-amber-300">{activeOfferIndex + 1}</span>
                      <span className="text-[10px] text-white/50">/</span>
                      <span className="text-[10px] font-bold text-white/80">{HERO_PACKAGE_OFFERS.length}</span>
                    </div>

                    {/* Interactive Slide Chevrons directly on the image */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveOfferIndex((prev) => (prev - 1 + HERO_PACKAGE_OFFERS.length) % HERO_PACKAGE_OFFERS.length);
                      }}
                      className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/75 hover:bg-amber-400 text-white hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer z-20 shadow-md active:scale-90"
                      aria-label="Previous package"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveOfferIndex((prev) => (prev + 1) % HERO_PACKAGE_OFFERS.length);
                      }}
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/75 hover:bg-amber-400 text-white hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer z-20 shadow-md active:scale-90"
                      aria-label="Next package"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Place Tag on bottom of image */}
                    <div className="absolute bottom-1.5 inset-x-1.5 z-20">
                      <span className="block text-[9px] sm:text-[10px] font-black text-amber-200 text-center truncate bg-slate-950/85 backdrop-blur-xs px-1.5 py-0.5 rounded-lg border border-amber-400/30 shadow-xs tracking-wide">
                        {currentHeroOffer.locationShort}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-sm sm:text-base font-black text-white">
                        {currentHeroOffer.discountBadge}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-xs sm:text-sm font-bold text-amber-300">
                        {currentHeroOffer.bonusPerk}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-sky-500/20 text-sky-200 border border-sky-400/30">
                        FOR {currentHeroOffer.packageName}
                      </span>
                    </div>
                    <p className="text-xs text-sky-100/80 mt-0.5 leading-snug line-clamp-1">
                      {currentHeroOffer.description}
                    </p>
                  </div>
                </div>

                {/* Right: Coupon Ticket & Book Deal Button */}
                <div className="flex items-center space-x-2.5 w-full md:w-auto justify-end shrink-0">
                  {/* Voucher Pill */}
                  <div className="flex items-center space-x-2 bg-black/45 border border-dashed border-amber-300/70 px-3 py-1.5 rounded-xl">
                    <div>
                      <span className="text-[9px] text-amber-300 uppercase font-bold tracking-wider block leading-none">Code</span>
                      <strong className="text-sm font-mono font-black text-white tracking-wider">{currentHeroOffer.code}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyHeroCode(currentHeroOffer.code)}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors flex items-center space-x-1 cursor-pointer active:scale-95"
                      title="Copy coupon code"
                    >
                      {copiedHeroCode === currentHeroOffer.code ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-800" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Book With Offer CTA */}
                  <button
                    type="button"
                    onClick={() => handleBookWithHeroOffer(currentHeroOffer)}
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-[#ffa200] hover:from-amber-300 hover:to-amber-400 shadow-md shadow-black/30 hover:scale-102 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                    <span>Book Deal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ════ Search Bar Engine Below ═════════════════════════════════ */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/35 border border-white/20 text-slate-800">
          {/* Facility Filter Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3 mb-4 overflow-x-auto scrollbar-none">
            {[
              { id: 'all',       label: 'All Packages',       icon: Compass  },
              { id: 'combo',     label: 'Multi-Place Combos', icon: MapPin   },
              { id: 'pan-india', label: 'Pan-India Yatra',    icon: Landmark },
              { id: 'spiritual', label: 'VIP Temple Darshan',  icon: Sparkles },
              { id: 'beach',     label: 'Golden Beach Resorts',icon: Waves   },
              { id: 'chilika',   label: 'Chilika & Wildlife',  icon: Sun      },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (onSelectCategory && tab.id !== 'all') onSelectCategory(tab.id);
                  }}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#0077b6] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0077b6] hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}

            <button
              onClick={onOpenFacilities}
              className="ml-auto text-xs font-bold text-[#ff7b00] hover:text-[#d96500] hover:underline whitespace-nowrap flex items-center space-x-1 cursor-pointer"
            >
              <span>View All Facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Form Fields Grid */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200 transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Facility / Destination
              </label>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0077b6] shrink-0" />
                <select 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)} 
                  className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="Puri Golden Beach & Temple Corridor">Puri Beach & Temple Corridor</option>
                  <option value="Jagannath Mandir VIP Darshan">Jagannath Mandir VIP Darshan</option>
                  <option value="Konark Sun Temple Heritage Circuit">Konark Sun Temple Heritage</option>
                  <option value="Chilika Lake Satapada Lagoon">Chilika Lake & Dolphins</option>
                  <option value="Varanasi Kashi Vishwanath & Ganga Aarti">Varanasi Kashi Vishwanath</option>
                  <option value="Ayodhya Shri Ram Janmabhoomi">Ayodhya Ram Mandir</option>
                  <option value="Tirupati Balaji VIP Darshan">Tirupati Balaji Temple</option>
                  <option value="Kashmir Dal Lake & Gulmarg">Kashmir Valley & Dal Lake</option>
                  <option value="Rishikesh & Haridwar Ganga Aarti">Rishikesh & Haridwar Yoga</option>
                  <option value="Raghurajpur Crafts Village">Raghurajpur Craft Village</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200 transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Travel Date
              </label>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#ff7b00] shrink-0" />
                <input 
                  type="date" 
                  value={travelDate} 
                  onChange={(e) => setTravelDate(e.target.value)} 
                  className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer" 
                />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200 transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Devotees & Guests
              </label>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#0077b6] shrink-0" />
                <select 
                  value={guests} 
                  onChange={(e) => setGuests(e.target.value)} 
                  className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="1 Solo Pilgrim">1 Solo Pilgrim</option>
                  <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child (Family)</option>
                  <option value="4+ Family & Seniors">4+ Family & Seniors Group</option>
                  <option value="Large Pilgrim Group (10+)">Large Pilgrim Group (10+)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <button 
                type="submit" 
                className="w-full h-full min-h-[50px] flex items-center justify-center space-x-2 px-6 py-2.5 rounded-2xl text-sm font-bold text-white bg-[#0077b6] hover:bg-[#006296] shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Experiences</span>
              </button>
            </div>
          </form>

          {/* Quick Shortcuts */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-slate-700">Quick Facilities:</span>
              <button onClick={() => onSelectCategory && onSelectCategory('spiritual')} className="hover:text-[#0077b6] hover:underline cursor-pointer">VIP Darshan</button>
              <span>•</span>
              <button onClick={() => onSelectCategory && onSelectCategory('beach')} className="hover:text-[#0077b6] hover:underline cursor-pointer">Beach Resorts</button>
              <span>•</span>
              <button onClick={() => onSelectCategory && onSelectCategory('chilika')} className="hover:text-[#0077b6] hover:underline cursor-pointer">Chilika Dolphins</button>
              <span>•</span>
              <button onClick={onOpenFacilities} className="text-[#ff7b00] font-semibold hover:underline cursor-pointer">+ More</button>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
              <span>Government of Odisha Tourism Standards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
