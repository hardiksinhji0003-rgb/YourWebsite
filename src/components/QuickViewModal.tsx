import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Heart, ShoppingBag, MessageCircle, ShieldCheck, Scale, Ruler } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { getProductWhatsAppUrl } from '../data/businessConfig';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  const { t, getLocalizedProduct } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('Standard Size');

  if (!quickViewProduct) return null;

  const locProduct = getLocalizedProduct(quickViewProduct);
  const inWishlist = isInWishlist(quickViewProduct.id);
  const waUrl = getProductWhatsAppUrl(
    locProduct.name,
    locProduct.category,
    quickViewProduct.price
  );

  const isRingOrChain =
    quickViewProduct.category === 'Silver Rings' || quickViewProduct.category === 'Silver Chains';

  const sizes =
    quickViewProduct.category === 'Silver Rings'
      ? ['US 6 (Indian 12)', 'US 7 (Indian 14)', 'US 8 (Indian 16)', 'US 9 (Indian 18)', 'Custom Size']
      : quickViewProduct.category === 'Silver Chains'
      ? ['18 Inches', '20 Inches', '22 Inches', '24 Inches']
      : ['Standard Hallmark'];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedSize);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#171717]/70 backdrop-blur-sm"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E4D1A3] overflow-hidden z-10 my-8"
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-[#777777] hover:text-[#171717] bg-white/80 hover:bg-white rounded-full transition-colors shadow-xs cursor-pointer"
          aria-label={t.quickView.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="relative bg-[#F8F5EF] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E4D1A3]/40">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img
                src={quickViewProduct.image}
                alt={locProduct.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#171717]/90 text-[#E4D1A3] px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-semibold">
                {locProduct.purity}
              </div>
            </div>
          </div>

          {/* Right: Specifications & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category */}
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block mb-1">
                {locProduct.category}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-tight">
                {locProduct.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-serif text-2xl font-semibold text-[#171717] tabular-nums">
                  ₹{quickViewProduct.price.toLocaleString('en-IN')}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-[#999999] line-through tabular-nums">
                    ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed font-light">
                {locProduct.description}
              </p>

              {/* Specifications Matrix */}
              <div className="mt-4 pt-4 border-t border-[#E4D1A3]/40 grid grid-cols-2 gap-3 text-xs text-[#333333]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#777777] block uppercase">{t.quickView.hallmarkLabel}</span>
                    <strong className="font-medium">{locProduct.hallmark}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#777777] block uppercase">{t.quickView.weightLabel}</span>
                    <strong className="font-medium">{locProduct.weight}</strong>
                  </div>
                </div>

                {locProduct.dimensions && (
                  <div className="col-span-2 flex items-center gap-2 pt-1 border-t border-[#E4D1A3]/30">
                    <Ruler className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#777777] block uppercase">{t.quickView.dimensionsLabel}</span>
                      <strong className="font-medium">{locProduct.dimensions}</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Sizing Option if applicable */}
              {isRingOrChain && (
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                    {t.quickView.selectSize}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'bg-[#171717] text-[#E4D1A3] font-semibold'
                            : 'bg-white text-[#555555] border border-[#E4D1A3] hover:border-[#C6A15B]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity stepper */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#171717]">
                  {t.quickView.quantity}
                </span>
                <div className="flex items-center border border-[#E4D1A3] rounded bg-[#F8F5EF]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-sm text-[#171717] hover:bg-white cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-semibold font-mono tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-sm text-[#171717] hover:bg-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-4 border-t border-[#E4D1A3]/50">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.quickView.addToBag}</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded border transition-colors cursor-pointer ${
                    inWishlist
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'border-[#E4D1A3] text-[#777777] hover:text-rose-600 hover:border-rose-300'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* WhatsApp direct */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#E4D1A3]/50 hover:bg-[#C6A15B] text-[#171717] hover:text-white border border-[#C6A15B]/50 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.quickView.enquireWhatsApp}</span>
              </a>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};
