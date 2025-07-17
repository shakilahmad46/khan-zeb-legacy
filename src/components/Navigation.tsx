import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentLang: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLang, isMenuOpen, onMenuToggle }) => {
  const getNavLabels = (lang: string) => {
    const labels = {
      en: ["Home","Biography","Scholarship","Peace & Politics","Elections","Assassination","Reaction","Legacy","Quotes","Resources"],
      ur: ["ہوم","سوانح","علمی کام","امن و سیاست","انتخابات","شہادت","ردعمل","وراثت","اقتباسات","ذرائع"],
      ps: ["کورپاڼه","سوانح","علمي کار","امن او سیاست","ټاکنې","شهادت","غبرګون","میراث","اقتباسونه","سرچېنې"]
    };
    return labels[lang as keyof typeof labels] || labels.en;
  };

  const routes = ['/', '/biography', '/scholarship', '/peace', '/elections', '/assassination', '/reaction', '/legacy', '/quotes', '/resources'];
  const labels = getNavLabels(currentLang);

  return (
    <nav className="relative" role="navigation" aria-label="Main navigation">
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="md:hidden p-2 text-foreground hover:bg-accent rounded-md"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {routes.map((route, index) => (
          <a
            key={route}
            href={route}
            className="nav-link"
            aria-current={route === '/' ? 'page' : undefined}
          >
            {labels[index]}
          </a>
        ))}
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-gentle z-50 md:hidden"
        >
          <div className="flex flex-col p-2">
            {routes.map((route, index) => (
              <a
                key={route}
                href={route}
                className="nav-link text-left"
                onClick={onMenuToggle}
                aria-current={route === '/' ? 'page' : undefined}
              >
                {labels[index]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;