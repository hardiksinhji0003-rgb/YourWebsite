import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

      setProgress(ratio);
      setIsVisible(scrollTop > 320);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const size = 48;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);
  const percent = Math.round(progress * 100);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`group fixed bottom-4 right-3 sm:bottom-5 sm:right-4 left-auto z-30 w-12 h-12 rounded-full bg-[#171717]/95 dark:bg-[#22211F]/95 backdrop-blur-xs text-[#E4D1A3] hover:text-white shadow-[0_10px_28px_rgba(23,23,23,0.28)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.65)] transition-all duration-300 flex items-center justify-center focus:outline-none cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto hover:-translate-y-1'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label={`Scroll back to top (${percent}% read)`}
      title={`Back to Top · ${percent}%`}
    >
      {/* Circular Champagne Gold Reading Progress Ring */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90 pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(228, 209, 163, 0.2)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#C6A15B"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <ArrowUp className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 text-[#E4D1A3] group-hover:text-[#C6A15B]" />
    </button>
  );
};

