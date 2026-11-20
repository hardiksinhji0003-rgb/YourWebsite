import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/collections';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { ProductCategory } from '../types';

export const Collections: React.FC = () => {
  const { setSelectedCategory, setIsCustomModalOpen } = useShop();
  const { t, getLocalizedCollection } = useLanguage();

  const handleSelectCollection = (catKey: ProductCategory) => {
    if (catKey === 'Custom Jewellery') {
      setIsCustomModalOpen(true);
      return;
    }
    setSelectedCategory(catKey);
    const catalogEl = document.getElementById('products');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#FFFFFF] dark:bg-[#161616] border-y border-[#E4D1A3]/30 dark:border-[#C6A15B]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle with Framer Motion entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            {t.collections.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] dark:text-[#F5EFE6] font-normal tracking-tight">
            {t.collections.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3 origin-center"
          />
          <p className="text-[#777777] dark:text-[#A8A298] text-base sm:text-lg font-light">
            {t.collections.subtitle}
          </p>
        </motion.div>

        {/* 6 Premium Collection Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS_DATA.map((col, index) => {
            const locCol = getLocalizedCollection(col);
            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <div
                  onClick={() => handleSelectCollection(col.categoryKey)}
                  className="group cursor-pointer bg-[#F8F5EF] dark:bg-[#1E1D1B] rounded-xl overflow-hidden border border-[#E4D1A3]/50 dark:border-[#C6A15B]/30 shadow-xs flex flex-col justify-between h-full w-full luxury-card-lift transition-colors duration-300"
                >
                  {/* Image Frame with Aspect Ratio */}
                  <div className={`relative overflow-hidden aspect-[4/3] ${col.imageBg || 'bg-[#EFECE5] dark:bg-[#24221F]'}`}>
                    <img
                      src={col.image}
                      alt={locCol.title}
                      className={`w-full h-full ${col.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'} ${col.imagePosition || 'object-center'} transition-transform duration-700 ease-out group-hover:scale-105`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle scrim overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Top Corner Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-white/90 dark:bg-[#171717]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#171717] dark:text-[#E4D1A3] border border-transparent dark:border-[#C6A15B]/30 tracking-wider uppercase shadow-2xs">
                      {col.itemCount} {t.collections.designsCount}
                    </div>
                  </div>

                  {/* Card Meta & Action */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-serif text-2xl text-[#171717] dark:text-[#F5EFE6] group-hover:text-[#C6A15B] transition-colors mb-1.5 font-medium">
                        {locCol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A8A298] line-clamp-2 leading-relaxed font-light">
                        {locCol.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E4D1A3]/40 dark:border-[#C6A15B]/25 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#171717] dark:text-[#E4D1A3] group-hover:text-[#C6A15B] transition-colors inline-flex items-center gap-1.5">
                        {t.collections.exploreBtn}
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="text-[11px] text-[#777777] dark:text-[#A8A298] font-serif italic">
                        {t.collections.silverBadge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
