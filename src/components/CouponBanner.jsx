import React, { useState } from 'react';
import { Sparkles, Gift, Check, Copy, Flame } from 'lucide-react';

export default function CouponBanner({ onClaimCode }) {
  const [copied, setCopied] = useState(false);
  const code = 'JAGANNATH750';

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      if (onClaimCode) onClaimCode(code);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#071e3d] via-[#0077b6] to-[#ff7b00] p-6 sm:p-8 text-white shadow-xl shadow-sky-950/20">
        {/* Glow orb */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-amber-400/30 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Gift className="w-7 h-7 text-amber-300 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-900">
                  Festival Season Gift
                </span>
                <span className="text-xs text-amber-200">Limited Availability</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Flat ₹750 Off On Your First Puri Pilgrimage or Beach Package
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 mt-0.5">
                Applicable on all VIP Darshan passes, Golden Beach stays, and Chilika dolphin safaris.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="bg-black/30 backdrop-blur-md border border-dashed border-amber-300/60 px-4 py-2.5 rounded-2xl flex items-center space-x-3">
              <div>
                <span className="text-[10px] text-amber-300 block font-semibold uppercase">Coupon Code</span>
                <strong className="text-base font-mono font-black text-white tracking-wider">{code}</strong>
              </div>
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-900 transition-colors flex items-center space-x-1 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Applied!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
