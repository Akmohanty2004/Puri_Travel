import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Eye,
  Heart,
  Zap
} from 'lucide-react';

export default function PackageCard({ pkg, onBook, onQuickView }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const images = pkg.images || [pkg.image];

  const handleNextImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-white rounded-[20px] rounded-tr-[42px] rounded-bl-[28px] overflow-hidden border border-slate-200/90 hover:border-sky-300/80 shadow-[0_6px_20px_rgba(7,30,61,0.06)] hover:shadow-[0_16px_36px_rgba(0,119,182,0.18)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 relative">
      {/* Radiant Top Edge Hover Highlight */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 via-amber-400 to-[#0077b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />

      {/* ── Compact Media Container with Architectural Curved Top-Right ── */}
      <div className="relative aspect-[16/9.2] overflow-hidden bg-slate-900 rounded-t-[19px] rounded-tr-[41px]">
        {/* Amber Corner Flare Accent on the unique curved contour */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/30 via-orange-400/10 to-transparent pointer-events-none z-20 rounded-tr-[41px]" />

        <img
          src={images[currentImgIndex]}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Dynamic Dark Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-black/30 pointer-events-none" />

        {/* Top Badges Bar: Featured Tag + Discount + Animated Heart */}
        <div className="absolute top-2.5 left-2.5 right-3 flex items-center justify-between z-20">
          {/* Featured / Bestseller / Multi-Place Badge */}
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-black text-white bg-gradient-to-r from-[#ff6f00] via-[#ff8800] to-[#ffa200] shadow-md shadow-orange-500/30 tracking-wide">
            <Sparkles className="w-3 h-3 text-amber-100" />
            <span>{pkg.comboBadge || pkg.featuredBadge || 'Verified Tour'}</span>
          </span>

          {/* Right: Discount Pill + Heart Bookmark */}
          <div className="flex items-center space-x-1.5">
            {pkg.discount && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white bg-black/55 backdrop-blur-md border border-white/25 shadow-xs">
                {pkg.discount}
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`p-1.5 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md ${
                isLiked 
                  ? 'bg-rose-500 text-white scale-110 shadow-rose-500/40 ring-2 ring-rose-300' 
                  : 'bg-black/50 hover:bg-black/75 text-white border border-white/20 hover:scale-105'
              }`}
              aria-label="Save tour to favorites"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white stroke-white' : 'stroke-white'}`} />
            </button>
          </div>
        </div>

        {/* Image Slider Controls (if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-md z-20 active:scale-90"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-md z-20 active:scale-90"
              aria-label="Next image"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            {/* Slider Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-1 z-20 bg-black/45 backdrop-blur-xs px-1.5 py-0.5 rounded-full">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentImgIndex ? 'bg-amber-400 w-3' : 'bg-white/60 w-1'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Floating Bottom Bar: Duration (Left) & Quick View (Right) */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-20">
          <div className="flex items-center space-x-1 px-2 py-0.5 rounded-lg text-[11px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-xs">
            <Clock className="w-3 h-3 text-amber-300 shrink-0" />
            <span>{pkg.duration}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(pkg);
            }}
            className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold text-white bg-white/20 hover:bg-[#0077b6] backdrop-blur-md border border-white/30 flex items-center space-x-1 transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <Eye className="w-3 h-3" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* ── Compact Card Body ── */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-grow bg-white">
        {/* Rating & Location Meta Row */}
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <div className="flex items-center space-x-1 text-[#0077b6] font-bold truncate max-w-[65%]">
            <MapPin className="w-3 h-3 shrink-0 text-[#ff7b00]" />
            <span className="truncate">{pkg.location}</span>
          </div>

          <div className="flex items-center space-x-1 font-bold text-amber-900 shrink-0 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-300/60 shadow-2xs">
            <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
            <span>{pkg.rating}</span>
            <span className="text-amber-800/70 font-normal text-[10px]">({pkg.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-extrabold text-[#071e3d] group-hover:text-[#0077b6] transition-colors duration-200 line-clamp-2 leading-snug">
          {pkg.title}
        </h3>

        {/* Multi-Place Destination Chain Route Pill */}
        {pkg.places && pkg.places.length > 1 && (
          <div className="mt-2 py-1 px-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-amber-500/5 border border-amber-300/50 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-black uppercase text-amber-950 bg-amber-400/40 px-1.5 py-0.2 rounded shrink-0">
              {pkg.places.length} Places Tour:
            </span>
            <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-800 flex-wrap">
              {pkg.places.map((place, pIdx) => (
                <span key={pIdx} className="inline-flex items-center space-x-1">
                  <span className="bg-white/90 px-1.5 py-0.2 rounded border border-slate-200/80 shadow-2xs text-[#071e3d] whitespace-nowrap">
                    {place}
                  </span>
                  {pIdx < pkg.places.length - 1 && (
                    <span className="text-[#ff7b00] font-black text-xs">➔</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights / Inclusions Pills (Compact 2 chips + counter) */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {pkg.inclusions.slice(0, 2).map((inc, i) => (
            <span
              key={i}
              className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-semibold bg-sky-50 text-sky-900 border border-sky-200/70 shadow-2xs"
            >
              <CheckCircle2 className="w-3 h-3 text-[#ff7b00] shrink-0" />
              <span className="truncate max-w-[130px]">{inc}</span>
            </span>
          ))}
          {pkg.inclusions.length > 2 && (
            <span className="px-1.5 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
              +{pkg.inclusions.length - 2} more
            </span>
          )}
        </div>

        {/* Trust Micro-badge Line */}
        <div className="mt-2.5 pt-2 border-t border-dashed border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center space-x-1 font-medium text-emerald-700">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Verified Local Escort</span>
          </span>
          <span className="flex items-center space-x-1 font-medium text-sky-700">
            <Zap className="w-2.5 h-2.5 text-amber-500" />
            <span>Instant Confirmation</span>
          </span>
        </div>

        <div className="flex-grow"></div>

        {/* Price & Action Bottom Strip */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-1.5 leading-none mb-0.5">
              <span className="text-[11px] text-slate-400 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">
                SAVE ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-lg sm:text-xl font-black text-[#071e3d] tracking-tight">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">/ person</span>
            </div>
          </div>

          <button
            onClick={() => onBook(pkg)}
            className="group/btn flex items-center space-x-1 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0077b6] via-[#008cc9] to-[#0077b6] hover:from-[#ff6f00] hover:via-[#ff8800] hover:to-[#ffa200] shadow-md shadow-sky-900/15 hover:shadow-orange-500/35 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
