import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t.testimonials.list;

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#E4D1A3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            {t.testimonials.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
            {t.testimonials.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3 origin-center"
          />

          {/* Explicit demo badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50/90 border border-amber-200/60 rounded text-[11px] text-amber-900/80 mt-2">
            <Info className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.testimonials.demoNotice}</span>
          </div>
        </motion.div>

        {/* Desktop 3-Card Grid / Mobile Carousel with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bg-white rounded-xl p-7 border border-[#E4D1A3]/60 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between ${
                idx === currentIndex ? 'block' : 'hidden md:flex'
              }`}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E4D1A3]" />
                </div>

                {/* Comment */}
                <p className="font-serif text-base sm:text-lg text-[#333333] italic leading-relaxed mb-6 font-normal">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author & Piece */}
              <div className="pt-4 border-t border-[#E4D1A3]/40">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#171717]">{item.name}</h4>
                    <p className="text-xs text-[#777777]">{item.location}</p>
                  </div>
                  <span className="text-[10px] text-[#C6A15B] uppercase tracking-wider font-medium">
                    {t.testimonials.verifiedSilver}
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-[#999999] bg-[#F8F5EF] px-2.5 py-1 rounded">
                  {item.itemPurchased}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={prev}
            className="p-2 bg-white border border-[#E4D1A3] rounded-full text-[#171717] cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs text-[#777777] font-mono">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={next}
            className="p-2 bg-white border border-[#E4D1A3] rounded-full text-[#171717] cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
