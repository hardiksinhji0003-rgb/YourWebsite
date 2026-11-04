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
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777777] font-semibold">
          <Globe className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Select Language / ભાષા</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-lg border border-[#E4D1A3]">
          {SUPPORTED_LANGUAGES.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelectLanguage(opt.code)}
                className={`py-2 px-1 text-xs font-medium rounded transition-all text-center flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-[#171717] text-[#E4D1A3] shadow-xs'
                    : 'text-[#202020] hover:bg-[#F8F5EF]'
                }`}
              >
                <span className="font-medium text-xs">{opt.nativeName}</span>
                <span className={`text-[10px] ${isSelected ? 'text-[#C6A15B]' : 'text-[#888888]'}`}>
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
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#202020] hover:text-[#C6A15B] bg-white/70 hover:bg-white border border-[#E4D1A3] hover:border-[#C6A15B] rounded transition-all shadow-2xs group focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-semibold tracking-wide">{currentOption.nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 text-[#777777] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#C6A15B]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-[#E4D1A3] z-50 py-1.5 animate-fadeIn focus:outline-none">
          <div className="px-3 py-1.5 border-b border-[#E4D1A3]/40 text-[10px] uppercase tracking-wider text-[#777777] font-semibold">
            Choose Language / ભાષા
          </div>
          {SUPPORTED_LANGUAGES.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelectLanguage(opt.code)}
                className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-[#F8F5EF] text-[#171717] font-semibold'
                    : 'text-[#444444] hover:bg-[#F8F5EF]/80 hover:text-[#C6A15B]'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{opt.nativeName}</span>
                  <span className="text-[10px] text-[#777777]">{opt.label}</span>
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
