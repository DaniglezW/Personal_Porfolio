import React, { createContext, useState, useContext } from 'react';
import esTranslation from '../translations/es.json';
import enTranslation from '../translations/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const resources = {
    es: { translation: esTranslation },
    en: { translation: enTranslation },
  };

  const changeLanguage = (newLanguage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(newLanguage);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <LanguageContext.Provider value={{ language, resources, changeLanguage, isTransitioning }}>
      <div className={isTransitioning ? 'fade-out' : 'fade-in'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
