import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';

interface ThemeToggleProps {
  isMobileDrawer?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isMobileDrawer = false }) => {
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useShop();
  const { t } = useLanguage();

  const handleToggle = () => {
    const nextIsDark = !isDark;
    toggleTheme();
    showToast(nextIsDark ? t.toast.themeDark : t.toast.themeLight);
  };

  if (isMobileDrawer) {
    return (
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-[#E4D1A3] dark:border-[#C6A15B]/40 bg-white dark:bg-[#1E1D1A] text-[#171717] dark:text-[#F5EFE6] hover:border-[#C6A15B] transition-colors cursor-pointer"
        aria-label={isDark ? t.nav.switchToLight : t.nav.switchToDark}
      >
        <span className="text-xs font-medium tracking-wide uppercase">
          {isDark ? t.nav.darkModeLabel : t.nav.lightModeLabel}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6A15B]">
          {isDark ? (
            <>
              <Moon className="w-3.5 h-3.5" />
              <span>{t.nav.switchToLight}</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5" />
              <span>{t.nav.switchToDark}</span>
            </>
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? t.nav.switchToLight : t.nav.switchToDark}
      title={isDark ? t.nav.switchToLight : t.nav.switchToDark}
      className="relative w-7 h-7 min-[390px]:w-8 min-[390px]:h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-[#E4D1A3] dark:border-[#C6A15B]/45 bg-white/75 dark:bg-[#22211F] text-[#202020] dark:text-[#E4D1A3] hover:text-[#C6A15B] hover:border-[#C6A15B] hover:bg-white dark:hover:bg-[#2B2926] transition-all duration-300 shadow-2xs cursor-pointer overflow-hidden shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
    >
      <Sun
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A15B] transition-all duration-300 absolute ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
        }`}
      />
      <Moon
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#202020] transition-all duration-300 absolute ${
          isDark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  );
};
