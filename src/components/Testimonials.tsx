import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SAMPLE_TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === SAMPLE_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#E4D1A3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            CLIENT EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
            Words From Our Customers
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />

          {/* Explicit demo badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50/90 border border-amber-200/60 rounded text-[11px] text-amber-900/80 mt-2">
            <Info className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Illustrative Demonstration Placeholders: Prepared for official website preview</span>
          </div>
        </div>

        {/* Desktop 3-Card Grid / Mobile Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SAMPLE_TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-xl p-7 border border-[#E4D1A3]/60 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between ${
                idx === currentIndex ? 'block' : 'hidden md:flex'
              }`}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E4D1A3]" />
                </div>

                {/* Comment */}
                <p className="font-serif text-base sm:text-lg text-[#333333] italic leading-relaxed mb-6 font-normal">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author & Piece */}
              <div className="pt-4 border-t border-[#E4D1A3]/40">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#171717]">{t.name}</h4>
                    <p className="text-xs text-[#777777]">{t.location}</p>
                  </div>
                  <span className="text-[10px] text-[#C6A15B] uppercase tracking-wider font-medium">
                    Verified Silver
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-[#999999] bg-[#F8F5EF] px-2.5 py-1 rounded">
                  {t.itemPurchased} · <span className="italic">{t.isDemoNotice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={prev}
            className="p-2 bg-white border border-[#E4D1A3] rounded-full text-[#171717]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs text-[#777777] font-mono">
            {currentIndex + 1} / {SAMPLE_TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={next}
            className="p-2 bg-white border border-[#E4D1A3] rounded-full text-[#171717]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
