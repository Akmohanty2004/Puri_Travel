import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldAlert, 
  Utensils, 
  Award, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  Shirt, 
  Check, 
  Info,
  PhoneCall
} from 'lucide-react';
import { TEMPLE_TIPS } from '../data/travelData';

export default function DarshanGuide({ onBookVIPPass }) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [showAllTipsMobile, setShowAllTipsMobile] = useState(false);

  const faqs = [
    {
      q: 'What is the best time for peaceful Jagannath Temple Darshan?',
      a: 'The early morning Mangala Alati (5:00 AM – 6:30 AM) and post-lunch afternoon hours (2:30 PM – 4:30 PM) offer the most serene experience with significantly shorter queue lines.'
    },
    {
      q: 'Are mobile phones or leather wallets allowed inside the Mandir?',
      a: 'No. Strictly no cameras, mobile devices, leather belts, or wallets are permitted inside the temple perimeter. PuriTravel provides secure complimentary locker access for all registered guests right by the Lion Gate (Singhadwara).'
    },
    {
      q: 'How does the PuriTravel VIP Sevayat Escort work?',
      a: 'You are met by an authorized temple Sevayat at the Singhadwara entrance. They escort your family through the sanctum, explain the legends and carvings, guide you directly in front of the holy Trinity (Ratnavedi), and assist you with obtaining sacred Mahaprasad.'
    },
    {
      q: 'Can non-Hindus enter the inner sanctum of Shree Jagannath Temple?',
      a: 'Historically, traditional inner sanctum entry is reserved for Hindus. However, travelers of all backgrounds can climb the Raghunandan Library terrace facing the temple for panoramic views of the Neelachakra flag changing ritual, explore the grand Bada Danda corridor, and enjoy the divine Mahaprasad at Anand Bazar.'
    }
  ];

  return (
    <section id="darshan-guide" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Warm Temple Aura */}
        <div className="bg-gradient-to-r from-[#071e3d] via-[#0b2b52] to-[#004e89] rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-sky-950/20 mb-16">
          {/* Background Motif */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-amber-400/20 to-transparent blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-300/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DEVOTEES & FIRST-TIME PILGRIM GUIDE</span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Shree Jagannath Mandir{' '}
                <span className="text-amber-300">VIP Darshan & Etiquette</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-2xl">
                Visiting one of India’s most revered Char Dham shrines is a once-in-a-lifetime spiritual milestone. Follow our verified guide to ensure a deeply peaceful, respectful, and fulfilling pilgrimage.
              </p>

              {/* 4 Essential Guidelines Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEMPLE_TIPS.map((tip, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-start space-x-3 ${
                      idx >= 2 && !showAllTipsMobile ? 'hidden sm:flex' : 'flex'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                      {idx === 0 && <Shirt className="w-4 h-4" />}
                      {idx === 1 && <ShieldAlert className="w-4 h-4" />}
                      {idx === 2 && <Utensils className="w-4 h-4" />}
                      {idx === 3 && <Award className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{tip.title}</h4>
                      <p className="text-xs text-sky-100/80 mt-1 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile View All Guidelines Toggle */}
              {TEMPLE_TIPS.length > 2 && (
                <div className="mt-4 sm:hidden">
                  <button
                    onClick={() => setShowAllTipsMobile(!showAllTipsMobile)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/15 border border-white/20 text-xs font-bold text-white hover:bg-white/25 transition-all text-center cursor-pointer active:scale-98"
                  >
                    {showAllTipsMobile
                      ? 'Show Fewer Guidelines ↑'
                      : `View All ${TEMPLE_TIPS.length} Guidelines (${TEMPLE_TIPS.length - 2} More) ↓`}
                  </button>
                </div>
              )}
            </div>

            {/* Quick VIP Pass CTA Box */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 text-slate-800 shadow-xl border border-sky-100">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#ff7b00] flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#071e3d]">
                  Skip the Rush with Verified Sevayat Escort
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Ideal for senior citizens, families, and first-time pilgrims. Includes dedicated escort priest, prasad tokens, and hassle-free footwear/locker management.
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-medium">VIP Pass from</span>
                  <span className="text-2xl font-black text-[#ff6f00]">₹1,499</span>
                </div>

                <button
                  onClick={onBookVIPPass}
                  className="mt-4 w-full py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff6f00] to-[#ffa200] hover:scale-102 transition-transform shadow-md shadow-orange-500/25 flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Request VIP Priest Pass</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-[#071e3d]">
              Frequently Asked Questions by Pilgrims
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything you need to know before stepping into the holy temple complex
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/50 hover:bg-sky-50/40 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-800 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0077b6] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
