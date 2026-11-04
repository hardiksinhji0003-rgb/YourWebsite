import { Language } from './types';
import { en } from './translations/en';
import { gu } from './translations/gu';
import { hi } from './translations/hi';

export * from './types';
export { en, gu, hi };

export const translations = {
  en,
  gu,
  hi,
};

export type TranslationSchema = typeof en;

/**
 * Safe accessor for nested translation keys, e.g. t('nav.home')
 */
export function getTranslation(lang: Language): TranslationSchema {
  return translations[lang] || translations.en;
}
