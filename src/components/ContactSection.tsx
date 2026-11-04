import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Instagram, Send, CheckCircle2, Navigation, AlertCircle, Clock } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessConfig';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    jewelleryInterest: 'Pure 925 Silver Jewellery',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = t.contact.errors.name;
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = t.contact.errors.phone;
    } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 8) {
      errs.phoneNumber = t.contact.errors.phoneInvalid;
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contact.errors.emailInvalid;
    }
    if (!formData.message.trim()) {
      errs.message = t.contact.errors.message;
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    }
  };

  const handleForwardToWhatsApp = () => {
    const msg = `Hello Gujarat Orna!\nMy Name: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nInterest: ${formData.jewelleryInterest}\n\nEnquiry:\n${formData.message}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E4D1A3]/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            {t.contact.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
            {t.contact.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3 origin-center"
          />
          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Boutique Information & Action Cards with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Business Card */}
            <div className="bg-[#F8F5EF] p-7 sm:p-8 rounded-xl border border-[#E4D1A3] shadow-xs">
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block mb-1">
                {t.contact.boutiqueCardTitle}
              </span>
              <h3 className="font-serif text-2xl text-[#171717] font-medium mb-1">
                {BUSINESS_CONFIG.brandName}
              </h3>
              <p className="text-xs text-[#777777] uppercase tracking-wider mb-5">
                {BUSINESS_CONFIG.parentBrand}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[#444444]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171717] block">{t.contact.addressLabel}</span>
                    <p className="text-[#666666] leading-relaxed">
                      {BUSINESS_CONFIG.location.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171717] block">{t.contact.hoursLabel}</span>
                    <p className="text-[#666666] whitespace-pre-line leading-relaxed">
                      {t.contact.hoursValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171717] block">{t.contact.instagramCardTitle}</span>
                    <a
                      href={BUSINESS_CONFIG.social.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C6A15B] hover:underline"
                    >
                      {BUSINESS_CONFIG.social.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#E4D1A3]/50 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-[#171717] text-[#171717] hover:text-[#E4D1A3] border border-[#E4D1A3] rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* In-Store Note */}
            <div className="p-4 bg-amber-50/70 border border-[#E4D1A3]/40 rounded-lg text-xs text-[#666666] leading-relaxed">
              <strong className="text-[#171717] block mb-1">Dahegam Flagship Boutique</strong>
              Opposite Taluka Seva Sadan, Dahegam, Gujarat, India.
            </div>
          </motion.div>

          {/* Right Column: Elegant Contact & Enquiry Form with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-xl border border-[#E4D1A3] shadow-sm">
              <h3 className="font-serif text-2xl text-[#171717] mb-1 font-medium">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-[#777777] mb-6">
                {t.contact.formSubtitle}
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#171717]">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                    {t.contact.successMessage}
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleForwardToWhatsApp}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] hover:bg-[#C6A15B] text-[#E4D1A3] hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{t.contact.forwardWhatsAppBtn}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        jewelleryInterest: 'Pure 925 Silver Jewellery',
                        message: '',
                      });
                    }}
                    className="text-xs text-[#777777] underline pt-2 hover:text-[#171717] cursor-pointer"
                  >
                    {t.contact.sendAnotherBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        placeholder={t.contact.phonePlaceholder}
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Jewellery Interest */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                      {t.contact.interestLabel}
                    </label>
                    <select
                      value={formData.jewelleryInterest}
                      onChange={(e) => setFormData({ ...formData, jewelleryInterest: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                    >
                      <option value="Pure 925 Silver Jewellery">{t.contact.interests.pureSilver}</option>
                      <option value="Custom Jewellery & Bespoke Design">{t.contact.interests.customDesign}</option>
                      <option value="Silver Necklaces & Chokers">{t.contact.interests.silverNecklaces}</option>
                      <option value="Silver Pendants & Amulets">{t.contact.interests.silverPendants}</option>
                      <option value="Silver Rings & Signets">{t.contact.interests.silverRings}</option>
                      <option value="Silver Chains & Bracelets">{t.contact.interests.silverChains}</option>
                      <option value="Bridal Silver Ornaments">{t.contact.interests.bridal}</option>
                      <option value="General Store Enquiry">{t.contact.interests.general}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-70"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
