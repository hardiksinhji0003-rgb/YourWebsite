export type Language = 'en' | 'gu' | 'hi';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
  shortLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    label: 'English',
    nativeName: 'English',
    shortLabel: 'EN',
  },
  {
    code: 'gu',
    label: 'Gujarati',
    nativeName: 'ગુજરાતી',
    shortLabel: 'ગુજ',
  },
  {
    code: 'hi',
    label: 'Hindi',
    nativeName: 'हिन्दी',
    shortLabel: 'हि',
  },
];
