import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { getCustomJewelleryWhatsAppUrl } from '../data/businessConfig';

export const CustomJewelleryModal: React.FC = () => {
  const { isCustomModalOpen, setIsCustomModalOpen } = useShop();
  const { t } = useLanguage();

  const [jewelleryType, setJewelleryType] = useState('Custom 925 Silver Pendant / Locket');
  const [targetWeight, setTargetWeight] = useState('Medium (10 - 25 grams)');
  const [engraving, setEngraving] = useState('');
  const [notes, setNotes] = useState('');

  if (!isCustomModalOpen) return null;

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `Type: ${jewelleryType}\nTarget Silver Weight: ${targetWeight}${
      engraving ? `\nEngraving/Initials: ${engraving}` : ''
    }${notes ? `\nDesign Details: ${notes}` : ''}`;

    const url = getCustomJewelleryWhatsAppUrl(details);
    window.open(url, '_blank');
    setIsCustomModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171717]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCustomModalOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E4D1A3] overflow-hidden z-10 animate-fadeIn my-8">
        
        {/* Header */}
        <div className="bg-[#171717] text-white p-6 relative">
          <button
            type="button"
            onClick={() => setIsCustomModalOpen(false)}
            className="absolute top-4 right-4 text-[#AAAAAA] hover:text-white p-1 rounded-full transition-colors cursor-pointer"
            aria-label="Close custom modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#E4D1A3] text-xs uppercase tracking-widest font-semibold mb-1">
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
            <span>{t.customModal.badge}</span>
          </div>

          <h3 className="font-serif text-2xl text-white font-normal">
            {t.customModal.title}
          </h3>
          <p className="text-xs text-[#AAAAAA] mt-1 font-light">
            {t.customModal.subtitle}
          </p>
        </div>

        {/* Body Form */}
        <form onSubmit={handleOpenWhatsApp} className="p-6 sm:p-8 space-y-4">
          
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
              {t.customModal.typeLabel}
            </label>
            <select
              value={jewelleryType}
              onChange={(e) => setJewelleryType(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
            >
              <option value="Custom 925 Silver Pendant">{t.customModal.types.pendant}</option>
              <option value="Custom 925 Silver Signet / Band Ring">{t.customModal.types.ring}</option>
              <option value="Custom 925 Silver Statement Necklace">{t.customModal.types.necklace}</option>
              <option value="Custom 925 Silver Kada / Bracelet">{t.customModal.types.kada}</option>
              <option value="Custom Diamond-Cut Silver Chain">{t.customModal.types.chain}</option>
              <option value="Personalized Monogram / Name Jewellery">{t.customModal.types.name}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                {t.customModal.weightLabel}
              </label>
              <select
                value={targetWeight}
                onChange={(e) => setTargetWeight(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              >
                <option value="Lightweight (5 - 10 grams)">{t.customModal.weights.light}</option>
                <option value="Medium (10 - 25 grams)">{t.customModal.weights.medium}</option>
                <option value="Substantial (25 - 50 grams)">{t.customModal.weights.substantial}</option>
                <option value="Heavy Heritage (50+ grams)">{t.customModal.weights.heavy}</option>
                <option value="Need Advice">{t.customModal.weights.advice}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                {t.customModal.engravingLabel}
              </label>
              <input
                type="text"
                placeholder={t.customModal.engravingPlaceholder}
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
              {t.customModal.notesLabel}
            </label>
            <textarea
              rows={3}
              placeholder={t.customModal.notesPlaceholder}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] hover:bg-[#C6A15B] text-[#E4D1A3] hover:text-[#171717] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.customModal.submitBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
