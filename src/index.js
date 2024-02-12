import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18next from "i18next";
import portfolioPage_en from "./translations/en/PortfolioPageEn.json"
import portfolioPage_jp from "./translations/jp/PortfolioPageJp.json"
import { I18nContext, I18nextProvider } from 'react-i18next';

i18next.init ({
    interpolation: {escapeValue: true},
    lng: "en",
    resources: {
        en: {
            global: portfolioPage_en
        },
        jp: {
            global: portfolioPage_jp
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
);