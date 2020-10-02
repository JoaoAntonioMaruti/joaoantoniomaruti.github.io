import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { pt } from './pt';

const urlParams = new URLSearchParams(window.location.search);
const langQueryParam = urlParams.get('lang') as 'pt' | 'en';

const defaultLanguage =
  langQueryParam === 'pt' || langQueryParam === 'en'
    ? langQueryParam
    : navigator.language === 'pt-BR'
    ? 'pt'
    : 'en';

const resources = {
  en,
  pt,
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export { defaultLanguage };
