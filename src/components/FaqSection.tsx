import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const items = t.faq.items;

  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const allExpanded = openIndices.length === items.length;

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndices([]);
    } else {
      setOpenIndices(items.map((_, idx) => idx));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = items.length;
    if (total === 0) return;

    let nextIndex: number | null = null;
    switch (e.key) {
      case 'ArrowDown':
        nextIndex = (index + 1) % total;
        break;
      case 'ArrowUp':
        nextIndex = (index - 1 + total) % total;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = total - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    triggerRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-[#F8F5EF] dark:bg-[#121212] border-b border-[#E4D1A3]/30 dark:border-[#C6A15B]/20 scroll-mt-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            {t.faq.badge}
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] dark:text-[#F5EFE6] font-normal tracking-tight"
          >
            {t.faq.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3 origin-center"
          />
          <p className="text-[#555555] dark:text-[#CFC8BC] text-base sm:text-lg font-light leading-relaxed">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* Subtle Multi-Open Toggle Control */}
        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={toggleAll}
            className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8A6D3B] dark:text-[#E4D1A3] hover:text-[#171717] dark:hover:text-white transition-colors py-1 px-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] cursor-pointer"
          >
            {allExpanded ? t.faq.collapseAll : t.faq.expandAll}
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.06, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-xl bg-[#FFFFFF] dark:bg-[#1E1D1B] border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#C6A15B] shadow-[0_14px_30px_-12px_rgba(23,23,23,0.1),0_0_20px_-4px_rgba(198,161,91,0.18)] dark:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.55),0_0_22px_-4px_rgba(198,161,91,0.25)]'
                    : 'border-[#E4D1A3]/60 dark:border-[#C6A15B]/25 shadow-2xs hover:border-[#C6A15B]/75'
                }`}
              >
                <h3>
                  <button
                    ref={(el) => {
                      triggerRefs.current[index] = el;
                    }}
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F5EF] dark:focus-visible:ring-offset-[#121212] cursor-pointer group"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 pr-2">
                      <span
                        aria-hidden="true"
                        className={`text-xs font-mono tracking-wider pt-1 sm:pt-0 shrink-0 tabular-nums transition-colors duration-300 ${
                          isOpen ? 'text-[#C6A15B] font-semibold' : 'text-[#999999] dark:text-[#A8A298] group-hover:text-[#C6A15B]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`font-serif text-lg sm:text-xl leading-snug font-medium transition-colors duration-300 ${
                          isOpen ? 'text-[#171717] dark:text-[#F5EFE6]' : 'text-[#202020] dark:text-[#E5DEC9] group-hover:text-[#C6A15B]'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Animated Plus / Minus Icon */}
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#171717] dark:bg-[#C6A15B] border-[#C6A15B] text-[#E4D1A3] dark:text-[#171717]'
                          : 'bg-[#F8F5EF] dark:bg-[#262420] border-[#E4D1A3] dark:border-[#C6A15B]/40 text-[#171717] dark:text-[#E4D1A3] group-hover:border-[#C6A15B] group-hover:text-[#C6A15B]'
                      }`}
                    >
                      <span className="relative w-3.5 h-3.5 flex items-center justify-center">
                        {/* Horizontal stroke (always visible) */}
                        <span className="absolute w-3.5 h-[1.5px] bg-current rounded-full transition-transform duration-300" />
                        {/* Vertical stroke (rotates and fades out when expanded to form minus) */}
                        <span
                          className={`absolute w-[1.5px] h-3.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                            isOpen ? 'rotate-90 scale-y-0 opacity-0' : 'rotate-0 scale-y-100 opacity-100'
                          }`}
                        />
                      </span>
                    </span>
                  </button>
                </h3>

                {/* Smooth Height & Opacity Answer Transition */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { height: 0, opacity: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.28, ease: 'easeInOut' },
                            }
                      }
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pl-12 sm:pl-[3.75rem] border-t border-[#E4D1A3]/35 dark:border-[#C6A15B]/25 pt-4">
                        <p className="text-sm sm:text-base text-[#555555] dark:text-[#CFC8BC] font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
