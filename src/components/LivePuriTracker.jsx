import React, { useState } from 'react';
import { 
  Activity, 
  Clock, 
  Sun, 
  Waves, 
  Sparkles, 
  Compass, 
  RefreshCw, 
  Flame, 
  ShieldCheck,
  Eye
} from 'lucide-react';
import { LIVE_TRACKER_DATA } from '../data/travelData';

export default function LivePuriTracker() {
  const [data, setData] = useState(LIVE_TRACKER_DATA);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated('Updated just now');
    }, 700);
  };

  return (
    <section id="live-tracker" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-30 mb-16">
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-md shadow-slate-200/70 border border-slate-200">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0077b6] border border-sky-100 flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#0077b6]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-bold text-[#071e3d]">
                  Puri Live Coastal & Temple Pulse
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-[#0077b6] border border-sky-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] mr-1.5 animate-pulse"></span>
                  LIVE FEED
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Official real-time indicators for devotees and beach visitors
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <span className="text-xs text-slate-400 font-medium">{lastUpdated}</span>
            <button
              onClick={handleRefresh}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#0077b6] bg-slate-50 hover:bg-sky-50 transition-colors cursor-pointer border border-slate-200"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-500' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* 3 Live Cards Grid (Simple, Attractive, Brand Colored) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {/* Card 1: Jagannath Temple Status */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-[#ff7b00]" />
                <span className="text-xs font-bold text-[#071e3d] uppercase tracking-wider">
                  Shree Jagannath Mandir
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white text-[#0077b6] border border-slate-200 shadow-2xs">
                {data.templeStatus.status.split('-')[1]?.trim() || 'Smooth'}
              </span>
            </div>

            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl font-black text-[#071e3d]">
                ~{data.templeStatus.queueTime}
              </span>
              <span className="text-xs text-slate-500 font-medium">approx queue wait</span>
            </div>

            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Crowd Level:</span>
                <span className="font-semibold text-slate-700">{data.templeStatus.crowdLevel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Next Major Ritual:</span>
                <span className="font-semibold text-slate-700">{data.templeStatus.nextAarti}</span>
              </div>
              <div className="pt-1.5 border-t border-slate-200 text-[11px] text-slate-700 font-medium flex items-start space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7b00] shrink-0 mt-0.5" />
                <span>{data.templeStatus.mahaprasad}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Golden Beach & Tides */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Waves className="w-4 h-4 text-[#0077b6]" />
                <span className="text-xs font-bold text-[#071e3d] uppercase tracking-wider">
                  Blue Flag Golden Beach
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white text-[#0077b6] border border-slate-200 shadow-2xs">
                Safe Swimming
              </span>
            </div>

            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl font-black text-[#071e3d]">
                {data.beachStatus.tide}
              </span>
              <span className="text-xs text-slate-500 font-medium">({data.beachStatus.waveHeight})</span>
            </div>

            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Next Golden Sunrise:</span>
                <span className="font-semibold text-[#ff7b00]">{data.beachStatus.nextSunrise}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Water Temperature:</span>
                <span className="font-semibold text-slate-700">{data.beachStatus.waterTemp}</span>
              </div>
              <div className="pt-1.5 border-t border-slate-200 text-[11px] text-slate-700 font-medium flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                <span>{data.beachStatus.lifeguardStatus}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Chilika Dolphins & Lagoon */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-[#0077b6]" />
                <span className="text-xs font-bold text-[#071e3d] uppercase tracking-wider">
                  Chilika Satapada Lagoon
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white text-[#0077b6] border border-slate-200 shadow-2xs">
                Dolphins Active
              </span>
            </div>

            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl font-black text-[#071e3d]">
                {data.chilikaStatus.dolphinChance}
              </span>
              <span className="text-xs text-slate-500 font-medium">sighting probability</span>
            </div>

            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Speedboats:</span>
                <span className="font-semibold text-slate-700">{data.chilikaStatus.boatDeparture}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Coastal Weather:</span>
                <span className="font-semibold text-slate-700">{data.chilikaStatus.weather}</span>
              </div>
              <div className="pt-1.5 border-t border-slate-200 text-[11px] text-slate-700 font-medium flex items-center space-x-1">
                <Eye className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                <span>Kalijai Island ferry service operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
