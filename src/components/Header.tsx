import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessConfig';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlistCount,
    setIsCartOpen,
    setIsWishlistOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Best Sellers', href: '#products' },
    { name: 'Custom Design', href: '#custom-jewellery' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#products') {
      setSelectedCategory('All');
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#171717] text-[#E4D1A3] py-2 px-4 text-center text-xs tracking-widest uppercase border-b border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline text-white/70">Dahegam, Gujarat Boutique</span>
          <span className="mx-auto font-medium">Pure 925 Silver Jewellery · Hallmark Certified · Bespoke Craft</span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#C6A15B] hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E4D1A3]/40 py-3.5'
            : 'bg-[#F8F5EF] lg:bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2 text-[#202020] hover:text-[#C6A15B] transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#202020] hover:text-[#C6A15B] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Left: Brand Identity */}
            <a href="#home" className="flex flex-col items-start group">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-medium text-[#171717] group-hover:text-[#C6A15B] transition-colors">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#777777] uppercase font-sans -mt-1 font-normal">
                {BUSINESS_CONFIG.parentBrand}
              </span>
            </a>

            {/* Center Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium tracking-wide text-[#202020] hover:text-[#C6A15B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C6A15B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Desktop Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden lg:flex p-2 text-[#202020] hover:text-[#C6A15B] transition-colors"
                aria-label="Search Jewellery"
                title="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-[#202020] hover:text-[#C6A15B] transition-colors"
                aria-label="View Wishlist"
                title="Your Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-semibold text-[#171717] bg-[#E4D1A3] border border-[#C6A15B] rounded-full tabular-nums">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#202020] hover:text-[#C6A15B] transition-colors"
                aria-label="View Shopping Bag"
                title="Your Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-[#171717] rounded-full tabular-nums border border-[#C6A15B]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Action (Desktop) */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#171717] bg-gradient-to-r from-[#E4D1A3] to-[#C6A15B] hover:from-[#C6A15B] hover:to-[#E4D1A3] transition-all rounded shadow-sm hover:shadow"
                title="Direct WhatsApp Support"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Enquire</span>
              </a>
            </div>
          </div>

          {/* Collapsible Search Bar */}
          {isSearchOpen && (
            <div className="pt-3 pb-2 mt-2 border-t border-[#E4D1A3]/30 animate-fadeIn">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search 925 silver necklaces, rings, pendants, chains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#C6A15B]/50 rounded focus:outline-none focus:ring-1 focus:ring-[#C6A15B] text-[#202020] placeholder-[#777777]"
                  autoFocus
                />
                <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-3.5" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-xs text-[#777777] hover:text-[#171717]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#171717]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-xs bg-[#F8F5EF] h-full shadow-2xl z-10 flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E4D1A3]">
                <div>
                  <span className="font-serif text-xl tracking-[0.16em] font-medium text-[#171717]">
                    {BUSINESS_CONFIG.brandName}
                  </span>
                  <p className="text-[10px] tracking-widest text-[#777777] uppercase">
                    {BUSINESS_CONFIG.parentBrand}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#202020] hover:text-[#C6A15B]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-5 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-base font-medium tracking-wide text-[#202020] hover:text-[#C6A15B] transition-colors py-1 border-b border-[#E4D1A3]/30"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Quick Category Jump */}
              <div className="mt-8">
                <span className="text-xs uppercase tracking-widest text-[#777777] font-semibold block mb-3">
                  Silver Categories
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Silver Necklaces', 'Silver Pendants', 'Silver Rings', 'Silver Chains'].map((cat) => (
                    <a
                      key={cat}
                      href="#products"
                      onClick={() => {
                        setSelectedCategory(cat as any);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-xs bg-white text-[#202020] border border-[#E4D1A3] px-3 py-1.5 rounded hover:border-[#C6A15B]"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-[#E4D1A3] space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#171717] text-[#E4D1A3] rounded font-medium text-xs tracking-wider uppercase hover:bg-black transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A15B]" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center text-xs text-[#777777]">
                <p>Opposite Taluka Seva Sadan</p>
                <p>Dahegam, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
