/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { ProductCatalog } from './components/ProductCatalog';
import { BrandStory } from './components/BrandStory';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomJewellery } from './components/CustomJewellery';
import { InstagramGallery } from './components/InstagramGallery';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CustomJewelleryModal } from './components/CustomJewelleryModal';
import { StoryModal } from './components/StoryModal';
import { BackToTop } from './components/BackToTop';
import { NotificationToast } from './components/NotificationToast';

export default function App() {
  return (
    <LanguageProvider>
      <ShopProvider>
        <div className="min-h-screen bg-[#F8F5EF] text-[#202020] flex flex-col selection:bg-[#E4D1A3] selection:text-[#171717]">
          {/* Sticky Header with Navigation */}
          <Header />

          {/* Main Content Sections */}
          <main className="flex-grow">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Shop By Collection */}
            <Collections />

            {/* 3. Featured Products & Best Sellers Catalog */}
            <ProductCatalog />

            {/* 4. Brand Story & Craftsmanship */}
            <BrandStory />

            {/* 5. Why Choose Gujarat Orna (Dark Charcoal Section) */}
            <WhyChooseUs />

            {/* 6. Custom Jewellery Atelier */}
            <CustomJewellery />

            {/* 7. Instagram Story Gallery */}
            <InstagramGallery />

            {/* 8. Customer Testimonials */}
            <Testimonials />

            {/* 9. Contact Section & Interactive Enquiry Form */}
            <ContactSection />
          </main>

          {/* 10. Luxury Dark Footer */}
          <Footer />

          {/* Interactive Drawers, Modals & Micro-interactions */}
          <CartDrawer />
          <WishlistDrawer />
          <QuickViewModal />
          <CustomJewelleryModal />
          <StoryModal />
          <NotificationToast />
          <BackToTop />
        </div>
      </ShopProvider>
    </LanguageProvider>
  );
}
