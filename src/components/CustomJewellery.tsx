import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, CheckCircle2 } from 'lucide-react';
import { getCustomJewelleryWhatsAppUrl } from '../data/businessConfig';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import customJewelleryImg from '../assets/images/custom_silver_jewellery_1793629453356.jpg';

export const CustomJewellery: React.FC = () => {
  const { setIsCustomModalOpen } = useShop();
  const { t } = useLanguage();
  const directWhatsAppUrl = getCustomJewelleryWhatsAppUrl();

  return (
    <section id="custom-jewellery" className="py-16 sm:py-24 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E4D1A3] p-8 sm:p-12 lg:p-16 shadow-lg overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6 sm:space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1px] bg-[#C6A15B]"
                />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                  {t.customJewellery.badge}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
                {t.customJewellery.titleLine1} <br />
                <span className="italic text-[#C6A15B] font-light">{t.customJewellery.titleLine2}</span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
                {t.customJewellery.description}
              </p>

              {/* 3 Step Process */}
              <div className="space-y-3 pt-2">
                {t.customJewellery.steps.map((step) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#171717]">{step.title}</h4>
                      <p className="text-xs text-[#777777]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                {/* Primary WhatsApp Direct button */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] bg-gradient-to-r from-[#E4D1A3] to-[#C6A15B] hover:from-[#C6A15B] hover:to-[#E4D1A3] transition-all rounded shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.customJewellery.enquiryBtn}</span>
                </a>

                {/* Interactive Modal Button */}
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] bg-white border border-[#C6A15B] hover:bg-[#F8F5EF] transition-colors rounded cursor-pointer"
                >
                  <PenTool className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{t.customJewellery.specsBtn}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#777777] italic">
                {t.customJewellery.whatsAppFootnote}
              </p>
            </motion.div>

            {/* Right Photography with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#E4D1A3] group">
                <img
                  src={customJewelleryImg}
                  alt="Custom 925 silver jewellery design sketches and handcrafted medallion pendant"
                  className="w-full h-auto object-cover object-center aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded border border-white/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-semibold block">
                        {t.customJewellery.commissionTag}
                      </span>
                      <h4 className="font-serif text-base text-[#171717] font-medium">
                        {t.customJewellery.commissionTitle}
                      </h4>
                    </div>
                    <span className="text-xs text-[#777777] font-mono">
                      {t.customJewellery.commissionCustom}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
