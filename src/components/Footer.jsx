import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Heart, 
  Send, 
  Check, 
  ShieldCheck, 
  Sparkles,
  Waves
} from 'lucide-react';

export default function Footer({ onOpenBookings, onQuickBook }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="relative bg-[#071e3d] text-white pt-20 pb-12 overflow-hidden">
      {/* Decorative Wave Divider at Top of Footer echoing Logo Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-8 sm:h-12 text-slate-50 rotate-180" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-900/60">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-xl p-1 shadow-sm border border-sky-100 flex items-center">
                <img 
                  src="/assets/logo.jpg" 
                  alt="PuriTravel Brand Logo" 
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
            </div>

            <p className="text-sm text-sky-200/80 leading-relaxed">
              Your certified partner for Lord Jagannath VIP Darshan, golden beach wellness resorts, Chilika lagoon dolphin expeditions, and Odisha heritage tours.
            </p>

            <div className="pt-2 text-xs text-sky-300 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#ff7b00] shrink-0" />
                <span>Grand Road (Bada Danda), Near Lion Gate, Puri, Odisha 752001</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Helpline: <strong>+91 98610 99880</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00b4d8] shrink-0" />
                <span>support@puritravel.in • contact@puritravel.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Sacred & Coastal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-100/80">
              <li><a href="#darshan-guide" className="hover:text-amber-300 transition-colors">VIP Temple Pass</a></li>
              <li><a href="#packages" className="hover:text-amber-300 transition-colors">Mahaprasad Bhog Tour</a></li>
              <li><a href="#hotels" className="hover:text-amber-300 transition-colors">Golden Beach Resorts</a></li>
              <li><a href="#packages" className="hover:text-amber-300 transition-colors">Chilika Dolphin Safari</a></li>
              <li><a href="#packages" className="hover:text-amber-300 transition-colors">Konark Sun Temple</a></li>
            </ul>
          </div>

          {/* Guest Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Travel Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-100/80">
              <li><button onClick={onOpenBookings} className="hover:text-amber-300 transition-colors cursor-pointer text-left">My Active Bookings</button></li>
              <li><a href="#itinerary-builder" className="hover:text-amber-300 transition-colors">Custom Trip Planner</a></li>
              <li><a href="#live-tracker" className="hover:text-amber-300 transition-colors">Live Mandir & Tide Pulse</a></li>
              <li><button onClick={onQuickBook} className="hover:text-amber-300 transition-colors cursor-pointer text-left">Book Sevayat Priest</button></li>
              <li><a href="https://wa.me/919861099880" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">WhatsApp Concierge</a></li>
            </ul>
          </div>

          {/* Newsletter & Festival Alerts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Ratha Yatra & Festival Alerts
            </h4>
            <p className="text-xs text-sky-200/80 leading-relaxed">
              Get notified when Snana Purnima, Ratha Yatra special darshan passes, and winter beach festival slots open.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center space-x-2 pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-sky-800 text-xs text-white placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6f00] to-[#ffa200] hover:scale-102 text-white font-bold text-xs flex items-center space-x-1 shrink-0 transition-transform cursor-pointer shadow-md"
              >
                {subscribed ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
                <span>{subscribed ? 'Subscribed' : 'Join'}</span>
              </button>
            </form>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-sky-300/70">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>We never spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sky-300/60 gap-4">
          <p>© {new Date().getFullYear()} PuriTravel. Plan. Book. Explore. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Approved by Odisha Tourism</span>
            <span>•</span>
            <span>Blue Flag Eco Certified</span>
            <span>•</span>
            <span>100% Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
