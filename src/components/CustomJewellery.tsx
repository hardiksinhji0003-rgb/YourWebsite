import React from 'react';
import { MessageCircle, PenTool, CheckCircle2 } from 'lucide-react';
import { getCustomJewelleryWhatsAppUrl } from '../data/businessConfig';
import { useShop } from '../context/ShopContext';

export const CustomJewellery: React.FC = () => {
  const { setIsCustomModalOpen } = useShop();
  const directWhatsAppUrl = getCustomJewelleryWhatsAppUrl();

  const customSteps = [
    { title: 'Share Your Inspiration', desc: 'Send reference images, sketches, or ideas via WhatsApp or our design form.' },
    { title: 'Artisanal Blueprinting', desc: 'Our artisans assess proportions, silver weight, and structural balance.' },
    { title: 'Handcrafted in Pure 925', desc: 'Cast, chiseled, and hand-finished with authentic hallmarked pure silver.' },
  ];

  return (
    <section id="custom-jewellery" className="py-16 sm:py-24 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E4D1A3] p-8 sm:p-12 lg:p-16 shadow-lg overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C6A15B]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                  BESPOKE SILVER ATELIER
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal tracking-tight">
                Your Style. <br />
                <span className="italic text-[#C6A15B] font-light">Your Design.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
                Have a unique jewellery idea? Connect with us to discuss your custom jewellery preferences. Whether it is a personalized name pendant, family signet ring, or customized silver bridal ornament, our craftsmen bring your vision into reality.
              </p>

              {/* 3 Step Process */}
              <div className="space-y-3 pt-2">
                {customSteps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#171717]">{step.title}</h4>
                      <p className="text-xs text-[#777777]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                {/* Primary WhatsApp Direct button with exact required text */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] bg-gradient-to-r from-[#E4D1A3] to-[#C6A15B] hover:from-[#C6A15B] hover:to-[#E4D1A3] transition-all rounded shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Custom Jewellery Enquiry</span>
                </a>

                {/* Interactive Modal Button */}
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] bg-white border border-[#C6A15B] hover:bg-[#F8F5EF] transition-colors rounded"
                >
                  <PenTool className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Submit Custom Specs</span>
                </button>
              </div>

              <p className="text-[11px] text-[#777777] italic">
                * Direct WhatsApp opens with: &ldquo;Hello Gujarat Orna! I am interested in creating custom 925 Silver Jewellery. Please share more details.&rdquo;
              </p>
            </div>

            {/* Right Photography */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#E4D1A3] group">
                <img
                  src="/src/assets/images/custom_silver_jewellery_1793629453356.jpg"
                  alt="Custom 925 silver jewellery design sketches and handcrafted medallion pendant"
                  className="w-full h-auto object-cover object-center aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded border border-white/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-semibold block">
                        Bespoke Commission
                      </span>
                      <h4 className="font-serif text-base text-[#171717] font-medium">
                        Pure 925 Filigree Amulet
                      </h4>
                    </div>
                    <span className="text-xs text-[#777777] font-mono">Custom 1:1</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
