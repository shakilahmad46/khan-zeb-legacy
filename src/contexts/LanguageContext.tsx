import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Load language preference from localStorage
    const savedLang = localStorage.getItem('memorial-site-lang');
    if (savedLang && ['en', 'ur', 'ps'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem('memorial-site-lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};