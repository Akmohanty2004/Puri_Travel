import React, { useState } from 'react';
import { 
  Users, 
  Play, 
  Heart, 
  Share2, 
  Sparkles, 
  Sun, 
  Waves,
  ArrowRight,
  Compass
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, WhatsappIcon } from './SocialIcons';

export default function SocialOrbitSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const stories = [
    {
      id: 1,
      title: 'Morning Mangala Alati at Jagannath Mandir',
      channel: 'Instagram Reels',
      icon: InstagramIcon,
      brandColor: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
      brandTextColor: 'text-[#e1306c]',
      likes: '48.2K',
      views: '320K',
      author: '@shree_jagannatha_puri',
      tag: 'Sacred Ritual',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Puri_Jagannath_Temple.jpg',
      description: 'The celestial 5:00 AM lamp offering ritual where the sanctum fills with the fragrance of camphor, sandalwood, and tulsi garlands.'
    },
    {
      id: 2,
      title: 'Golden Beach Sunrise & Surfing Glimpses',
      channel: 'YouTube 4K Vlog',
      icon: YoutubeIcon,
      brandColor: 'bg-[#ff0000]',
      brandTextColor: 'text-[#ff0000]',
      likes: '29.5K',
      views: '185K',
      author: 'PuriTravel Stories',
      tag: 'Nature & Coastal',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Golden_beach_puri.jpg',
      description: 'Watch the sun rise over the Bay of Bengal while holy chants reverberate through the fresh sea breeze.'
    },
    {
      id: 3,
      title: 'Chilika Satapada Irrawaddy Dolphin Dance',
      channel: 'WhatsApp Community',
      icon: WhatsappIcon,
      brandColor: 'bg-[#25D366]',
      brandTextColor: 'text-[#25D366]',
      likes: '19.8K',
      views: '94K',
      author: '@chilika_adventures',
      tag: 'Eco Safari',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Chilika_lake.jpg',
      description: 'Rare close-up footage of playful dolphins leaping beside the traditional eco-speedboats at the sea mouth.'
    },
    {
      id: 4,
      title: 'Decoding the Konark Sun Temple Wheel Sundial',
      channel: 'Heritage Explorer',
      icon: Users,
      brandColor: 'bg-[#ff7b00]',
      brandTextColor: 'text-[#ff7b00]',
      likes: '34.1K',
      views: '240K',
      author: '@odisha_heritage',
      tag: 'Ancient Architecture',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/One_of_the_24_wheels_of_Konark_Sun_Temple.jpg',
      description: 'How 13th-century sculptors engineered 24 stone wheels that calculate exact time to the minute using shadows.'
    }
  ];

  const current = stories[activeStoryIndex];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/50 to-white relative overflow-hidden">
      {/* Decorative Brand Circles with strict max-width to prevent overflow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full border border-sky-200/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-[#ff6f00] border border-orange-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ROUND ANIMATED SOCIAL MEDIA ORBIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071e3d] tracking-tight">
            Connect With Our Living{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#ff7b00]">
              Devotee & Coastal Orbit
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Tap the rotating social media orbs to watch live Darshan reels, drone beach clips, and traveler community moments in real-time.
          </p>

          {/* Quick Tab Selector for Mobile Accessibility */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {stories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeStoryIndex === idx
                    ? 'bg-[#0077b6] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50'
                }`}
              >
                {story.channel}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Contained Orbit Stage (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center py-4 overflow-hidden">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center p-4">
              {/* Outer Orbit Track Ring */}
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#00b4d8]/40 animate-orbit-spin"></div>
              
              {/* Middle Glow Ring */}
              <div className="absolute inset-10 rounded-full border border-sky-300/40 bg-sky-100/10 backdrop-blur-xs"></div>

              {/* Central Glowing Core */}
              <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#071e3d] via-[#0077b6] to-[#00b4d8] p-1 shadow-xl shadow-sky-900/30 flex items-center justify-center text-center">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-2 text-slate-800 shadow-inner">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-0.5">
                    <Sun className="w-5 h-5 text-[#ff7b00] animate-spin" style={{ animationDuration: '12s' }} />
                  </div>
                  <span className="text-[11px] font-black text-[#071e3d] leading-none">PuriTravel</span>
                  <span className="text-[9px] font-bold text-[#0077b6] mt-0.5">HUB 360°</span>
                </div>
              </div>

              {/* 4 Inset Interactive Orbiting Story Nodes (Carefully bounded inside the container) */}
              {stories.map((story, index) => {
                const isSelected = activeStoryIndex === index;
                // Contained position styling so nothing sticks outside
                const positions = [
                  'top-2 left-1/2 -translate-x-1/2',
                  'top-1/2 right-2 -translate-y-1/2',
                  'bottom-2 left-1/2 -translate-x-1/2',
                  'top-1/2 left-2 -translate-y-1/2'
                ];

                const Icon = story.icon;

                return (
                  <button
                    key={story.id}
                    onClick={() => setActiveStoryIndex(index)}
                    className={`absolute ${positions[index]} group flex flex-col items-center z-20 transition-all duration-300 cursor-pointer`}
                  >
                    {/* The Round Animated Orb */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full p-1 transition-all duration-300 ${
                        isSelected
                          ? 'scale-115 ring-3 ring-orange-400 ring-offset-1 shadow-lg shadow-orange-500/30 bg-gradient-to-tr from-[#ff6f00] to-[#ffa200]'
                          : 'scale-95 hover:scale-105 shadow-sm bg-white border border-sky-200'
                      }`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125" 
                        />
                        <div className={`absolute inset-0 flex items-center justify-center ${
                          isSelected ? 'bg-orange-600/30' : 'bg-sky-950/20'
                        }`}>
                          <div className={`w-6 h-6 rounded-full ${story.brandColor} flex items-center justify-center shadow-md border border-white text-white`}>
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Small Node Tag */}
                    <span
                      className={`mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold truncate max-w-[80px] transition-all ${
                        isSelected
                          ? 'bg-[#071e3d] text-amber-300 shadow-xs'
                          : 'bg-white text-slate-600 shadow-xs border border-slate-200'
                      }`}
                    >
                      {story.channel.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Story Showcase Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-200/80 border border-sky-100 relative overflow-hidden">
              {/* Top Meta info */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff6f00] to-[#ff9e00] text-white flex items-center justify-center shadow-xs">
                    <CurrentIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{current.author}</h4>
                    <p className="text-xs text-slate-400">{current.channel}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0077b6] border border-sky-200/60">
                  {current.tag}
                </span>
              </div>

              {/* Story Content with Play Overlay */}
              <div className="mt-4 relative rounded-2xl overflow-hidden aspect-video shadow-md group">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-2.5 rounded-full bg-amber-400/30 animate-ping"></div>
                    <button 
                      onClick={() => alert(`Playing: ${current.title}`)}
                      className="relative w-12 h-12 rounded-full bg-white/95 text-[#0077b6] hover:text-[#ff6f00] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                      <span>{current.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-sky-300" />
                      <span>{current.views} views</span>
                    </span>
                  </div>
                  <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">
                    4K ULTRA HD
                  </span>
                </div>
              </div>

              {/* Story Title & Description */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-[#071e3d]">
                  {current.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <a
                    href="https://wa.me/919861099880"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#0077b6] hover:bg-[#006296] transition-colors shadow-xs"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const next = (activeStoryIndex + 1) % stories.length;
                      setActiveStoryIndex(next);
                    }}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0077b6] bg-sky-50 hover:bg-sky-100 transition-colors cursor-pointer border border-sky-200/60"
                  >
                    <span>Next Reel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
