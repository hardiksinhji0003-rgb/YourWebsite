import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, MessageCircle, ShoppingBag, Info, SlidersHorizontal } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { ProductCategory } from '../types';
import { getProductWhatsAppUrl } from '../data/businessConfig';

export const ProductCatalog: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    addToCart,
  } = useShop();

  const { t, getLocalizedProduct, getLocalizedCategory } = useLanguage();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: ProductCategory[] = [
    'All',
    'Silver Necklaces',
    'Silver Jewellery Sets',
    'Silver Pendants',
    'Silver Rings',
    'Silver Earrings',
    'Silver Chains',
    'Custom Jewellery',
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'All' ? true : item.category === selectedCategory;
        const localized = getLocalizedProduct(item);
        const matchesSearch =
          searchQuery.trim() === ''
            ? true
            : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              localized.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              localized.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              localized.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy, getLocalizedProduct]);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F8F5EF] dark:bg-[#121212] scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle with Framer Motion entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
            {t.catalog.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] dark:text-[#F5EFE6] font-normal tracking-tight">
            {t.catalog.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-3 origin-center"
          />
          <p className="text-[#777777] dark:text-[#A8A298] text-base sm:text-lg font-light">
            {t.catalog.subtitle}
          </p>

          {/* Explicit Demo Notice */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50/80 dark:bg-[#242018] border border-amber-200/60 dark:border-[#C6A15B]/30 rounded text-[11px] text-amber-900/80 dark:text-[#E4D1A3]">
            <Info className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{t.catalog.demoNotice}</span>
          </div>
        </motion.div>

        {/* Filter Controls & Search Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E4D1A3]/50 dark:border-[#C6A15B]/25"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase whitespace-nowrap rounded transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#171717] dark:bg-[#C6A15B] text-[#E4D1A3] dark:text-[#171717] shadow-xs'
                    : 'bg-white dark:bg-[#1E1D1B] text-[#555555] dark:text-[#CFC8BC] hover:text-[#171717] dark:hover:text-[#F5EFE6] hover:bg-white/80 dark:hover:bg-[#262420] border border-[#E4D1A3]/60 dark:border-[#C6A15B]/30'
                }`}
              >
                {getLocalizedCategory(cat)}
              </button>
            ))}
          </div>

          {/* Sort Selector & Search Clear */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3 text-xs">
            {searchQuery && (
              <span className="text-[#777777] dark:text-[#A8A298]">
                Filtering for &ldquo;<strong className="text-[#171717] dark:text-[#F5EFE6]">{searchQuery}</strong>&rdquo;
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-[#C6A15B] underline cursor-pointer"
                >
                  {t.nav.clear}
                </button>
              </span>
            )}

            <div className="flex items-center gap-2 ml-auto">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#777777] dark:text-[#A8A298]" />
              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white dark:bg-[#1E1D1B] border border-[#E4D1A3] dark:border-[#C6A15B]/35 rounded px-2.5 py-1.5 text-xs text-[#202020] dark:text-[#F5EFE6] focus:outline-none focus:border-[#C6A15B] cursor-pointer"
              >
                <option value="featured">{t.catalog.sortFeatured}</option>
                <option value="price-asc">{t.catalog.sortPriceAsc}</option>
                <option value="price-desc">{t.catalog.sortPriceDesc}</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid with Framer Motion staggered entrance animations */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-[#1E1D1B] rounded-xl border border-[#E4D1A3]/50 dark:border-[#C6A15B]/30 p-8">
            <p className="font-serif text-2xl text-[#171717] dark:text-[#F5EFE6] mb-2">{t.catalog.noProductsFound}</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#171717] dark:bg-[#C6A15B] text-[#E4D1A3] dark:text-[#171717] rounded cursor-pointer"
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product, index) => {
              const inWishlist = isInWishlist(product.id);
              const locProduct = getLocalizedProduct(product);
              const waUrl = getProductWhatsAppUrl(locProduct.name, locProduct.category, product.price);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: (index % 4) * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <div className="group bg-white dark:bg-[#1E1D1B] rounded-xl overflow-hidden border border-[#E4D1A3]/40 dark:border-[#C6A15B]/25 shadow-xs flex flex-col justify-between relative h-full w-full luxury-card-lift transition-colors duration-300">
                  {/* Top Image Frame with Hover Buttons */}
                  <div className={`relative overflow-hidden aspect-[4/3] ${product.imageBg || 'bg-[#F3F0E8] dark:bg-[#24221F]'}`}>
                    <img
                      src={product.image}
                      alt={locProduct.name}
                      className={`w-full h-full ${product.imageFit === 'contain' ? 'object-contain p-1.5' : 'object-cover'} ${product.imagePosition || 'object-center'} transition-transform duration-500 ease-out group-hover:scale-105`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Purity Stamp */}
                    <div className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-[#E4D1A3] px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-semibold border border-[#C6A15B]/25">
                      925 Silver
                    </div>

                    {/* Wishlist Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 shadow-md cursor-pointer ${
                        inWishlist
                          ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400'
                          : 'bg-white/90 dark:bg-[#171717]/90 text-[#777777] dark:text-[#CFC8BC] hover:text-rose-600 dark:hover:text-rose-400 hover:bg-white dark:hover:bg-[#171717]'
                      }`}
                      aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
                    >
                      <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                    </button>

                    {/* Quick View Button overlay */}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setQuickViewProduct(product)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/95 dark:bg-[#1E1D1B]/95 backdrop-blur-xs text-[#171717] dark:text-[#F5EFE6] hover:bg-[#171717] dark:hover:bg-[#C6A15B] hover:text-[#E4D1A3] dark:hover:text-[#171717] text-xs font-semibold tracking-wider uppercase rounded shadow-md transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.catalog.quickView}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => addToCart(product, 1)}
                        className="p-2 bg-white/95 dark:bg-[#1E1D1B]/95 backdrop-blur-xs text-[#171717] dark:text-[#F5EFE6] hover:bg-[#C6A15B] hover:text-white dark:hover:text-[#171717] rounded shadow-md transition-colors cursor-pointer"
                        title={t.catalog.addToBag}
                        aria-label={t.catalog.addToBag}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Category Label */}
                      <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold block mb-1">
                        {locProduct.category}
                      </span>

                      {/* Product Name */}
                      <h3
                        onClick={() => setQuickViewProduct(product)}
                        className="font-serif text-lg font-medium text-[#171717] dark:text-[#F5EFE6] hover:text-[#C6A15B] transition-colors cursor-pointer line-clamp-1"
                        title={locProduct.name}
                      >
                        {locProduct.name}
                      </h3>

                      {/* Hallmark spec */}
                      <p className="text-[11px] text-[#777777] dark:text-[#A8A298] mt-1 flex items-center gap-2">
                        <span>{locProduct.hallmark}</span>
                        <span>·</span>
                        <span>{locProduct.weight}</span>
                      </p>
                    </div>

                    {/* Price and WhatsApp Enquiry Row */}
                    <div className="pt-4 mt-3 border-t border-[#E4D1A3]/30 dark:border-[#C6A15B]/20 flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif text-base font-semibold text-[#171717] dark:text-[#F5EFE6] tabular-nums">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#999999] dark:text-[#777777] line-through tabular-nums">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#999999] dark:text-[#A8A298] block font-light">
                          925 Silver
                        </span>
                      </div>

                      {/* WhatsApp Enquiry Button */}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171717] dark:text-[#E4D1A3] bg-[#E4D1A3]/50 dark:bg-[#C6A15B]/15 hover:bg-[#C6A15B] hover:text-white dark:hover:text-[#171717] border border-[#C6A15B]/40 rounded transition-colors"
                        title={t.catalog.enquireWhatsApp}
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>{t.nav.enquire}</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Section bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center text-xs text-[#777777] dark:text-[#A8A298]"
        >
          <a
            href="#custom-jewellery"
            className="text-[#171717] dark:text-[#E4D1A3] underline hover:text-[#C6A15B] font-medium ml-1"
          >
            {t.customJewellery.enquiryBtn}
          </a>
        </motion.div>

      </div>
    </section>
  );
};
