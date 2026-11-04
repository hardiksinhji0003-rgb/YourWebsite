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
        className="fixed inset-0 bg-[#171717]/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-[#F8F5EF] h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden animate-slideIn">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E4D1A3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            <h3 className="font-serif text-xl text-[#171717] font-medium">
              {t.wishlist.title}
            </h3>
            <span className="text-xs text-[#777777] font-mono">
              ({wishlistProducts.length})
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-[#777777] hover:text-[#171717] rounded-full hover:bg-[#F8F5EF] transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-400">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl text-[#171717]">{t.wishlist.emptyTitle}</h4>
              <p className="text-xs text-[#777777] max-w-xs mx-auto leading-relaxed">
                {t.wishlist.emptyDesc}
              </p>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] text-[#E4D1A3] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#C6A15B] hover:text-[#171717] transition-colors cursor-pointer"
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
                    className="bg-white p-4 rounded-xl border border-[#E4D1A3]/50 shadow-xs flex gap-3.5 items-center"
                  >
                    <img
                      src={product.image}
                      alt={locProduct.name}
                      className="w-16 h-16 object-cover rounded-lg border border-[#E4D1A3]/40 shrink-0 cursor-pointer"
                      onClick={() => {
                        setQuickViewProduct(product);
                        setIsWishlistOpen(false);
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-serif text-sm font-medium text-[#171717] hover:text-[#C6A15B] cursor-pointer truncate"
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsWishlistOpen(false);
                        }}
                      >
                        {locProduct.name}
                      </h4>
                      <p className="text-[11px] text-[#777777] mt-0.5">{locProduct.category}</p>
                      <p className="font-serif text-sm font-semibold text-[#171717] mt-1 tabular-nums">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="p-2 bg-[#F8F5EF] hover:bg-[#171717] text-[#171717] hover:text-[#E4D1A3] border border-[#E4D1A3] rounded transition-colors cursor-pointer"
                        title={t.catalog.addToBag}
                        aria-label="Add to bag"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        className="p-2 text-[#999999] hover:text-rose-500 rounded transition-colors cursor-pointer"
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
          <div className="p-6 bg-white border-t border-[#E4D1A3]">
            <button
              type="button"
              onClick={() => {
                wishlistProducts.forEach((p) => addToCart(p, 1));
                setIsWishlistOpen(false);
              }}
              className="w-full py-3 bg-[#171717] hover:bg-[#C6A15B] text-white hover:text-[#171717] rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              {t.catalog.addToBag} (All)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
