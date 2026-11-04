import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Compass, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import silversmithStoryImg from '../assets/images/story_indian_silversmith_1793634668463.jpg';

export const BrandStory: React.FC = () => {
  const { setIsStoryModalOpen } = useShop();
  const { t } = useLanguage();

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E4D1A3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Craftsmanship Photography with Viewport Animation */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#171717] shadow-xl border border-[#E4D1A3]/60 group">
              <img
                src={silversmithStoryImg}
                alt="Gujarat Jewellers Indian master silversmith artisan handcrafting pure 925 silver in Dahegam workshop"
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
                      {t.brandStory.silversmithCardTitle}
                    </h4>
                    <p className="text-xs text-white/70 font-light">
                      {t.brandStory.silversmithCardDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background accent */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 border border-[#C6A15B]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right Column: Editorial Brand Story with Viewport Animation */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 text-left"
          >
            {/* Small label */}
            <div className="inline-flex items-center gap-2">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] bg-[#C6A15B]"
              />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                {t.brandStory.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight leading-[1.15]">
              {t.brandStory.titleLine1} <br />
              <span className="italic text-[#C6A15B] font-light">{t.brandStory.titleLine2}</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              <p>{t.brandStory.paragraph1}</p>
              <p>{t.brandStory.paragraph2}</p>
            </div>

            {/* Highlighted Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F8F5EF] rounded-lg border border-[#E4D1A3]/40">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Award className="w-4 h-4 text-[#C6A15B]" />
                  <span className="font-serif text-base text-[#171717] font-medium">{t.brandStory.feature1Title}</span>
                </div>
                <p className="text-xs text-[#777777]">
                  {t.brandStory.feature1Desc}
                </p>
              </div>

              <div className="p-4 bg-[#F8F5EF] rounded-lg border border-[#E4D1A3]/40">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Compass className="w-4 h-4 text-[#C6A15B]" />
                  <span className="font-serif text-base text-[#171717] font-medium">{t.brandStory.feature2Title}</span>
                </div>
                <p className="text-xs text-[#777777]">
                  {t.brandStory.feature2Desc}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsStoryModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#C6A15B] hover:text-[#171717] transition-all duration-300 rounded shadow-sm hover:shadow cursor-pointer"
              >
                <span>{t.brandStory.knowMoreBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
