import React from 'react';
import { BookOpen, Heart, Users } from 'lucide-react';
import heroImage from '../assets/hero-khanzeb.jpg';

interface HeroSectionProps {
  currentLang: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const getContent = (lang: string) => {
    const content = {
      en: {
        heading: "Maulana Khan Zeb",
        subheading: "Scholar. Historian. Peace Champion of Bajaur.",
        description: "Religious scholar & Awami National Party leader who dedicated his life to education, Pashtun cultural preservation, and nonviolent resistance to militancy—martyred July 10, 2025 in Bajaur.",
        ctas: [
          { label: "Read His Story", url: "/biography", icon: BookOpen },
          { label: "Support Peace Education", url: "/legacy", icon: Heart },
          { label: "Download Book Info (PDF)", url: "/resources#book", icon: Users }
        ]
      },
      ur: {
        heading: "مولانا خان زیب",
        subheading: "عالم۔ مؤرخ۔ باجوڑ کا امن کا علمبردار۔",
        description: "مذہبی عالم اور عوامی نیشنل پارٹی کے رہنما جنہوں نے اپنی زندگی تعلیم، پشتون ثقافتی تحفظ، اور شدت پسندی کے خلاف عدم تشدد کی مزاحمت کے لیے وقف کی—10 جولائی 2025 کو باجوڑ میں شہید ہوئے۔",
        ctas: [
          { label: "ان کی کہانی پڑھیں", url: "/biography", icon: BookOpen },
          { label: "امن تعلیم کی حمایت کریں", url: "/legacy", icon: Heart },
          { label: "کتاب کی معلومات ڈاؤن لوڈ کریں", url: "/resources#book", icon: Users }
        ]
      },
      ps: {
        heading: "مولانا خان زیب",
        subheading: "عالم۔ تاریخ پوه۔ د باجوړ د سولې اتل۔",
        description: "مذهبي عالم او د عوامي ملي ګوند مشر چې خپل ژوند یې د زده کړو، د پښتنو کلتوري ساتنې، او د تندیو پروړاندې د عدم تشدد مقاومت لپاره وقف کړ—د ۲۰۲۵ کال د جولای په ۱۰ د باجوړ کې شهید شو۔",
        ctas: [
          { label: "د هغه کیسه ولولئ", url: "/biography", icon: BookOpen },
          { label: "د سولې زده کړو ملاتړ وکړئ", url: "/legacy", icon: Heart },
          { label: "د کتاب معلومات ډاونلوډ کړئ", url: "/resources#book", icon: Users }
        ]
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <section className="hero-section min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Portrait Placeholder */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-primary-foreground/20 border-4 border-primary-foreground/30 overflow-hidden shadow-memorial">
              <img 
                src={heroImage} 
                alt="Portrait of Maulana Khan Zeb, Pakistani religious scholar and peace activist from Bajaur"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className={`text-hero font-bold mb-4 ${isRTL ? 'rtl font-urdu' : ''}`}>
            {content.heading}
          </h1>
          
          <p className={`text-subheading mb-6 opacity-90 ${isRTL ? 'rtl font-urdu' : ''}`}>
            {content.subheading}
          </p>
          
          <p className={`text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-85 ${isRTL ? 'rtl font-urdu' : ''}`}>
            {content.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {content.ctas.map((cta, index) => {
              const Icon = cta.icon;
              return (
                <a
                  key={index}
                  href={cta.url}
                  className={`cta-button ${index === 0 ? '' : 'cta-button-secondary'} ${isRTL ? 'rtl font-urdu' : ''}`}
                  aria-label={cta.label}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {cta.label}
                </a>
              );
            })}
          </div>

          {/* Memorial Date */}
          <div className={`mt-8 text-primary-foreground/70 ${isRTL ? 'rtl font-urdu' : ''}`}>
            <time dateTime="2025-07-10" className="text-sm">
              {currentLang === 'en' ? 'July 10, 2025' : 
               currentLang === 'ur' ? '10 جولائی 2025' : 
               '۱۰ جولای ۲۰۲۵'}
            </time>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;