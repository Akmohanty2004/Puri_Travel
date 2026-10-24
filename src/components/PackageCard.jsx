import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Eye,
  Heart
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
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#0077b6]/50 shadow-md hover:shadow-2xl hover:shadow-sky-950/15 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 relative">
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={images[currentImgIndex]}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/25 pointer-events-none"></div>

        {/* Top Badges & Like Button */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r from-[#ff6f00] via-[#ff8800] to-[#ffa200] shadow-md shadow-orange-500/30 tracking-wide">
            {pkg.featuredBadge}
          </span>

          <div className="flex items-center space-x-1.5">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
              {pkg.discount}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Save tour"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-rose-500' : 'text-white'}`} />
            </button>
          </div>
        </div>

        {/* Image Slider Controls (if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImg}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-md z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImg}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-md z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Slider Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center space-x-1 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImgIndex ? 'bg-amber-400 w-3.5' : 'bg-white/60 w-1.5'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Quick View Button overlay */}
        <button
          onClick={() => onQuickView(pkg)}
          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl text-xs font-bold text-white bg-black/60 hover:bg-[#0077b6] backdrop-blur-md flex items-center space-x-1 transition-all cursor-pointer z-10"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>

        {/* Duration Chip on bottom left */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-xs font-bold text-white z-10">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Rating & Location Row */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <div className="flex items-center space-x-1 text-[#0077b6] font-semibold truncate">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{pkg.location}</span>
          </div>

          <div className="flex items-center space-x-1 font-bold text-slate-800 shrink-0 ml-2 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>{pkg.rating}</span>
            <span className="text-slate-400 font-normal">({pkg.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#071e3d] group-hover:text-[#0077b6] transition-colors line-clamp-2 leading-snug">
          {pkg.title}
        </h3>

        {/* Highlights / Inclusions Pills */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {pkg.inclusions.slice(0, 3).map((inc, i) => (
            <span
              key={i}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-sky-50 text-[#0077b6] border border-sky-100"
            >
              <CheckCircle className="w-3 h-3 text-[#ff7b00]" />
              <span className="truncate">{inc}</span>
            </span>
          ))}
          {pkg.inclusions.length > 3 && (
            <span className="px-2 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-600">
              +{pkg.inclusions.length - 3} more
            </span>
          )}
        </div>

        <div className="flex-grow"></div>

        {/* Price & Action Bottom Strip */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-[11px] font-bold text-emerald-600">Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-xl sm:text-2xl font-black text-[#071e3d]">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ person</span>
            </div>
          </div>

          <button
            onClick={() => onBook(pkg)}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0077b6] via-[#008cc9] to-[#0096c7] hover:from-[#ff6f00] hover:to-[#ffa200] shadow-md shadow-sky-800/15 hover:shadow-orange-500/30 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
