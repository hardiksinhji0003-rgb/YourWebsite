import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, MessageSquareHeart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const iconList = [Shield, Sparkles, Clock, MessageSquareHeart];

  return (
    <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
      {/* Decorative luxury radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading with Framer Motion entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            {t.whyChooseUs.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
            {t.whyChooseUs.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3 origin-center"
          />
          <p className="text-[#AAAAAA] text-base font-light">
            {t.whyChooseUs.subtitle}
          </p>
        </motion.div>

        {/* 4 Feature Blocks with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyChooseUs.features.map((feat, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 rounded-xl bg-[#202020]/80 border border-[#C6A15B]/20 hover:border-[#C6A15B]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-lg bg-[#171717] border border-[#C6A15B]/40 flex items-center justify-center mb-6 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B]/10 transition-colors">
                    <Icon className="w-6 h-6 text-[#C6A15B] transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title with clean unboxed numbering */}
                  <div className="text-[11px] font-mono text-[#E4D1A3]/60 mb-1 tabular-nums">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3 group-hover:text-[#E4D1A3] transition-colors">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#AAAAAA] leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="w-8 h-[1px] bg-[#C6A15B]/40 mt-6 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
