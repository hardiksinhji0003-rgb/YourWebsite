import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { getCartOrderWhatsAppUrl } from '../data/businessConfig';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart, cartTotal, isCartOpen, setIsCartOpen } = useShop();
  const { t, getLocalizedProduct } = useLanguage();

  if (!isCartOpen) return null;

  const orderWhatsAppUrl = getCartOrderWhatsAppUrl(
    cart.map((item) => ({
      name: getLocalizedProduct(item.product).name,
      quantity: item.quantity,
      price: item.product.price,
      size: item.selectedSize,
    })),
    cartTotal
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171717]/60 dark:bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-[#F8F5EF] dark:bg-[#141413] border-l border-transparent dark:border-[#C6A15B]/30 h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden animate-slideIn transition-colors duration-300">
        
        {/* Header */}
        <div className="p-6 bg-white dark:bg-[#1B1A18] border-b border-[#E4D1A3] dark:border-[#C6A15B]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C6A15B]" />
            <h3 className="font-serif text-xl text-[#171717] dark:text-[#F5EFE6] font-medium">
              {t.cart.title}
            </h3>
            <span className="text-xs text-[#777777] dark:text-[#A8A298] font-mono">
              ({cart.reduce((tCount, i) => tCount + i.quantity, 0)})
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#777777] dark:text-[#A8A298] hover:text-[#171717] dark:hover:text-[#F5EFE6] rounded-full hover:bg-[#F8F5EF] dark:hover:bg-[#262420] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E4D1A3]/30 dark:bg-[#C6A15B]/15 border border-[#C6A15B]/30 flex items-center justify-center mx-auto text-[#C6A15B]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl text-[#171717] dark:text-[#F5EFE6]">{t.cart.emptyTitle}</h4>
              <p className="text-xs text-[#777777] dark:text-[#A8A298] max-w-xs mx-auto leading-relaxed">
                {t.cart.emptyDesc}
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] dark:bg-[#C6A15B] text-[#E4D1A3] dark:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#C6A15B] dark:hover:bg-[#E4D1A3] hover:text-[#171717] transition-colors cursor-pointer"
              >
                <span>{t.cart.exploreBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => {
                const locProduct = getLocalizedProduct(item.product);
                return (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="bg-white dark:bg-[#1F1E1B] p-4 rounded-xl border border-[#E4D1A3]/50 dark:border-[#C6A15B]/30 shadow-xs flex gap-3.5 items-start"
                  >
                    <img
                      src={item.product.image}
                      alt={locProduct.name}
                      className="w-16 h-16 object-cover rounded-lg border border-[#E4D1A3]/40 dark:border-[#C6A15B]/30 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-[#171717] dark:text-[#F5EFE6] truncate">
                          {locProduct.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#999999] dark:text-[#A8A298] hover:text-rose-500 transition-colors p-1 cursor-pointer"
                          aria-label={t.cart.remove}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#777777] dark:text-[#A8A298] mt-0.5">
                        {item.selectedSize || locProduct.category}
                      </p>

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E4D1A3]/30 dark:border-[#C6A15B]/20">
                        {/* Quantity stepper */}
                        <div className="flex items-center border border-[#E4D1A3] dark:border-[#C6A15B]/40 rounded bg-[#F8F5EF] dark:bg-[#141413] text-xs text-[#171717] dark:text-[#F5EFE6]">
                          <button
                            type="button"
                            onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-[#171717] dark:text-[#F5EFE6] hover:bg-white dark:hover:bg-[#262420] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 font-mono tabular-nums">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-[#171717] dark:text-[#F5EFE6] hover:bg-white dark:hover:bg-[#262420] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif text-sm font-semibold text-[#171717] dark:text-[#F5EFE6] tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-[#777777] dark:text-[#A8A298] hover:text-[#171717] dark:hover:text-[#F5EFE6] underline cursor-pointer"
                >
                  {t.cart.clearBag}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Area */}
        {cart.length > 0 && (
          <div className="p-6 bg-white dark:bg-[#1B1A18] border-t border-[#E4D1A3] dark:border-[#C6A15B]/30 space-y-4">
            {/* Subtotal */}
            <div className="flex items-baseline justify-between text-base">
              <span className="font-medium text-[#171717] dark:text-[#CFC8BC]">{t.cart.subtotal}:</span>
              <span className="font-serif text-2xl font-bold text-[#171717] dark:text-[#F5EFE6] tabular-nums">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="p-3 bg-amber-50/70 dark:bg-[#242018] border border-[#E4D1A3]/50 dark:border-[#C6A15B]/30 rounded text-[11px] text-[#777777] dark:text-[#CFC8BC] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
              <span>
                {t.cart.shippingNote}
              </span>
            </div>

            {/* Direct WhatsApp Ordering */}
            <a
              href={orderWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E4D1A3] to-[#C6A15B] hover:from-[#C6A15B] hover:to-[#E4D1A3] text-[#171717] rounded text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.cart.checkoutWhatsApp}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-xs text-[#777777] dark:text-[#A8A298] hover:text-[#171717] dark:hover:text-[#F5EFE6] pt-1 cursor-pointer"
            >
              {t.collections.exploreBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
