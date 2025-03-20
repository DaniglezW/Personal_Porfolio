import React from "react";
import './LanguageSwitcher.css';
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    changeLanguage(newLang);
  };

  return (
    <button className="language-button" onClick={toggleLanguage}>
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;