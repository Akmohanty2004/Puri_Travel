import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  X, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Star, 
  ShieldCheck,
  Calendar,
  Waves,
  Sun
} from 'lucide-react';
import PackageCard from './PackageCard';
import { PACKAGES } from '../data/travelData';

export default function PackagesSection({ 
  onBookPackage, 
  selectedCategory, 
  setSelectedCategory 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [quickViewPkg, setQuickViewPkg] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'spiritual', label: 'Spiritual & VIP Darshan' },
    { id: 'beach', label: 'Golden Beach & Resorts' },
    { id: 'chilika', label: 'Chilika & Wildlife' },
    { id: 'heritage', label: 'Heritage & Craft Villages' },
    { id: 'family', label: 'Grand Odisha Circuit' },
  ];

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Category filter
      if (selectedCategory !== 'all' && pkg.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (pkg.price > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesLoc = pkg.location.toLowerCase().includes(query);
        const matchesDesc = pkg.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLoc && !matchesDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, maxPrice, searchQuery]);

  return (
    <section id="packages" className="py-16 sm:py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-[#0077b6] border border-sky-200 mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HANDPICKED PURI ITINERARIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071e3d] tracking-tight">
              Featured Travel &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f00] to-[#ffa200]">
                Pilgrimage Packages
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              From blissful Jagannath VIP priest Darshan to golden beach cruises, every package is fully customizable with verified local guides.
            </p>
          </div>

          {/* Quick Result Counter */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <span className="text-xs sm:text-sm font-semibold text-slate-500 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
              Showing <strong className="text-[#071e3d]">{filteredPackages.length}</strong> verified tours
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 mb-10 space-y-4">
          {/* Top row: Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#071e3d] to-[#0077b6] text-white shadow-md shadow-sky-900/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-[#0077b6]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Bottom row: Search input & Price filter slider */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search temple, beach, dolphins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6]/30 text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Slider */}
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <span className="text-xs font-semibold text-slate-600 shrink-0">
                Max Budget: <strong>₹{maxPrice.toLocaleString('en-IN')}</strong>
              </span>
              <input
                type="range"
                min="2000"
                max="20000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-32 sm:w-44 accent-[#ff7b00] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPackages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  className={`${idx >= 2 && !showAllMobile ? 'hidden md:block' : 'block'}`}
                >
                  <PackageCard
                    pkg={pkg}
                    onBook={onBookPackage}
                    onQuickView={(p) => setQuickViewPkg(p)}
                  />
                </div>
              ))}
            </div>

            {/* Responsive Mobile Expand Button (Shows on mobile only when more than 2 packages exist) */}
            {filteredPackages.length > 2 && (
              <div className="mt-6 text-center md:hidden">
                <button
                  onClick={() => setShowAllMobile(!showAllMobile)}
                  className="w-full py-3.5 px-5 rounded-2xl bg-white border border-slate-300 text-sm font-bold text-[#0077b6] hover:bg-sky-50 shadow-sm flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-98"
                >
                  <span>
                    {showAllMobile
                      ? 'Show Less Packages ↑'
                      : `View All ${filteredPackages.length} Packages (${filteredPackages.length - 2} More) ↓`}
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ff7b00] flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No matching packages found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keyword or increasing your max budget filter to view available tours.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setMaxPrice(20000);
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0077b6] hover:bg-[#ff7b00] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Package Quick View Modal */}
      {quickViewPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-sky-100 p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setQuickViewPkg(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-10">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#ff6f00] to-[#ffa200]">
                {quickViewPkg.featuredBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#071e3d] mt-2">
                {quickViewPkg.title}
              </h3>
              <div className="flex items-center space-x-3 text-xs text-slate-500 mt-1">
                <span className="flex items-center text-[#0077b6]">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  {quickViewPkg.location}
                </span>
                <span>•</span>
                <span className="flex items-center text-slate-700">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {quickViewPkg.duration}
                </span>
                <span>•</span>
                <span className="flex items-center font-bold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                  {quickViewPkg.rating}
                </span>
              </div>
            </div>

            {/* Image Preview */}
            <div className="mt-4 rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src={quickViewPkg.image}
                alt={quickViewPkg.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">About This Experience</h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                {quickViewPkg.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Tour Highlights</h4>
              <div className="space-y-1.5">
                {quickViewPkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">What is Included</h4>
              <div className="flex flex-wrap gap-2">
                {quickViewPkg.inclusions.map((inc, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-[#0077b6] border border-sky-100"
                  >
                    ✓ {inc}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 line-through">₹{quickViewPkg.originalPrice.toLocaleString('en-IN')}</span>
                <div className="text-2xl font-black text-[#071e3d]">
                  ₹{quickViewPkg.price.toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-slate-500"> / devotee</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuickViewPkg(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const selected = quickViewPkg;
                    setQuickViewPkg(null);
                    onBookPackage(selected);
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff6f00] to-[#ffa200] shadow-md shadow-orange-500/30 hover:scale-102 transition-transform cursor-pointer"
                >
                  Book This Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
