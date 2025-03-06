import React from "react";
import { useTranslation } from "react-i18next";
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    const appContainer = document.getElementById("container");
  
    if (appContainer) {
      appContainer.classList.add("fade-out");
    }
  
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      
      if (appContainer) {
        appContainer.classList.remove("fade-out");
        appContainer.classList.add("fade-in");
      }
  
      setTimeout(() => {
        if (appContainer) {
          appContainer.classList.remove("fade-in");
        }
      }, 300);
    }, 300);
  };

  return (
    <button className="language-button" onClick={toggleLanguage}>
      {currentLang.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;