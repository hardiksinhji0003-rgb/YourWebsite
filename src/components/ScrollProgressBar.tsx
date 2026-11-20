import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const next = Math.min(100, Math.max(0, Math.round(latest * 100)));
      setProgressPercent((prev) => (prev === next ? prev : next));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      role="progressbar"
      aria-label="Page reading and scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progressPercent}
      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E4D1A3]/25 pointer-events-none overflow-hidden"
    >
      <motion.div
        style={{
          scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
        }}
        className="h-full w-full origin-left bg-gradient-to-r from-[#B38F46] via-[#C6A15B] to-[#E4D1A3] shadow-[0_0_8px_rgba(198,161,91,0.5)]"
      />
    </div>
  );
};
