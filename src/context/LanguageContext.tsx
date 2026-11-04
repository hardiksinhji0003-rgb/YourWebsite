import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, SUPPORTED_LANGUAGES, TranslationSchema, getTranslation } from '../i18n';
import { Product, CollectionItem, ProductCategory } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  getLocalizedProduct: (product: Product) => {
    name: string;
    description: string;
    purity: string;
    hallmark: string;
    weight: string;
    dimensions?: string;
    category: string;
  };
  getLocalizedCollection: (collection: CollectionItem) => {
    title: string;
    subtitle: string;
    tagline: string;
  };
  getLocalizedCategory: (category: ProductCategory) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'gujaratorna_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'en' || saved === 'gu' || saved === 'hi')) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  const t = getTranslation(language);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  };

  useEffect(() => {
    // Keep document HTML lang attribute in sync for accessibility & SEO
    document.documentElement.lang = language;
  }, [language]);

  const getLocalizedCategory = (category: ProductCategory): string => {
    return t.catalog.categories[category] || category;
  };

  const getLocalizedProduct = (product: Product) => {
    const pTranslations = (t.products as Record<string, any>)[product.id];
    if (pTranslations) {
      return {
        name: pTranslations.name || product.name,
        description: pTranslations.description || product.description,
        purity: pTranslations.purity || product.purity,
        hallmark: pTranslations.hallmark || product.hallmark,
        weight: pTranslations.weight || product.weight,
        dimensions: pTranslations.dimensions || product.dimensions,
        category: getLocalizedCategory(product.category),
      };
    }
    return {
      name: product.name,
      description: product.description,
      purity: product.purity,
      hallmark: product.hallmark,
      weight: product.weight,
      dimensions: product.dimensions,
      category: getLocalizedCategory(product.category),
    };
  };

  const getLocalizedCollection = (collection: CollectionItem) => {
    const keyMap: Record<string, keyof TranslationSchema['collections']['items']> = {
      'silver-necklaces': 'necklaces',
      'silver-pendants': 'pendants',
      'silver-rings': 'rings',
      'silver-earrings': 'earrings',
      'silver-chains': 'chains',
      'custom-jewellery': 'custom',
    };

    const itemKey = keyMap[collection.id];
    if (itemKey && t.collections.items[itemKey]) {
      const item = t.collections.items[itemKey];
      return {
        title: item.title,
        subtitle: item.subtitle,
        tagline: item.tagline,
      };
    }

    return {
      title: collection.title,
      subtitle: collection.subtitle,
      tagline: collection.tagline,
    };
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getLocalizedProduct,
        getLocalizedCollection,
        getLocalizedCategory,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
