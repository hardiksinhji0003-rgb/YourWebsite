import React from 'react';
import { X, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';

export const StoryModal: React.FC = () => {
  const { isStoryModalOpen, setIsStoryModalOpen } = useShop();
  const { t } = useLanguage();

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
            className="absolute top-4 right-4 text-[#AAAAAA] hover:text-white p-1 rounded-full transition-colors cursor-pointer"
            aria-label="Close story modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1">
            {t.storyModal.badge}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            {t.storyModal.title}
          </h3>
          <p className="text-xs text-[#E4D1A3] mt-1 font-light tracking-wider uppercase">
            {t.storyModal.subHeader}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-sm text-[#444444] leading-relaxed">
          
          <div className="space-y-3">
            <h4 className="font-serif text-xl text-[#171717] font-medium">
              {t.storyModal.essenceTitle}
            </h4>
            <p>{t.storyModal.essenceP1}</p>
            <p>{t.storyModal.essenceP2}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#F8F5EF] rounded-xl border border-[#E4D1A3]/50 text-center">
              <ShieldCheck className="w-6 h-6 text-[#C6A15B] mx-auto mb-2" />
              <h5 className="font-serif text-sm font-semibold text-[#171717]">{t.storyModal.hallmarkTitle}</h5>
              <p className="text-[11px] text-[#777777] mt-1">
                {t.storyModal.hallmarkDesc}
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] rounded-xl border border-[#E4D1A3]/50 text-center">
              <Sparkles className="w-6 h-6 text-[#C6A15B] mx-auto mb-2" />
              <h5 className="font-serif text-sm font-semibold text-[#171717]">{t.storyModal.blueprintsTitle}</h5>
              <p className="text-[11px] text-[#777777] mt-1">
                {t.storyModal.blueprintsDesc}
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] rounded-xl border border-[#E4D1A3]/50 text-center">
              <MapPin className="w-6 h-6 text-[#C6A15B] mx-auto mb-2" />
              <h5 className="font-serif text-sm font-semibold text-[#171717]">{t.storyModal.boutiqueTitle}</h5>
              <p className="text-[11px] text-[#777777] mt-1">
                {t.storyModal.boutiqueDesc}
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E4D1A3]/40">
            <h4 className="font-serif text-lg text-[#171717] font-medium">
              {t.storyModal.caringTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#555555] list-disc pl-4">
              <li>{t.storyModal.caring1}</li>
              <li>{t.storyModal.caring2}</li>
              <li>{t.storyModal.caring3}</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#E4D1A3] flex items-center justify-between">
            <div className="text-xs text-[#777777]">
              {t.storyModal.visitUs}
            </div>
            <button
              type="button"
              onClick={() => setIsStoryModalOpen(false)}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#E4D1A3] rounded hover:bg-[#C6A15B] hover:text-[#171717] transition-colors cursor-pointer"
            >
              {t.storyModal.close}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
