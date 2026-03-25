import i18n from "i18next";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initReactI18next } from "react-i18next";
import App from './App.jsx';
import home_en from './i18n/home/en.json';
import home_fr from './i18n/home/fr.json';
import './index.css';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        home: home_en
      },
      fr: {
        home: home_fr
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
