import React from 'react';

interface LanguageToggleProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ur', label: 'Urdu', native: 'اردو' },
    { code: 'ps', label: 'Pashto', native: 'پښتو' }
  ];

  return (
    <div className="flex items-center space-x-1" role="group" aria-label="Language selection">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`lang-toggle ${currentLang === lang.code ? 'active' : ''}`}
          aria-pressed={currentLang === lang.code}
          title={`Switch to ${lang.label}`}
        >
          {lang.native}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;