import React from 'react';
import { X, Award, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BUSINESS_CONFIG } from '../data/businessConfig';

export const StoryModal: React.FC = () => {
  const { isStoryModalOpen, setIsStoryModalOpen } = useShop();

  if (!isStoryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171717]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsStoryModalOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E4D1A3] overflow-hidden z-10 animate-fadeIn my-8">
        
        {/* Header */}
        <div className="bg-[#171717] text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={() => setIsStoryModalOpen(false)}
            className="absolute top-4 right-4 text-[#AAAAAA] hover:text-white p-1 rounded-full transition-colors"
            aria-label="Close story modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1">
            ABOUT GUJARAT ORNA
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Where Tradition Meets Timeless Beauty
          </h3>
          <p className="text-xs text-[#E4D1A3] mt-1 font-light tracking-wider uppercase">
            By Gujarat Jewellers · Dahegam, Gujarat
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-sm text-[#444444] leading-relaxed">
          
          <div className="space-y-3">
            <h4 className="font-serif text-xl text-[#171717] font-medium">
              The Essence of Pure 925 Silver
            </h4>
            <p>
              At <strong>Gujarat Orna by Gujarat Jewellers</strong>, we celebrate the enduring brilliance of Pure 925 Sterling Silver. Silver has held a sacred place in Indian adornment and ceremonial heritage for centuries. Our creations honor this legacy with designs refined for modern living.
            </p>
            <p>
              From everyday minimalist silver chains and signets to grand bridal filigree chokers, every single jewel reflects deliberate craftsmanship and authentic purity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#F8F5EF] rounded-xl border border-[#E4D1A3]/50 text-center">
              <ShieldCheck className="w-6 h-6 text-[#C6A15B] mx-auto mb-2" />
              <h5 className="font-serif text-sm font-semibold text-[#171717]">925 Hallmarked</h5>
              <p className="text-[11px] text-[#777777] mt-1">
                92.5% certified fine silver alloyed for lifelong durability.
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] rounded-xl border border-[#E4D1A3]/50 text-center">
              <Sparkles className="w-6 h-6 text-[#C6A15B] mx-auto mb-2" />
              <h5 className="font-serif text-sm font-semibold text-[#171717]">Custom Blueprints</h5>
              <p className="text-[11px] text-[#777777] mt-1">
                From initial client sketches to final hand-carved silver masterworks.
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] rounded-xl border border-[#E4D1A3]/50 text-center">
              <MapPin className="w-6 h-6 text-[#C6A15B] mx-auto mb-2" />
              <h5 className="font-serif text-sm font-semibold text-[#171717]">Dahegam Boutique</h5>
              <p className="text-[11px] text-[#777777] mt-1">
                Warm in-person consultations opposite Taluka Seva Sadan.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E4D1A3]/40">
            <h4 className="font-serif text-lg text-[#171717] font-medium">
              Caring for Your 925 Silver
            </h4>
            <ul className="space-y-1.5 text-xs text-[#555555] list-disc pl-4">
              <li>Store in an airtight pouch or soft jewellery box away from humidity when not in use.</li>
              <li>Wipe gently with a soft microfiber cloth to restore its natural mirror luster.</li>
              <li>Avoid direct contact with perfumes, chlorine pools, and harsh household chemicals.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#E4D1A3] flex items-center justify-between">
            <div className="text-xs text-[#777777]">
              Visit us: Opposite Taluka Seva Sadan, Dahegam, Gujarat.
            </div>
            <button
              type="button"
              onClick={() => setIsStoryModalOpen(false)}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#E4D1A3] rounded hover:bg-[#C6A15B] hover:text-[#171717] transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
