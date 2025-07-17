import React, { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  currentLang?: string;
  onLanguageChange?: (lang: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentPage = 'home',
  currentLang: propCurrentLang,
  onLanguageChange: propOnLanguageChange
}) => {
  const [internalCurrentLang, setInternalCurrentLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use prop values if provided, otherwise use internal state
  const currentLang = propCurrentLang || internalCurrentLang;
  const onLanguageChange = propOnLanguageChange || setInternalCurrentLang;

  useEffect(() => {
    // Load language preference from localStorage only if no prop is provided
    if (!propCurrentLang) {
      const savedLang = localStorage.getItem('memorial-site-lang');
      if (savedLang && ['en', 'ur', 'ps'].includes(savedLang)) {
        setInternalCurrentLang(savedLang);
      }
    }

    // Add Google Fonts for multilingual support
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [propCurrentLang]);

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    if (!propCurrentLang) {
      localStorage.setItem('memorial-site-lang', lang);
    }
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Skip to Content Link */}
      <a href="#main-content" className="skip-link">
        {currentLang === 'en' ? 'Skip to main content' : 
         currentLang === 'ur' ? 'مرکزی مواد پر جائیں' : 
         'اصلي منځپانګې ته لاړ شه'}
      </a>

      {/* Header */}
      <header className="bg-card shadow-gentle border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Site Title */}
            <div className="flex items-center space-x-4">
              <a 
                href="/" 
                className={`text-xl font-bold text-primary hover:text-primary/80 transition-colors ${isRTL ? 'font-urdu' : ''}`}
                aria-label={currentLang === 'en' ? 'Memorial site home' : 
                           currentLang === 'ur' ? 'یادگاری ویب سائٹ ہوم' : 
                           'د یادګارۍ ویب پاڼه'}
              >
                {currentLang === 'en' ? 'Maulana Khan Zeb' : 
                 currentLang === 'ur' ? 'مولانا خان زیب' : 
                 'مولانا خان زیب'}
              </a>
            </div>

            {/* Navigation & Language Toggle */}
            <div className="flex items-center space-x-4">
              <Navigation 
                currentLang={currentLang} 
                isMenuOpen={isMenuOpen} 
                onMenuToggle={handleMenuToggle} 
              />
              <LanguageToggle 
                currentLang={currentLang} 
                onLanguageChange={handleLanguageChange} 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {React.isValidElement(children) 
          ? React.cloneElement(children as React.ReactElement, { currentLang, onLanguageChange: handleLanguageChange })
          : children}
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Memorial Message */}
            <div className={`${isRTL ? 'rtl font-urdu' : ''}`}>
              <h3 className="font-semibold mb-4 text-foreground">
                {currentLang === 'en' ? 'In Memory' : 
                 currentLang === 'ur' ? 'یادگار میں' : 
                 'د یادونې لپاره'}
              </h3>
              <p className="text-sm leading-relaxed">
                {currentLang === 'en' ? 'Maulana Khan Zeb (1975-2025) dedicated his life to peace, education, and cultural preservation. His legacy continues through those who champion his values.' : 
                 currentLang === 'ur' ? 'مولانا خان زیب (1975-2025) نے اپنی زندگی امن، تعلیم، اور ثقافتی تحفظ کے لیے وقف کی۔ ان کی میراث ان لوگوں کے ذریعے جاری ہے جو ان کے اقدار کا دفاع کرتے ہیں۔' : 
                 'مولانا خان زیب (1975-2025) خپل ژوند د سولې، زده کړو، او کلتوري ساتنې لپاره وقف کړ. د هغه میراث د هغو خلکو له لارې دوام لري چې د هغه د ارزښتونو ملاتړ کوي.'}
              </p>
            </div>

            {/* Links */}
            <div className={`${isRTL ? 'rtl font-urdu' : ''}`}>
              <h3 className="font-semibold mb-4 text-foreground">
                {currentLang === 'en' ? 'Quick Links' : 
                 currentLang === 'ur' ? 'فوری لنکس' : 
                 'چټک اړیکې'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/biography" className="hover:text-primary transition-colors">{currentLang === 'en' ? 'Biography' : currentLang === 'ur' ? 'سوانح' : 'سوانح'}</a></li>
                <li><a href="/scholarship" className="hover:text-primary transition-colors">{currentLang === 'en' ? 'Scholarship' : currentLang === 'ur' ? 'علمی کام' : 'علمي کار'}</a></li>
                <li><a href="/legacy" className="hover:text-primary transition-colors">{currentLang === 'en' ? 'Legacy' : currentLang === 'ur' ? 'وراثت' : 'میراث'}</a></li>
                <li><a href="/resources" className="hover:text-primary transition-colors">{currentLang === 'en' ? 'Resources' : currentLang === 'ur' ? 'ذرائع' : 'سرچېنې'}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={`${isRTL ? 'rtl font-urdu' : ''}`}>
              <h3 className="font-semibold mb-4 text-foreground">
                {currentLang === 'en' ? 'About This Site' : 
                 currentLang === 'ur' ? 'اس ویب سائٹ کے بارے میں' : 
                 'د دې ویب پاڼې په اړه'}
              </h3>
              <p className="text-sm leading-relaxed">
                {currentLang === 'en' ? 'A memorial site honoring the life and work of Maulana Khan Zeb. May his soul rest in peace.' : 
                 currentLang === 'ur' ? 'مولانا خان زیب کی زندگی اور کام کو خراج تحسین پیش کرنے والی یادگاری ویب سائٹ۔ اللہ ان کی روح کو جنت الفردوس میں جگہ دے۔' : 
                 'د مولانا خان زیب د ژوند او کار د درناوي یادګاری ویب پاڼه. د هغه روح دې ښه ځای ولري.'}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className={`border-t border-border mt-8 pt-8 text-center text-sm ${isRTL ? 'rtl font-urdu' : ''}`}>
            <p>
              {currentLang === 'en' ? '© 2025 Memorial Site for Maulana Khan Zeb. Created with respect and reverence.' : 
               currentLang === 'ur' ? '© 2025 مولانا خان زیب کی یادگاری ویب سائٹ۔ احترام اور تعظیم کے ساتھ بنایا گیا۔' : 
               '© 2025 د مولانا خان زیب یادګاري ویب پاڼه. د درناوي او احترام سره جوړه شوې.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;