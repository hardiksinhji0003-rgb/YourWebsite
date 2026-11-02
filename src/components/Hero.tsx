import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Gem } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Hero: React.FC = () => {
  const { setSelectedCategory, setIsStoryModalOpen } = useShop();

  const handleExplore = () => {
    setSelectedCategory('All');
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-12 sm:pb-20 lg:pt-8 lg:pb-28">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-radial from-amber-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/80 border border-[#E4D1A3] rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#171717]">
                THE ART OF SILVER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#171717] leading-[1.1] font-normal">
              Elegance That Tells <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#C6A15B] font-light">Your Story</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-xl">
              Discover the beauty of Pure 925 Silver and timeless custom jewellery, thoughtfully designed for every special moment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleExplore}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300 rounded shadow-md hover:shadow-lg"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] bg-white border border-[#C6A15B]/60 hover:bg-[#F8F5EF] hover:border-[#171717] transition-all duration-300 rounded shadow-2xs"
              >
                DISCOVER OUR STORY
              </button>
            </div>

            {/* Subtle Brand Pillars below CTAs */}
            <div className="pt-6 border-t border-[#E4D1A3]/40 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#171717]">Pure 925</p>
                <p className="text-[11px] text-[#777777] mt-0.5">Hallmark Certified</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#171717]">Custom Craft</p>
                <p className="text-[11px] text-[#777777] mt-0.5">Bespoke Silver Art</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#171717]">Dahegam</p>
                <p className="text-[11px] text-[#777777] mt-0.5">Gujarat Jewellers</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Editorial Jewellery Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative luxury hairline accent frame */}
              <div className="absolute -inset-2.5 border border-[#C6A15B]/30 rounded-2xl -z-10 translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Image Container with smooth aspect ratio and shadow */}
              <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl border border-[#E4D1A3]/60 group">
                <img
                  src="/src/assets/images/hero_silver_jewellery_1793629452235.jpg"
                  alt="Gujarat Orna pure 925 sterling silver luxury jewellery collection"
                  className="w-full h-auto object-cover object-center aspect-[4/3] sm:aspect-[16/11] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Floating luxury label on image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded border border-white/80 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-semibold block">
                      Curated Editorial
                    </span>
                    <h3 className="font-serif text-sm sm:text-base text-[#171717] font-medium">
                      The Heritage Silver Collar &amp; Drops
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-[#777777] tabular-nums">
                    925 Hallmarked
                  </span>
                </div>
              </div>

              {/* Floating circular seal */}
              <div className="hidden sm:flex absolute -top-4 -right-4 w-20 h-20 bg-[#171717] text-[#E4D1A3] rounded-full items-center justify-center flex-col text-center shadow-xl border border-[#C6A15B] z-10 p-2">
                <Sparkles className="w-4 h-4 text-[#C6A15B] mb-0.5" />
                <span className="text-[9px] uppercase tracking-widest leading-tight font-bold">
                  925 PURE SILVER
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
