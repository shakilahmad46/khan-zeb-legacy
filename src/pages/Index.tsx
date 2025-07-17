import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import QuickFacts from '../components/QuickFacts';
import { Heart, BookOpen, Users } from 'lucide-react';

const Index = () => {
  const { currentLang } = useLanguage();

  const getContent = (lang: string) => {
    const content = {
      en: {
        sections: {
          legacy: {
            title: "Continue His Legacy",
            description: "Honor Maulana Khan Zeb's memory by supporting the causes he championed: education, peace, and cultural preservation.",
            actions: [
              {
                title: "Support Education",
                description: "Champion mother-tongue education and cultural literacy in Bajaur and beyond.",
                icon: BookOpen,
                link: "/legacy#education"
              },
              {
                title: "Promote Peace",
                description: "Join grassroots peace movements that resist extremism through dialogue and understanding.",
                icon: Heart,
                link: "/legacy#peace"
              },
              {
                title: "Preserve Heritage",
                description: "Document and share Pashtun history, culture, and the rich heritage of Bajaur.",
                icon: Users,
                link: "/legacy#heritage"
              }
            ]
          },
          quotes: {
            title: "Remembering His Words",
            featured: {
              quote: "This attack is not only on the ANP but on Pashtun consciousness and peace.",
              attribution: "Mian Iftikhar Hussain, ANP KP President",
              context: "Speaking after Maulana Khan Zeb's assassination"
            }
          }
        }
      },
      ur: {
        sections: {
          legacy: {
            title: "ان کی میراث کو آگے بڑھائیں",
            description: "مولانا خان زیب کی یاد کو ان مقاصد کی حمایت کرکے عزت دیں جن کا وہ علمبردار تھے: تعلیم، امن، اور ثقافتی تحفظ۔",
            actions: [
              {
                title: "تعلیم کی حمایت",
                description: "باجوڑ اور اس سے آگے مادری زبان کی تعلیم اور ثقافتی خواندگی کا دفاع کریں۔",
                icon: BookOpen,
                link: "/legacy#education"
              },
              {
                title: "امن کو فروغ دیں",
                description: "بنیادی امن کی تحریکوں میں شامل ہوں جو بات چیت اور تفہیم کے ذریعے انتہا پسندی کا مقابلہ کرتی ہیں۔",
                icon: Heart,
                link: "/legacy#peace"
              },
              {
                title: "وراثت کا تحفظ",
                description: "پشتون تاریخ، ثقافت، اور باجوڑ کی بھرپور وراثت کو دستاویز بنائیں اور شیئر کریں۔",
                icon: Users,
                link: "/legacy#heritage"
              }
            ]
          },
          quotes: {
            title: "ان کے الفاظ کو یاد کرتے ہوئے",
            featured: {
              quote: "یہ حملہ صرف ANP پر نہیں بلکہ پشتون شعور اور امن پر ہے۔",
              attribution: "میاں افتخار حسین، ANP KP صدر",
              context: "مولانا خان زیب کے قتل کے بعد بولتے ہوئے"
            }
          }
        }
      },
      ps: {
        sections: {
          legacy: {
            title: "د هغه میراث ته دوام ورکړئ",
            description: "د مولانا خان زیب یادونه د هغو موخو ملاتړ سره درناوی وکړئ چې هغه یې ملاتړ کاوه: زده کړې، سوله، او کلتوري ساتنه.",
            actions: [
              {
                title: "د زده کړو ملاتړ",
                description: "په باجوړ او بهر د مور ژبې زده کړو او کلتوري پوهاوي ملاتړ وکړئ.",
                icon: BookOpen,
                link: "/legacy#education"
              },
              {
                title: "سولې ته وده ورکړئ",
                description: "د ولسي سولې غورځنګونو کې برخه واخلئ چې د خبرو اترو او پوهاوي له لارې د تندیو سره مقابله کوي.",
                icon: Heart,
                link: "/legacy#peace"
              },
              {
                title: "د میراث ساتنه",
                description: "د پښتنو تاریخ، کلتور، او د باجوړ بډای میراث مستند او شریک کړئ.",
                icon: Users,
                link: "/legacy#heritage"
              }
            ]
          },
          quotes: {
            title: "د هغه د خبرو یادونه",
            featured: {
              quote: "دا برید نه یوازې پر ANP بلکې د پښتون شعور او سولې پر دی.",
              attribution: "میان افتخار حسین، د ANP KP ولسمشر",
              context: "د مولانا خان زیب د وژنې وروسته خبرې کولو پر مهال"
            }
          }
        }
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="home">
      {/* Hero Section */}
      <HeroSection currentLang={currentLang} />

      {/* Quick Facts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuickFacts currentLang={currentLang} />
        </div>
      </section>

      {/* Legacy Actions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 ${isRTL ? 'rtl font-urdu' : ''}`}>
              <h2 className="text-heading font-bold mb-4">
                {content.sections.legacy.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content.sections.legacy.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.sections.legacy.actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div key={index} className="memorial-card text-center group">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold mb-4 ${isRTL ? 'rtl font-urdu' : ''}`}>
                      {action.title}
                    </h3>
                    <p className={`text-muted-foreground mb-6 ${isRTL ? 'rtl font-urdu' : ''}`}>
                      {action.description}
                    </p>
                    <a 
                      href={action.link} 
                      className={`cta-button ${isRTL ? 'rtl font-urdu' : ''}`}
                    >
                      {currentLang === 'en' ? 'Learn More' : 
                       currentLang === 'ur' ? 'مزید جانیں' : 
                       'نور زده کړئ'}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-8 ${isRTL ? 'rtl font-urdu' : ''}`}>
              <h2 className="text-heading font-bold mb-4">
                {content.sections.quotes.title}
              </h2>
            </div>
            
            <div className="quote-card text-center">
              <blockquote className={`text-xl font-medium mb-6 italic ${isRTL ? 'rtl font-urdu' : ''}`}>
                "{content.sections.quotes.featured.quote}"
              </blockquote>
              <cite className={`block text-muted-foreground ${isRTL ? 'rtl font-urdu' : ''}`}>
                — {content.sections.quotes.featured.attribution}
              </cite>
              <p className={`text-sm text-muted-foreground mt-2 ${isRTL ? 'rtl font-urdu' : ''}`}>
                {content.sections.quotes.featured.context}
              </p>
            </div>

            <div className="text-center mt-8">
              <a 
                href="/quotes" 
                className={`cta-button-secondary ${isRTL ? 'rtl font-urdu' : ''}`}
              >
                {currentLang === 'en' ? 'View All Quotes' : 
                 currentLang === 'ur' ? 'تمام اقتباسات دیکھیں' : 
                 'ټول اقتباسونه وګورئ'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
