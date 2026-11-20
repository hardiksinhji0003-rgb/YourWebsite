import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';

export const WishlistDrawer: React.FC = () => {
  const {
    products,
    wishlist,
    toggleWishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    addToCart,
    setQuickViewProduct,
  } = useShop();

  const { t, getLocalizedProduct } = useLanguage();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171717]/60 dark:bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-[#F8F5EF] dark:bg-[#141413] border-l border-transparent dark:border-[#C6A15B]/30 h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden animate-slideIn transition-colors duration-300">
        
        {/* Header */}
        <div className="p-6 bg-white dark:bg-[#1B1A18] border-b border-[#E4D1A3] dark:border-[#C6A15B]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            <h3 className="font-serif text-xl text-[#171717] dark:text-[#F5EFE6] font-medium">
              {t.wishlist.title}
            </h3>
            <span className="text-xs text-[#777777] dark:text-[#A8A298] font-mono">
              ({wishlistProducts.length})
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-[#777777] dark:text-[#A8A298] hover:text-[#171717] dark:hover:text-[#F5EFE6] rounded-full hover:bg-[#F8F5EF] dark:hover:bg-[#262420] transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto text-rose-400">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl text-[#171717] dark:text-[#F5EFE6]">{t.wishlist.emptyTitle}</h4>
              <p className="text-xs text-[#777777] dark:text-[#A8A298] max-w-xs mx-auto leading-relaxed">
                {t.wishlist.emptyDesc}
              </p>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] dark:bg-[#C6A15B] text-[#E4D1A3] dark:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#C6A15B] dark:hover:bg-[#E4D1A3] hover:text-[#171717] transition-colors cursor-pointer"
              >
                <span>{t.wishlist.browseBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlistProducts.map((product) => {
                const locProduct = getLocalizedProduct(product);
                return (
                  <div
                    key={product.id}
                    className="bg-white dark:bg-[#1F1E1B] p-4 rounded-xl border border-[#E4D1A3]/50 dark:border-[#C6A15B]/30 shadow-xs flex gap-3.5 items-center"
                  >
                    <img
                      src={product.image}
                      alt={locProduct.name}
                      className="w-16 h-16 object-cover rounded-lg border border-[#E4D1A3]/40 dark:border-[#C6A15B]/30 shrink-0 cursor-pointer"
                      onClick={() => {
                        setQuickViewProduct(product);
                        setIsWishlistOpen(false);
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-serif text-sm font-medium text-[#171717] dark:text-[#F5EFE6] hover:text-[#C6A15B] cursor-pointer truncate"
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsWishlistOpen(false);
                        }}
                      >
                        {locProduct.name}
                      </h4>
                      <p className="text-[11px] text-[#777777] dark:text-[#A8A298] mt-0.5">{locProduct.category}</p>
                      <p className="font-serif text-sm font-semibold text-[#171717] dark:text-[#F5EFE6] mt-1 tabular-nums">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="p-2 bg-[#F8F5EF] dark:bg-[#262420] hover:bg-[#171717] dark:hover:bg-[#C6A15B] text-[#171717] dark:text-[#E4D1A3] hover:text-[#E4D1A3] dark:hover:text-[#171717] border border-[#E4D1A3] dark:border-[#C6A15B]/40 rounded transition-colors cursor-pointer"
                        title={t.catalog.addToBag}
                        aria-label="Add to bag"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        className="p-2 text-[#999999] dark:text-[#A8A298] hover:text-rose-500 rounded transition-colors cursor-pointer"
                        title={t.wishlist.remove}
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-6 bg-white dark:bg-[#1B1A18] border-t border-[#E4D1A3] dark:border-[#C6A15B]/30">
            <button
              type="button"
              onClick={() => {
                wishlistProducts.forEach((p) => addToCart(p, 1));
                setIsWishlistOpen(false);
              }}
              className="w-full py-3 bg-[#171717] dark:bg-[#C6A15B] hover:bg-[#C6A15B] dark:hover:bg-[#E4D1A3] text-white dark:text-[#171717] hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              {t.catalog.addToBag} (All)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
