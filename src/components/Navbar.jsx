import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Calendar, 
  MapPin, 
  PhoneCall, 
  Menu, 
  X, 
  Ticket, 
  Sparkles, 
  ChevronDown, 
  Layers 
} from 'lucide-react';

export default function Navbar({ 
  onOpenBookings, 
  bookingCount, 
  onOpenFacilities 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Facilities', action: onOpenFacilities, isSpecial: true },
    { name: 'Travel Packages', href: '#packages' },
    { name: 'VIP Darshan Guide', href: '#darshan-guide' },
    { name: 'Beach Resorts', href: '#hotels' },
    { name: 'Custom Trip Planner', href: '#itinerary-builder' },
    { name: 'Live Pulse', href: '#live-tracker' },
  ];

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (link.action) {
      link.action();
      return;
    }
    if (link.href) {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top micro announcement bar - Clean Navy & Ocean Tint */}
      <div className="bg-[#071e3d] text-white text-xs py-1.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="flex h-1.5 w-1.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-300"></span>
            </span>
            <span className="font-semibold text-amber-200 shrink-0">Live Update:</span>
            <span className="truncate text-slate-200">
              Shree Jagannath Mandir Darshan running smoothly • Blue Flag Golden Beach open
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-5 text-xs text-slate-300 shrink-0">
            <div className="flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>Devotee Helpline: <strong className="text-white">+91 98610 99880</strong></span>
            </div>
            <div className="h-3 w-px bg-white/20"></div>
            <span className="text-amber-200/90 font-medium">
              Odisha Tourism Partner
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-slate-200/60 py-2.5 border-b border-slate-200/80'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Crisp Presentation */}
          <a 
            href="#" 
            className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="relative bg-white rounded-xl p-1 border border-slate-200/80 shadow-xs flex items-center">
              <img 
                src="/assets/logo.jpg" 
                alt="PuriTravel - Plan. Book. Explore." 
                className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  link.isSpecial
                    ? 'text-[#0077b6] bg-sky-50/80 hover:bg-sky-100 border border-sky-200/60 flex items-center space-x-1.5'
                    : 'text-slate-600 hover:text-[#0077b6] hover:bg-slate-50'
                }`}
              >
                {link.isSpecial && <Layers className="w-3.5 h-3.5 text-[#ff7b00]" />}
                <span>{link.name}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* My Bookings Button */}
            <button
              onClick={onOpenBookings}
              className="relative flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#071e3d] bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200 transition-all duration-200 cursor-pointer"
              title="View your saved travel bookings"
            >
              <Ticket className="w-4 h-4 text-[#0077b6]" />
              <span>My Bookings</span>
              {bookingCount > 0 ? (
                <span className="flex items-center justify-center min-w-[18px] h-4.5 px-1.5 text-[11px] font-bold text-white bg-[#0077b6] rounded-full">
                  {bookingCount}
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              )}
            </button>

            {/* "Book Now" Button: Soft, Faded-Like Elegant Amber Tone */}
            <button
              onClick={onOpenFacilities}
              className="group relative inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#92400e] bg-amber-50 hover:bg-amber-100/80 border border-amber-200/90 shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Book Now</span>
              
              {/* Subtle mini plane icon */}
              <svg 
                className="w-3.5 h-3.5 text-amber-600 transform group-hover:translate-x-0.5 transition-transform"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu & Bookings Icons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenBookings}
              className="relative p-2 rounded-xl bg-slate-100 text-[#0077b6] border border-slate-200"
              aria-label="View bookings"
            >
              <Ticket className="w-5 h-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold text-white bg-[#0077b6] rounded-full flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-left ${
                    link.isSpecial
                      ? 'bg-sky-50 text-[#0077b6] border border-sky-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {link.isSpecial && <Layers className="w-4 h-4 text-[#ff7b00]" />}
                    <span>{link.name}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookings();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-sm font-bold text-[#071e3d] bg-slate-100 border border-slate-200"
                >
                  <Ticket className="w-4 h-4 text-[#0077b6]" />
                  <span>My Saved Bookings ({bookingCount})</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFacilities();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold text-[#92400e] bg-amber-50 hover:bg-amber-100 border border-amber-200 shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Book Now — Choose Facility</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
