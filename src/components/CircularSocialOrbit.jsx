import React, { useState } from 'react';
import { 
  MessageCircle, 
  Share2, 
  PhoneCall, 
  X, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, WhatsappIcon } from './SocialIcons';

export default function CircularSocialOrbit() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Vibrant, authentic brand colors for colorful social media icons
  const socialItems = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Concierge',
      label: '+91 98610 99880',
      icon: WhatsappIcon,
      iconColor: 'text-[#25D366]',
      bgClass: 'bg-emerald-50 hover:bg-emerald-100 text-[#25D366] border-emerald-200 hover:border-[#25D366]',
      badgeBg: 'bg-emerald-50 border-emerald-200 text-[#25D366]',
      action: () => {
        window.open('https://wa.me/919861099880?text=Namaskar%20PuriTravel!%20I%20would%20like%20to%20inquire%20about%20Puri%20VIP%20Darshan%20and%20Tours.', '_blank');
      },
      tag: 'Direct Chat'
    },
    {
      id: 'instagram',
      name: 'Instagram Stories',
      label: '@PuriTravel.Official',
      icon: InstagramIcon,
      iconColor: 'text-[#e1306c]',
      bgClass: 'bg-pink-50 hover:bg-pink-100 text-[#e1306c] border-pink-200 hover:border-[#e1306c]',
      badgeBg: 'bg-pink-50 border-pink-200 text-[#e1306c]',
      action: () => {
        window.open('https://instagram.com', '_blank');
      },
      tag: 'Daily Reels'
    },
    {
      id: 'youtube',
      name: 'YouTube 4K Vlogs',
      label: 'Virtual Mandir Walk',
      icon: YoutubeIcon,
      iconColor: 'text-[#ff0000]',
      bgClass: 'bg-red-50 hover:bg-red-100 text-[#ff0000] border-red-200 hover:border-[#ff0000]',
      badgeBg: 'bg-red-50 border-red-200 text-[#ff0000]',
      action: () => {
        window.open('https://youtube.com', '_blank');
      },
      tag: 'Watch 4K'
    },
    {
      id: 'phone',
      name: '24/7 Devotee Helpline',
      label: '+91 98610 99880',
      icon: PhoneCall,
      iconColor: 'text-[#ff7b00]',
      bgClass: 'bg-amber-50 hover:bg-amber-100 text-[#ff7b00] border-amber-200 hover:border-[#ff7b00]',
      badgeBg: 'bg-amber-50 border-amber-200 text-[#ff7b00]',
      action: () => {
        window.location.href = 'tel:+919861099880';
      },
      tag: '24/7 Desk'
    },
    {
      id: 'share',
      name: 'Share Website',
      label: 'Copy link to share',
      icon: Share2,
      iconColor: 'text-[#0077b6]',
      bgClass: 'bg-sky-50 hover:bg-sky-100 text-[#0077b6] border-sky-200 hover:border-[#0077b6]',
      badgeBg: 'bg-sky-50 border-sky-200 text-[#0077b6]',
      action: () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      },
      tag: copied ? 'Copied!' : 'Share'
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center">
      {/* Expanded Modal Overlay / Quick Connect Card when clicked */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-28 sm:bottom-28 sm:static sm:absolute sm:right-0 sm:inset-x-auto w-auto sm:w-96 max-w-sm bg-white rounded-3xl p-5 shadow-xl shadow-slate-300/60 border border-slate-200 text-slate-800 animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#0077b6]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#071e3d]">PuriTravel Concierge</h4>
                <p className="text-[11px] text-slate-500">Official Devotee & Travel Assistance</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clean, Simple Channel List */}
          <div className="mt-3 space-y-2">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-xs transition-colors ${item.badgeBg || 'bg-slate-50 border-slate-200'}`}>
                      <Icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#0077b6] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-500">{item.label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Simple Clean Helpline CTA */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <a
              href="https://wa.me/919861099880?text=Jai%20Jagannath!%20Need%20help%20planning%20my%20Puri%20trip."
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-colors"
            >
              <WhatsappIcon className="w-4 h-4 text-white" />
              <span>Connect on WhatsApp (+91 98610 99880)</span>
            </a>
          </div>
        </div>
      )}

      {/* CONTINUOUS ROUND-ROUND ORBITING SOCIAL WIDGET (Clean Brand Colors: Navy, Sky, Amber) */}
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center group">
        {/* Soft Ambient Halo */}
        <div className="absolute inset-4 rounded-full bg-sky-100/60 blur-md pointer-events-none"></div>

        {/* Orbit Track Circular Ring */}
        <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-dashed border-sky-300/60 pointer-events-none"></div>

        {/* The Continuous Round-Round Spinning Orbit Container */}
        <div className="absolute w-24 h-24 sm:w-28 sm:h-28 animate-orbit-spin group-hover:[animation-play-state:paused] pointer-events-none">
          {/* Node 1: WhatsApp (Top) - Vibrant Green */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button
              onClick={socialItems[0].action}
              onMouseEnter={() => setActiveTooltip('WhatsApp')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md shadow-emerald-600/40 border-2 border-white hover:scale-125 transition-all cursor-pointer animate-orbit-counter group-hover:[animation-play-state:paused]"
              title="WhatsApp Concierge"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>

          {/* Node 2: Instagram (Right) - Vibrant Instagram Gradient */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button
              onClick={socialItems[1].action}
              onMouseEnter={() => setActiveTooltip('Instagram')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white flex items-center justify-center shadow-md shadow-pink-600/40 border-2 border-white hover:scale-125 transition-all cursor-pointer animate-orbit-counter group-hover:[animation-play-state:paused]"
              title="Instagram Stories"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>

          {/* Node 3: YouTube (Bottom) - Vibrant Red */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto">
            <button
              onClick={socialItems[2].action}
              onMouseEnter={() => setActiveTooltip('YouTube')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff0000] hover:bg-[#e60000] text-white flex items-center justify-center shadow-md shadow-red-600/40 border-2 border-white hover:scale-125 transition-all cursor-pointer animate-orbit-counter group-hover:[animation-play-state:paused]"
              title="YouTube Vlogs"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>

          {/* Node 4: 24/7 Helpline (Left) - Vibrant Golden Amber */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <button
              onClick={socialItems[3].action}
              onMouseEnter={() => setActiveTooltip('24/7 Call')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#ff7b00] to-[#ffa200] hover:from-[#e06a00] hover:to-[#ff9100] text-white flex items-center justify-center shadow-md shadow-amber-600/40 border-2 border-white hover:scale-125 transition-all cursor-pointer animate-orbit-counter group-hover:[animation-play-state:paused]"
              title="24/7 Helpline"
              aria-label="Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Central Core Button (Deep Navy & Amber Paper Plane) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#071e3d] hover:bg-[#0b2b52] p-1 shadow-lg shadow-slate-400/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer border-2 border-white"
          aria-label="Toggle PuriTravel Social Wheel"
        >
          {/* Inner Core */}
          <div className="w-full h-full rounded-full flex flex-col items-center justify-center text-white relative">
            {/* Orange Paper plane icon */}
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 transform -rotate-12 group-hover:rotate-0 transition-transform duration-200" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            <span className="text-[8px] sm:text-[9px] font-bold tracking-wider text-amber-200 uppercase mt-0.5 leading-none">
              SOCIAL
            </span>
          </div>

          {/* Active Status Indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#ff7b00] border-2 border-white flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        </button>

        {/* Floating Tooltip upon hover */}
        {activeTooltip && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-lg bg-slate-800 text-white text-[10px] font-semibold whitespace-nowrap shadow-sm pointer-events-none z-30">
            {activeTooltip}
          </div>
        )}
      </div>
    </div>
  );
}
