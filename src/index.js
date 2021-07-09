import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_sk from "./translations/sk/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.LOCALE.toLowerCase(),
  fallbackLng: "sk",
  resources: {
    sk: {
      common: common_sk,
    },
    en: {
      common: common_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App isTest={window.IS_TEST || false} />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("ehranica-app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
