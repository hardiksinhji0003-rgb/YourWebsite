import React, { useState } from 'react';
import { MapPin, MessageCircle, Instagram, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessConfig';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
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
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter your contact phone number.';
    } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number (at least 8 digits).';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address or leave blank.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share your enquiry or jewellery preferences.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      // Simulate frontend submission handling cleanly
      setTimeout(() => {
        setSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  const handleForwardToWhatsApp = () => {
    const msg = `Hello Gujarat Orna!\nMy Name: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nInterest: ${formData.jewelleryInterest}\n\nEnquiry:\n${formData.message}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E4D1A3]/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            DAHEGAM BOUTIQUE &amp; INQUIRIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
            Let&rsquo;s Connect
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />
          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
            Looking for beautiful 925 Silver Jewellery? We would love to help you discover your perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Boutique Information & Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card */}
            <div className="bg-[#F8F5EF] p-8 rounded-xl border border-[#E4D1A3] shadow-xs">
              <span className="font-serif text-2xl text-[#171717] block font-medium">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-xs tracking-[0.2em] text-[#777777] uppercase font-sans block mb-6">
                {BUSINESS_CONFIG.parentBrand}
              </span>

              <div className="space-y-5 text-sm text-[#333333]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E4D1A3] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171717]">Boutique Location</h4>
                    <p className="text-[#555555] leading-snug mt-0.5">
                      {BUSINESS_CONFIG.location.landmark},<br />
                      {BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.state}, {BUSINESS_CONFIG.location.country}.
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E4D1A3] flex items-center justify-center shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171717]">Official Instagram</h4>
                    <a
                      href={BUSINESS_CONFIG.social.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C6A15B] hover:underline font-medium block mt-0.5"
                    >
                      {BUSINESS_CONFIG.social.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E4D1A3] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171717]">WhatsApp Assistance</h4>
                    <p className="text-[#777777] text-xs mt-0.5">
                      Instant replies regarding availability, custom sizing, and design consultations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#E4D1A3]/50 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-[#171717] text-[#171717] hover:text-[#E4D1A3] border border-[#E4D1A3] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Timings Note */}
            <div className="p-4 bg-amber-50/70 border border-[#E4D1A3]/40 rounded-lg text-xs text-[#666666] leading-relaxed">
              <strong className="text-[#171717] block mb-1">In-Store Consultations</strong>
              Visit our Dahegam store opposite Taluka Seva Sadan to examine 925 Silver hallmarks and discuss custom jewellery blueprints in person.
            </div>
          </div>

          {/* Right Column: Elegant Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-xl border border-[#E4D1A3] shadow-sm">
              <h3 className="font-serif text-2xl text-[#171717] mb-1 font-medium">
                Send an Enquiry
              </h3>
              <p className="text-xs text-[#777777] mb-6">
                Tell us about your jewellery requirements and we will connect back with design options.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#171717]">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <strong>{formData.jewelleryInterest}</strong> has been received by our demo interface.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleForwardToWhatsApp}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] hover:bg-[#C6A15B] text-[#E4D1A3] hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Continue on WhatsApp Now</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#888888]">
                    For live instant assistance, click above to open this message directly on WhatsApp.
                  </p>

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
                    className="text-xs text-[#777777] underline pt-2 hover:text-[#171717]"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Radhika Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border rounded text-[#171717] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4D1A3] focus:border-[#C6A15B]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98250 12345"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border rounded text-[#171717] focus:outline-none transition-colors ${
                          errors.phoneNumber ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4D1A3] focus:border-[#C6A15B]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                        Email Address <span className="text-[#888888] font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. contact@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border rounded text-[#171717] focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4D1A3] focus:border-[#C6A15B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Jewellery Interest */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                      Jewellery Interest
                    </label>
                    <select
                      value={formData.jewelleryInterest}
                      onChange={(e) => setFormData({ ...formData, jewelleryInterest: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                    >
                      <option value="Pure 925 Silver Jewellery">Pure 925 Silver Jewellery</option>
                      <option value="Custom Jewellery & Bespoke Design">Custom Jewellery & Bespoke Design</option>
                      <option value="Silver Necklaces & Chokers">Silver Necklaces &amp; Chokers</option>
                      <option value="Silver Pendants & Lockers">Silver Pendants &amp; Lockers</option>
                      <option value="Silver Rings & Signets">Silver Rings &amp; Signets</option>
                      <option value="Silver Earrings & Jhumkis">Silver Earrings &amp; Jhumkis</option>
                      <option value="Diamond-Cut Silver Chains">Diamond-Cut Silver Chains</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                      Message / Preferences <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share details such as preferred silver weight, length, design references, or special occasion..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border rounded text-[#171717] focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4D1A3] focus:border-[#C6A15B]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
