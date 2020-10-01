import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { pt } from './pt';

const defaultLanguage = navigator.language === 'pt-BR' ? 'pt' : 'en';

const resources = {
  en,
  pt,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
