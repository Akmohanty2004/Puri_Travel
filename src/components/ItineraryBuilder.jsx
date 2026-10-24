import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  Trash2, 
  Calendar, 
  Clock, 
  Sparkles, 
  Sun, 
  Waves, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { ITINERARY_ACTIVITIES } from '../data/travelData';

export default function ItineraryBuilder({ onBookCustomPlan }) {
  const [selectedDuration, setSelectedDuration] = useState('3 Days');
  const [selectedActivityIds, setSelectedActivityIds] = useState(['act-1', 'act-2', 'act-3', 'act-4']);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const toggleActivity = (id) => {
    if (selectedActivityIds.includes(id)) {
      setSelectedActivityIds(selectedActivityIds.filter((item) => item !== id));
    } else {
      setSelectedActivityIds([...selectedActivityIds, id]);
    }
  };

  const selectedActivities = ITINERARY_ACTIVITIES.filter((a) =>
    selectedActivityIds.includes(a.id)
  );

  const baseStayCost = selectedDuration === '1 Day' ? 1800 : selectedDuration === '2 Days' ? 3600 : selectedDuration === '3 Days' ? 5400 : 9000;
  const activitiesTotal = selectedActivities.reduce((sum, a) => sum + a.cost, 0);
  const totalCost = baseStayCost + activitiesTotal;

  const handleBook = () => {
    const customPackage = {
      id: `custom-${Date.now()}`,
      title: `Custom ${selectedDuration} Puri Dream Journey`,
      category: 'custom',
      categoryLabel: 'Customized Itinerary',
      rating: 5.0,
      reviewsCount: 1,
      duration: selectedDuration,
      location: 'Customized (Puri • Konark • Chilika)',
      price: totalCost,
      originalPrice: Math.round(totalCost * 1.3),
      discount: '23% OFF',
      featuredBadge: 'Personalized Plan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg',
      highlights: selectedActivities.map((a) => `${a.timeSlot}: ${a.title}`),
      inclusions: ['Selected Heritage Activities', 'Premium AC Vehicle Transfer', 'Personal Local Sevayat Guide', '24/7 Helpline Support'],
      description: `Tailored ${selectedDuration} itinerary including ${selectedActivities.length} chosen experiences across Puri sanctum and coastal hotspots.`
    };
    onBookCustomPlan(customPackage);
  };

  return (
    <section id="itinerary-builder" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-[#ff6f00] border border-amber-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE TRIP PLANNER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071e3d] tracking-tight">
            Design Your Own{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#ff7b00]">
              Puri Coastal & Sacred Itinerary
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Customize every hour of your stay. Select your preferred temple rituals, beach adventures, and craft excursions—our system calculates your budget in real time.
          </p>

          {/* Duration Selector Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['1 Day Express', '2 Days Weekend', '3 Days Divine & Beach', '5 Days Grand Circuit'].map((dur) => {
              const simpleName = dur.split(' ')[0] + ' ' + dur.split(' ')[1];
              const isSelected = selectedDuration.startsWith(dur.split(' ')[0]);
              return (
                <button
                  key={dur}
                  onClick={() => setSelectedDuration(dur.split(' ')[0] + ' ' + dur.split(' ')[1])}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0077b6] to-[#0096c7] text-white shadow-md shadow-sky-800/20 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dur}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Activity Selection List (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Choose Your Desired Activities ({selectedActivities.length} Selected)</span>
              <span>Price Add-on</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ITINERARY_ACTIVITIES.map((act, idx) => {
                const isSelected = selectedActivityIds.includes(act.id);
                return (
                  <div
                    key={act.id}
                    onClick={() => toggleActivity(act.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      idx >= 3 && !showAllMobile ? 'hidden sm:flex' : 'flex'
                    } ${
                      isSelected
                        ? 'border-[#0077b6] bg-sky-50/60 shadow-sm'
                        : 'border-slate-200/80 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                          {act.timeSlot}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-[#0077b6] text-white'
                              : 'border border-slate-300 text-transparent'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-[#071e3d] leading-snug">
                        {act.title}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs">
                      <span className="flex items-center text-slate-500">
                        <Clock className="w-3 h-3 mr-1 text-[#ff7b00]" />
                        {act.duration}
                      </span>
                      <span className="font-bold text-[#0077b6]">
                        +₹{act.cost}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View All Activities Toggle */}
            {ITINERARY_ACTIVITIES.length > 3 && (
              <div className="mt-4 sm:hidden">
                <button
                  onClick={() => setShowAllMobile(!showAllMobile)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#0077b6] transition-all text-center cursor-pointer active:scale-98"
                >
                  {showAllMobile
                    ? 'Show Fewer Activities ↑'
                    : `View All ${ITINERARY_ACTIVITIES.length} Activities (${ITINERARY_ACTIVITIES.length - 3} More) ↓`}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Real-Time Trip Summary & Budget Ticket (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-gradient-to-b from-sky-950 to-[#071e3d] rounded-3xl p-6 text-white shadow-2xl shadow-sky-950/30 border border-sky-800">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    Instant Live Estimate
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    {selectedDuration} Custom Pass
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-amber-300" />
                </div>
              </div>

              {/* Selected Items List */}
              <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
                <div className="flex items-center justify-between text-xs text-sky-200 pb-1 border-b border-white/5">
                  <span>Selected Hotel Accommodation:</span>
                  <span className="font-semibold text-white">₹{baseStayCost}</span>
                </div>

                {selectedActivities.map((act) => (
                  <div key={act.id} className="flex items-center justify-between text-xs text-slate-300 group">
                    <span className="truncate pr-2">• {act.title}</span>
                    <div className="flex items-center space-x-1 shrink-0">
                      <span className="text-amber-300 font-semibold">₹{act.cost}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleActivity(act.id);
                        }}
                        className="text-slate-400 hover:text-rose-400 ml-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Perks Included */}
              <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 text-sky-100">
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free Chauffeur Pick & Drop included</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Verified Sevayat Priest assistance</span>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Total Calculated Estimate:</span>
                  <span className="line-through">₹{Math.round(totalCost * 1.3).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl sm:text-3xl font-black text-amber-300">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-emerald-300 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    Special 23% Bundle Saver
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleBook}
                className="mt-6 w-full py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#ff6f00] via-[#ff8800] to-[#ffa200] hover:from-[#e55f00] hover:to-[#ff8800] shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Book This Custom Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
