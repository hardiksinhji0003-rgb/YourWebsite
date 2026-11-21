import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Menu, X, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessConfig';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { ScrollProgressBar } from './ScrollProgressBar';
import { ProductCategory } from '../types';

const BRAND_LOGO_URL = '/assets/aistudio/image_81f67cfc.png';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlistCount,
    setIsCartOpen,
    setIsWishlistOpen,
    setSelectedCategory,
  } = useShop();

  const { t, getLocalizedCategory } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.collections, href: '#collections' },
    { name: t.nav.bestSellers, href: '#products' },
    { name: t.nav.customDesign, href: '#custom-jewellery' },
    { name: t.nav.aboutUs, href: '#about-us' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#products') {
      setSelectedCategory('All');
    }
  };

  const sampleCategories: ProductCategory[] = [
    'Silver Necklaces',
    'Silver Pendants',
    'Silver Rings',
    'Silver Chains',
  ];

  return (
    <>
      {/* Top Luxury Micro Announcement Ribbon */}
      <div className="w-full bg-[#1B0409] dark:bg-[#130306] text-[#E4D1A3] py-1.5 sm:py-2 px-3 sm:px-4 text-center text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-[0.18em] uppercase border-b border-[#C6A15B]/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          <span className="hidden lg:inline-flex items-center gap-1.5 text-[#F4E9D7]/80 tracking-[0.14em] shrink-0">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C6A15B]" />
            {t.announcement.location}
          </span>
          <span className="mx-auto font-medium flex items-center justify-center gap-1.5 sm:gap-2 text-[#E4D1A3] leading-snug">
            <Sparkles className="w-3 h-3 text-[#C6A15B] hidden sm:inline shrink-0" />
            <span>{t.announcement.tagline}</span>
          </span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-[#E4D1A3] hover:text-white transition-colors font-medium tracking-[0.14em] shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.announcement.directWhatsApp}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Luxury Header (Distinct Royal Velvet Burgundy & Champagne Gold) */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-r from-[#24060D]/98 via-[#3E0C17]/98 to-[#24060D]/98 dark:from-[#180408]/98 dark:via-[#2B0710]/98 dark:to-[#180408]/98 backdrop-blur-lg shadow-[0_12px_36px_rgba(24,4,8,0.42)] border-b border-[#E4D1A3]/60 py-2.5 sm:py-3'
            : 'bg-gradient-to-r from-[#2D0810]/96 via-[#4A101C]/96 to-[#2D0810]/96 dark:from-[#1E050A]/96 dark:via-[#340913]/96 dark:to-[#1E050A]/96 backdrop-blur-md shadow-[0_8px_28px_rgba(32,5,11,0.25)] border-b border-[#C6A15B]/50 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-4">
            
            {/* Left: Uploaded Logo Medallion + Brand Wordmark */}
            <a href="#home" className="flex items-center gap-1.5 min-[390px]:gap-2 sm:gap-3 group min-w-0 shrink-0">
              <div className="relative w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-full overflow-hidden ring-2 ring-[#E4D1A3]/90 ring-offset-1 sm:ring-offset-2 ring-offset-[#3B0C16] dark:ring-offset-[#26070E] bg-[#1B0409] shadow-md group-hover:ring-[#E4D1A3] group-hover:scale-[1.04] transition-all duration-300 shrink-0">
                <img
                  src={BRAND_LOGO_URL}
                  alt="Gujarat Orna Official Crest Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Subtle Gold Hairline Divider */}
              <div className="hidden sm:block h-8 w-[1px] bg-gradient-to-b from-transparent via-[#E4D1A3]/55 to-transparent shrink-0" />

              <div className="flex flex-col items-start">
                <span className="font-serif text-[13px] min-[390px]:text-[15px] sm:text-xl xl:text-[22px] tracking-[0.06em] min-[390px]:tracking-[0.1em] sm:tracking-[0.16em] font-semibold text-[#FAF4E8] group-hover:text-[#E4D1A3] transition-colors leading-none whitespace-nowrap">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="text-[7px] min-[390px]:text-[8px] sm:text-[10px] tracking-[0.1em] min-[390px]:tracking-[0.15em] sm:tracking-[0.24em] text-[#E4D1A3] uppercase font-sans mt-0.5 sm:mt-1 font-medium whitespace-nowrap">
                  {BUSINESS_CONFIG.parentBrand}
                </span>
              </div>
            </a>

            {/* Center Navigation (PC / Desktop xl+) */}
            <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs 2xl:text-[13px] font-medium tracking-[0.05em] uppercase text-[#F6ECE0] hover:text-[#E4D1A3] transition-colors relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#E4D1A3] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons, Theme Switch, Language Selector & Main Menu */}
            <div className="flex items-center gap-0.5 min-[390px]:gap-1 sm:gap-1.5 xl:gap-2 shrink-0">
              {/* Theme Switch Button (Dark / Light) */}
              <ThemeToggle />

              {/* Language Selector Dropdown */}
              <LanguageSwitcher />

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-1.5 sm:p-2 text-[#FAF4E8] hover:text-[#E4D1A3] hover:bg-white/10 rounded-full transition-colors cursor-pointer shrink-0"
                aria-label={t.nav.wishlistLabel}
                title={t.nav.wishlistLabel}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:top-0.5 sm:right-0.5 flex items-center justify-center min-w-[15px] h-[15px] sm:min-w-[17px] sm:h-[17px] px-1 text-[9px] sm:text-[10px] font-bold text-[#24060D] bg-[#FAF4E8] border border-[#C6A15B] rounded-full tabular-nums shadow-2xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 sm:p-2 text-[#FAF4E8] hover:text-[#E4D1A3] hover:bg-white/10 rounded-full transition-colors cursor-pointer shrink-0"
                aria-label={t.nav.bagLabel}
                title={t.nav.bagLabel}
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:top-0.5 sm:right-0.5 flex items-center justify-center min-w-[15px] h-[15px] sm:min-w-[17px] sm:h-[17px] px-1 text-[9px] sm:text-[10px] font-bold text-[#24060D] bg-[#E4D1A3] rounded-full tabular-nums border border-[#FAF4E8]/80 shadow-2xs">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile & Tablet Main Menu Trigger (Right Side, visible below xl) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-tablet-menu-drawer"
                className="xl:hidden inline-flex items-center gap-1.5 p-1.5 sm:p-2 md:px-3 md:py-1.5 rounded-full border border-[#C6A15B]/60 bg-[#1E050A]/55 text-[#FAF4E8] hover:text-[#E4D1A3] hover:border-[#E4D1A3] hover:bg-[#5E1624]/80 transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4D1A3] cursor-pointer shrink-0"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                )}
                <span className="hidden md:inline text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {t.nav.menu}
                </span>
              </button>

              {/* WhatsApp Quick Action (PC / Desktop xl+) */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 2xl:px-4 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#24060D] bg-gradient-to-r from-[#E4D1A3] via-[#D8BC7E] to-[#C6A15B] hover:from-[#FAF4E8] hover:to-[#E4D1A3] transition-all rounded-full shadow-md hover:shadow-lg border border-[#FAF4E8]/40 shrink-0"
                title="Direct WhatsApp Support"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{t.nav.enquire}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reading & Scroll Progress Indicator */}
        <ScrollProgressBar />
      </header>

      {/* Mobile & Tablet Slide-Out Main Menu Drawer (Right-aligned) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-tablet-menu-drawer"
          className="fixed inset-0 z-50 xl:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Main Menu"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#171717]/65 dark:bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-[86%] max-w-xs sm:max-w-sm bg-[#F8F5EF] dark:bg-[#161513] h-full shadow-2xl z-10 flex flex-col justify-between p-5 sm:p-6 overflow-y-auto border-l border-[#E4D1A3]/50 dark:border-[#C6A15B]/30 transition-colors duration-300 animate-slideIn">
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#E4D1A3] dark:border-[#C6A15B]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#C6A15B]/80 bg-[#171717] shrink-0">
                    <img
                      src={BRAND_LOGO_URL}
                      alt="Gujarat Orna Crest"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-lg tracking-[0.15em] font-semibold text-[#171717] dark:text-[#F5EFE6] block leading-none">
                      {BUSINESS_CONFIG.brandName}
                    </span>
                    <p className="text-[9px] tracking-[0.2em] text-[#8A6D3B] dark:text-[#C6A15B] uppercase mt-1">
                      {BUSINESS_CONFIG.parentBrand}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#202020] dark:text-[#E8E2D6] hover:text-[#C6A15B] bg-white/75 dark:bg-[#22211F] border border-[#E4D1A3]/60 dark:border-[#C6A15B]/35 rounded-full transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* In-drawer Language & Theme Switchers */}
              <div className="pt-4 pb-4 border-b border-[#E4D1A3]/30 dark:border-[#C6A15B]/25 space-y-3">
                <LanguageSwitcher isMobileDrawer />
                <ThemeToggle isMobileDrawer />
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5 mt-5" aria-label="Mobile and tablet navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium tracking-wide text-[#202020] dark:text-[#F5EFE6] hover:text-[#C6A15B] hover:bg-white/80 dark:hover:bg-[#22211F] border border-transparent hover:border-[#E4D1A3]/50 dark:hover:border-[#C6A15B]/30 transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C6A15B] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </nav>

              {/* Quick Category Jump */}
              <div className="mt-6 pt-5 border-t border-[#E4D1A3]/30 dark:border-[#C6A15B]/25">
                <span className="text-[11px] uppercase tracking-widest text-[#777777] dark:text-[#A8A298] font-semibold block mb-3">
                  {t.nav.silverCategories}
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleCategories.map((cat) => (
                    <a
                      key={cat}
                      href="#products"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-xs bg-white dark:bg-[#22211F] text-[#202020] dark:text-[#E8E2D6] border border-[#E4D1A3] dark:border-[#C6A15B]/35 px-3 py-1.5 rounded-full hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
                    >
                      {getLocalizedCategory(cat)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Footer Area */}
            <div className="pt-6 mt-6 border-t border-[#E4D1A3] dark:border-[#C6A15B]/30 space-y-3.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#171717] dark:bg-[#C6A15B] text-[#E4D1A3] dark:text-[#171717] rounded-lg font-semibold text-xs tracking-wider uppercase hover:bg-black dark:hover:bg-[#E4D1A3] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A15B] dark:text-[#171717]" />
                <span>{t.nav.chatOnWhatsApp}</span>
              </a>

              <div className="text-center text-xs text-[#777777] dark:text-[#A8A298] whitespace-pre-line leading-relaxed">
                {t.nav.dahegamLocation}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
