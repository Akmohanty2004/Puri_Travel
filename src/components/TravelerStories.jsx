import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Heart, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export default function TravelerStories() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  return (
    <section id="testimonials" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-[#ff6f00] border border-amber-200 mb-2.5">
            <Award className="w-3.5 h-3.5" />
            <span>DEVOTEE & TRAVELER VOICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071e3d] tracking-tight">
            Cherished Memories From{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#ff7b00]">
              Sacred Puri & Beyond
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Over 1.2 million devotees, families, and international explorers trust PuriTravel for their holy pilgrimages and coastal holidays.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1 ${
                idx >= 1 && !showAllMobile ? 'hidden md:flex' : 'flex'
              }`}
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-sky-300 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Tour taken */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-sky-200"
                />
                <div className="truncate">
                  <div className="flex items-center space-x-1">
                    <h4 className="text-sm font-bold text-[#071e3d] truncate">{t.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400">{t.city} • <span className="text-[#0077b6] font-medium">{t.role}</span></p>
                  <p className="text-[11px] text-amber-700 bg-amber-50 rounded px-1.5 py-0.5 inline-block mt-1 font-semibold truncate max-w-full">
                    {t.tourTaken}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Mobile Expand Button */}
        {TESTIMONIALS.length > 1 && (
          <div className="mt-6 text-center md:hidden">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="w-full py-3.5 px-5 rounded-2xl bg-white border border-slate-300 text-sm font-bold text-[#0077b6] hover:bg-sky-50 shadow-sm flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-98"
            >
              <span>
                {showAllMobile
                  ? 'Show Less Stories ↑'
                  : `Read All ${TESTIMONIALS.length} Devotee Reviews (${TESTIMONIALS.length - 1} More) ↓`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
