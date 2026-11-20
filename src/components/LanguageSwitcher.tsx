import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_LANGUAGES, Language } from '../i18n';
import { useShop } from '../context/ShopContext';

interface LanguageSwitcherProps {
  className?: string;
  isMobileDrawer?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  isMobileDrawer = false,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { showToast } = useShop();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code: Language) => {
    if (code !== language) {
      setLanguage(code);
      const toastText =
        code === 'gu'
          ? 'ભાષા ગુજરાતીમાં બદલાઈ ગઈ છે'
          : code === 'hi'
          ? 'भाषा हिन्दी में बदल दी गई है'
          : 'Language changed to English';
      showToast(toastText);
    }
    setIsOpen(false);
  };

  const currentOption = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  // Mobile Drawer view: clean segmented bar or expandable list
  if (isMobileDrawer) {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777777] dark:text-[#A8A298] font-semibold">
          <Globe className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Select Language / ભાષા</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-white dark:bg-[#1E1D1A] rounded-lg border border-[#E4D1A3] dark:border-[#C6A15B]/40">
          {SUPPORTED_LANGUAGES.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelectLanguage(opt.code)}
                className={`py-2 px-1 text-xs font-medium rounded transition-all text-center flex flex-col items-center justify-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#171717] dark:bg-[#C6A15B] text-[#E4D1A3] dark:text-[#171717] shadow-xs'
                    : 'text-[#202020] dark:text-[#E8E2D6] hover:bg-[#F8F5EF] dark:hover:bg-[#2A2825]'
                }`}
              >
                <span className="font-medium text-xs">{opt.nativeName}</span>
                <span className={`text-[10px] ${isSelected ? 'text-[#C6A15B] dark:text-[#171717]/80' : 'text-[#888888] dark:text-[#A8A298]'}`}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Header Dropdown view
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-0.5 min-[390px]:gap-1 sm:gap-1.5 px-1.5 min-[390px]:px-2 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-[#202020] dark:text-[#E8E2D6] hover:text-[#C6A15B] bg-white/75 dark:bg-[#22211F] hover:bg-white dark:hover:bg-[#2B2926] border border-[#E4D1A3] dark:border-[#C6A15B]/45 hover:border-[#C6A15B] rounded-full transition-all shadow-2xs group focus:outline-none cursor-pointer shrink-0"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Language"
      >
        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform duration-300 shrink-0" />
        <span className="sm:hidden font-semibold tracking-wide">{currentOption.shortLabel}</span>
        <span className="hidden sm:inline font-semibold tracking-wide">{currentOption.nativeName}</span>
        <ChevronDown
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#777777] dark:text-[#A8A298] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#C6A15B]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl bg-white dark:bg-[#1C1B19] border border-[#E4D1A3] dark:border-[#C6A15B]/45 z-50 py-1.5 animate-fadeIn focus:outline-none">
          <div className="px-3 py-1.5 border-b border-[#E4D1A3]/40 dark:border-[#C6A15B]/25 text-[10px] uppercase tracking-wider text-[#777777] dark:text-[#A8A298] font-semibold">
            Choose Language / ભાષા
          </div>
          {SUPPORTED_LANGUAGES.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelectLanguage(opt.code)}
                className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#F8F5EF] dark:bg-[#282622] text-[#171717] dark:text-[#E4D1A3] font-semibold'
                    : 'text-[#444444] dark:text-[#CFC8BC] hover:bg-[#F8F5EF]/80 dark:hover:bg-[#24221F] hover:text-[#C6A15B]'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{opt.nativeName}</span>
                  <span className="text-[10px] text-[#777777] dark:text-[#9A948A]">{opt.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#C6A15B] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
