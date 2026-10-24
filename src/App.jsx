import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LivePuriTracker from './components/LivePuriTracker';
import PackagesSection from './components/PackagesSection';
import ItineraryBuilder from './components/ItineraryBuilder';
import SocialOrbitSection from './components/SocialOrbitSection';
import HotelStays from './components/HotelStays';
import DarshanGuide from './components/DarshanGuide';
import CouponBanner from './components/CouponBanner';
import TravelerStories from './components/TravelerStories';
import Footer from './components/Footer';
import CircularSocialOrbit from './components/CircularSocialOrbit';
import BookingModal from './components/BookingModal';
import MyBookingsDrawer from './components/MyBookingsDrawer';
import FacilitySelectorModal from './components/FacilitySelectorModal';
import { PACKAGES } from './data/travelData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeBookingPkg, setActiveBookingPkg] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBookingsDrawerOpen, setIsBookingsDrawerOpen] = useState(false);
  const [isFacilityModalOpen, setIsFacilityModalOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);
  const [notification, setNotification] = useState(null);

  // Load existing bookings count on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('puri_bookings') || '[]');
      setBookingCount(saved.length);
    } catch (e) {
      setBookingCount(0);
    }
  }, []);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleOpenFacilities = () => {
    setIsFacilityModalOpen(true);
  };

  const handleSelectFacility = (targetPkg) => {
    setIsFacilityModalOpen(false);
    setActiveBookingPkg(targetPkg);
    setIsBookingModalOpen(true);
  };

  const handleBookPackage = (pkg) => {
    setActiveBookingPkg(pkg);
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = (booking) => {
    try {
      const saved = JSON.parse(localStorage.getItem('puri_bookings') || '[]');
      setBookingCount(saved.length);
    } catch (e) {}
    showNotification(`Booking ${booking.bookingId} confirmed successfully!`);
  };

  const handleSearch = ({ tab }) => {
    if (tab === 'combo') setSelectedCategory('combo');
    else if (tab === 'pan-india') setSelectedCategory('pan-india');
    else if (tab === 'spiritual') setSelectedCategory('spiritual');
    else if (tab === 'beach') setSelectedCategory('beach');
    else if (tab === 'chilika') setSelectedCategory('chilika');
    else setSelectedCategory('all');
  };

  const handleClaimCoupon = (code) => {
    showNotification(`Coupon code ${code} applied! ₹750 discount will be credited.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col relative overflow-x-hidden selection:bg-[#ff7b00] selection:text-white">
      {/* Toast Notification Banner */}
      {notification && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 bg-slate-900/95 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-400/50 flex items-center space-x-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs sm:text-sm font-semibold">{notification}</span>
        </div>
      )}

      {/* Main Brand Navigation Bar with "Book Now" CTA */}
      <Navbar
        bookingCount={bookingCount}
        onOpenBookings={() => setIsBookingsDrawerOpen(true)}
        onOpenFacilities={handleOpenFacilities}
      />

      {/* Hero Section: Professional, Balanced, with Plane Animation and Search Engine */}
      <Hero
        onSearch={handleSearch}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenFacilities={handleOpenFacilities}
        onBookPackage={handleBookPackage}
        onClaimCode={handleClaimCoupon}
      />

      {/* Live Temple & Coastal Pulse Tracker (Queue wait, tides, dolphins) */}
      <LivePuriTracker />

      {/* Curated Travel & Pilgrimage Packages Section */}
      <PackagesSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onBookPackage={handleBookPackage}
      />

      {/* Interactive Custom Itinerary Builder */}
      <ItineraryBuilder onBookCustomPlan={handleBookPackage} />

      {/* Round Animated Social Media Hub & 360 Community Orbit (strictly contained) */}
      <SocialOrbitSection />

      {/* Luxury Beach Resorts & Temple Stays */}
      <HotelStays onBookHotel={handleBookPackage} />

      {/* Jagannath Mandir VIP Darshan & Pilgrim Guidebook */}
      <DarshanGuide onBookVIPPass={handleOpenFacilities} />

      {/* Dynamic Package Offers & Coupon Showcase Banner */}
      <CouponBanner 
        onClaimCode={handleClaimCoupon} 
        onBookPackage={handleBookPackage}
      />

      {/* Verified Traveler & Pilgrim Reviews */}
      <TravelerStories />

      {/* Brand Footer with Wave Crest */}
      <Footer
        onOpenBookings={() => setIsBookingsDrawerOpen(true)}
        onQuickBook={handleOpenFacilities}
      />

      {/* Floating Round Animated Social Media Wheel / Dock (Safe bounds) */}
      <CircularSocialOrbit />

      {/* Facility Selector Modal (Triggered by Navbar "Book Now") */}
      <FacilitySelectorModal
        isOpen={isFacilityModalOpen}
        onClose={() => setIsFacilityModalOpen(false)}
        onSelectFacility={handleSelectFacility}
      />

      {/* Multi-Step Booking Checkout Modal with Confetti & E-Pass */}
      {isBookingModalOpen && (
        <BookingModal
          packageData={activeBookingPkg}
          onClose={() => setIsBookingModalOpen(false)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {/* My Bookings Management Drawer */}
      <MyBookingsDrawer
        isOpen={isBookingsDrawerOpen}
        onClose={() => setIsBookingsDrawerOpen(false)}
        onExploreClick={() => {
          const el = document.getElementById('packages');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
