import React from 'react';
import { ArrowRight, Award, Compass, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const BrandStory: React.FC = () => {
  const { setIsStoryModalOpen } = useShop();

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E4D1A3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Craftsmanship Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#171717] shadow-xl border border-[#E4D1A3]/60 group">
              <img
                src="/src/assets/images/craftsmanship_silver_atelier_1793629453470.jpg"
                alt="Gujarat Jewellers master silversmith handcrafting pure 925 silver jewellery"
                className="w-full h-auto object-cover object-center aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle inner highlight border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

              {/* Floating quote or badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-[#171717]/90 backdrop-blur-md p-4 rounded-xl border border-[#C6A15B]/30 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#E4D1A3]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base text-[#E4D1A3] font-medium">
                      The Hand of the Silversmith
                    </h4>
                    <p className="text-xs text-white/70 font-light">
                      Every piece begins with raw silver and artistic devotion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background accent */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 border border-[#C6A15B]/20 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Brand Story */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight leading-[1.15]">
              Where Tradition Meets <br />
              <span className="italic text-[#C6A15B] font-light">Timeless Beauty</span>
            </h2>

            {/* Description matching user brief */}
            <div className="space-y-4 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              <p>
                At <strong className="font-semibold text-[#171717]">Gujarat Orna by Gujarat Jewellers</strong>, we celebrate the beauty of Pure 925 Silver and the art of timeless jewellery design.
              </p>
              <p>
                From elegant everyday essentials to beautiful custom creations, discover jewellery that reflects your unique style and personality.
              </p>
            </div>

            {/* Highlighted Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F8F5EF] rounded-lg border border-[#E4D1A3]/40">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Award className="w-4 h-4 text-[#C6A15B]" />
                  <span className="font-serif text-base text-[#171717] font-medium">Authentic 925 Silver</span>
                </div>
                <p className="text-xs text-[#777777]">
                  Hallmarked sterling silver purity with luminous finishing that endures.
                </p>
              </div>

              <div className="p-4 bg-[#F8F5EF] rounded-lg border border-[#E4D1A3]/40">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Compass className="w-4 h-4 text-[#C6A15B]" />
                  <span className="font-serif text-base text-[#171717] font-medium">Dahegam Atelier</span>
                </div>
                <p className="text-xs text-[#777777]">
                  Located opposite Taluka Seva Sadan, welcoming patrons with warmth.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsStoryModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300 rounded shadow-sm hover:shadow"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
