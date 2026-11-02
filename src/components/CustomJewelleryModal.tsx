import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { getCustomJewelleryWhatsAppUrl } from '../data/businessConfig';

export const CustomJewelleryModal: React.FC = () => {
  const { isCustomModalOpen, setIsCustomModalOpen } = useShop();

  const [jewelleryType, setJewelleryType] = useState('Custom 925 Silver Pendant');
  const [targetWeight, setTargetWeight] = useState('10 - 20 grams');
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
            className="absolute top-4 right-4 text-[#AAAAAA] hover:text-white p-1 rounded-full transition-colors"
            aria-label="Close custom modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#E4D1A3] text-xs uppercase tracking-widest font-semibold mb-1">
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
            <span>Gujarat Orna Bespoke Atelier</span>
          </div>

          <h3 className="font-serif text-2xl text-white font-normal">
            Commission Custom 925 Silver Jewellery
          </h3>
          <p className="text-xs text-[#AAAAAA] mt-1 font-light">
            Share your design ideas and connect directly with our Dahegam silversmiths.
          </p>
        </div>

        {/* Body Form */}
        <form onSubmit={handleOpenWhatsApp} className="p-6 sm:p-8 space-y-4">
          
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
              Jewellery Piece Type
            </label>
            <select
              value={jewelleryType}
              onChange={(e) => setJewelleryType(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
            >
              <option value="Custom 925 Silver Pendant">Custom 925 Silver Pendant / Locket</option>
              <option value="Custom 925 Silver Signet / Band Ring">Custom 925 Silver Signet / Band Ring</option>
              <option value="Custom 925 Silver Statement Necklace">Custom 925 Silver Statement Necklace</option>
              <option value="Custom 925 Silver Kada / Bracelet">Custom 925 Silver Kada / Bracelet</option>
              <option value="Custom Diamond-Cut Silver Chain">Custom Diamond-Cut Silver Chain</option>
              <option value="Personalized Monogram / Name Jewellery">Personalized Monogram / Name Jewellery</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                Estimated Silver Weight
              </label>
              <select
                value={targetWeight}
                onChange={(e) => setTargetWeight(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              >
                <option value="Lightweight (5 - 10 grams)">Lightweight (5 - 10 grams)</option>
                <option value="Medium (10 - 25 grams)">Medium (10 - 25 grams)</option>
                <option value="Substantial (25 - 50 grams)">Substantial (25 - 50 grams)</option>
                <option value="Heavy Heritage (50+ grams)">Heavy Heritage (50+ grams)</option>
                <option value="Need Advice">Need Artisan Advice</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
                Engraving / Inscription <span className="text-[#888888] font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Initials, Date, Mantra"
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1">
              Design Description &amp; Inspiration
            </label>
            <textarea
              rows={3}
              placeholder="Describe your design (antique finish, filigree, stone setting, or attach sketches in WhatsApp)..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F8F5EF] border border-[#E4D1A3] rounded text-[#171717] focus:outline-none focus:border-[#C6A15B] resize-none"
            />
          </div>

          <div className="p-3 bg-amber-50/80 rounded border border-[#E4D1A3]/50 text-xs text-[#555555] flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
            <span>
              Pure 925 Hallmark guarantee: Every custom item is stamped with the official 925 silver certification.
            </span>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E4D1A3] to-[#C6A15B] hover:from-[#C6A15B] hover:to-[#E4D1A3] text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp with Specs</span>
            </button>

            <button
              type="button"
              onClick={() => setIsCustomModalOpen(false)}
              className="px-5 py-3 text-xs uppercase tracking-wider text-[#777777] hover:text-[#171717]"
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
