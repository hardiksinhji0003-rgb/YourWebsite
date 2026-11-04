import React, { useState } from 'react';
import { Instagram, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessConfig';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#171717] text-[#AAAAAA] pt-16 pb-12 border-t border-[#C6A15B]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#333333]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] font-medium text-white block">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-xs tracking-[0.25em] text-[#C6A15B] uppercase block mt-0.5">
                {BUSINESS_CONFIG.parentBrand}
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#E4D1A3] font-light">
              &ldquo;{BUSINESS_CONFIG.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-sm font-light">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#202020] border border-[#C6A15B]/30 flex items-center justify-center text-[#E4D1A3] hover:text-[#171717] hover:bg-[#C6A15B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#202020] border border-[#C6A15B]/30 flex items-center justify-center text-[#E4D1A3] hover:text-[#171717] hover:bg-[#C6A15B] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#E4D1A3] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#E4D1A3] transition-colors">
                  {t.nav.collections}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E4D1A3] transition-colors">
                  {t.nav.bestSellers}
                </a>
              </li>
              <li>
                <a href="#custom-jewellery" className="hover:text-[#E4D1A3] transition-colors">
                  {t.nav.customDesign}
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-[#E4D1A3] transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E4D1A3] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Boutique Visit & Guarantees (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              {t.footer.addressTitle}
            </h4>

            <div className="text-xs sm:text-sm text-[#888888] space-y-1 leading-relaxed">
              <p className="text-white font-medium">Gujarat Orna by Gujarat Jewellers</p>
              <p>Opposite Taluka Seva Sadan,</p>
              <p>Dahegam, Gujarat, India.</p>
              <a
                href={BUSINESS_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C6A15B] hover:underline pt-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>
            </div>

            <div className="pt-3 border-t border-[#333333] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#E4D1A3]">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>{t.footer.certifiedGuarantee}</span>
              </div>
              <p className="text-[#777777] text-[11px]">
                {t.footer.showcaseNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>{t.footer.copyright}</p>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#E4D1A3] transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#E4D1A3] transition-colors cursor-pointer"
            >
              {t.footer.termsConditions}
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy / Terms Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FFFFFF] text-[#202020] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 className="font-serif text-2xl text-[#171717] mb-2 font-medium">
              {activeModal === 'privacy' ? t.footer.privacyTitle : t.footer.termsTitle}
            </h3>
            <div className="w-12 h-[1.5px] bg-[#C6A15B] mb-4" />

            <div className="text-xs sm:text-sm text-[#555555] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {activeModal === 'privacy' ? (
                <>
                  <p>{t.footer.privacyText1}</p>
                  <p>{t.footer.privacyText2}</p>
                </>
              ) : (
                <>
                  <p>{t.footer.termsText1}</p>
                  <p>{t.footer.termsText2}</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E4D1A3] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#171717] text-white rounded hover:bg-[#C6A15B] hover:text-[#171717] transition-colors cursor-pointer"
              >
                {t.footer.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
