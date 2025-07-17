import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from '../components/Layout';
import { Calendar, MapPin, GraduationCap, Users } from 'lucide-react';

const Biography = () => {
  const { currentLang } = useLanguage();

  const getContent = (lang: string) => {
    const content = {
      en: {
        title: "Biography",
        subtitle: "The Life of Maulana Khan Zeb",
        sections: [
          {
            title: "Early Life & Family",
            icon: MapPin,
            content: "Born in Nawagai Tehsil (Bajaur District) into the Salarzai-Shaykhan branch of the Tarkalani tribe; family roots in Char Mang & Nawagai; kin network extends to Sheikh Kalay near Mathra, Peshawar."
          },
          {
            title: "Education & Religious Training",
            icon: GraduationCap,
            content: "Completed matriculation at Government High School Nawagai; graduated with Dars-e-Nizami (Islamic studies) in 1999; widely respected locally as a young alim."
          },
          {
            title: "Community Engagement",
            icon: Users,
            content: "Led study circles, spoke on radio & in hujras about history, Islamic ethics, and nonviolence. Bridged religious scholarship with contemporary social issues."
          },
          {
            title: "Political Journey",
            icon: Calendar,
            content: "Family ties to ANP through brother Sheikh Jehanzada; served as Central Secretary for Ulema Affairs in party's central cabinet, bringing religious perspective to secular Pashtun politics."
          }
        ]
      },
      ur: {
        title: "سوانح حیات",
        subtitle: "مولانا خان زیب کی زندگی",
        sections: [
          {
            title: "ابتدائی زندگی اور خاندان",
            icon: MapPin,
            content: "نواگئی تحصیل (باجوڑ ضلع) میں ترکلانی قبیلے کی صالح زئی-شیخان شاخ میں پیدا ہوئے؛ خاندانی جڑیں چار منگ اور نواگئی میں؛ رشتہ دار نیٹ ورک پشاور کے قریب شیخ کلے تک پھیلا ہوا ہے۔"
          },
          {
            title: "تعلیم اور مذہبی تربیت",
            icon: GraduationCap,
            content: "گورنمنٹ ہائی سکول نواگئی سے میٹرک مکمل کیا؛ 1999 میں درس نظامی (اسلامی علوم) سے فارغ التحصیل؛ مقامی طور پر ایک نوجوان عالم کے طور پر بہت احترام۔"
          },
          {
            title: "کمیونٹی کی شمولیت",
            icon: Users,
            content: "مطالعاتی حلقوں کی قیادت کی، ریڈیو پر اور حجروں میں تاریخ، اسلامی اخلاقیات، اور عدم تشدد کے بارے میں بات کی۔ مذہبی علم کو عصری سماجی مسائل سے جوڑا۔"
          },
          {
            title: "سیاسی سفر",
            icon: Calendar,
            content: "بھائی شیخ جہان زادہ کے ذریعے ANP سے خاندانی روابط؛ پارٹی کی مرکزی کابینہ میں علماء امور کے مرکزی سیکرٹری کے طور پر خدمات انجام دیں، سیکولر پشتون سیاست میں مذہبی نقطہ نظر لائے۔"
          }
        ]
      },
      ps: {
        title: "سوانح",
        subtitle: "د مولانا خان زیب ژوند",
        sections: [
          {
            title: "لومړنی ژوند او کورنۍ",
            icon: MapPin,
            content: "د نواګئي په تحصیل (د باجوړ ولسوالۍ) کې د ترکلاني د قام د سالارزي-شیخان څانګه کې زیږیدلی؛ کورنۍ ریښې په چار منګ او نواګئي کې؛ د خپلوانو شبکه د پیښور ته نږدې شیخ کلي ته غزیدلې."
          },
          {
            title: "زده کړې او دیني روزنه",
            icon: GraduationCap,
            content: "د نواګئي دولتي لیسه کې میټرک بشپړ کړ؛ په 1999 کې د درس نظامي (اسلامي علومو) څخه فارغ شو؛ په سیمه کې د یو ځوان عالم په توګه خورا درناوی."
          },
          {
            title: "د ټولنې ګډون",
            icon: Users,
            content: "د مطالعاتو د حلقو مشري یې کړې، په راډیو کې او حجرو کې یې د تاریخ، اسلامي اخلاقو، او د عدم تشدد په اړه خبرې کړې. دیني پوهه یې د معاصرو ټولنیزو مسلو سره تړلې."
          },
          {
            title: "سیاسي سفر",
            icon: Calendar,
            content: "د ورور شیخ جهان زاده له لارې د ANP سره کورنۍ اړیکې؛ د ګوند په مرکزي کابینه کې د علماوو چارو د مرکزي منشي په توګه یې خدماتو ترسره کړل، په سیکولار پښتون سیاست کې یې ديني لیدلوری راوړ."
          }
        ]
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="biography">
      {/* Page Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-hero font-bold mb-4 ${isRTL ? 'rtl font-urdu' : ''}`}>
              {content.title}
            </h1>
            <p className={`text-subheading text-muted-foreground ${isRTL ? 'rtl font-urdu' : ''}`}>
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {content.sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="memorial-card">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-3 ${isRTL ? 'rtl font-urdu' : ''}`}>
                          {section.title}
                        </h3>
                        <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'rtl font-urdu' : ''}`}>
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation to other sections */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/scholarship" 
                  className={`cta-button ${isRTL ? 'rtl font-urdu' : ''}`}
                >
                  {currentLang === 'en' ? 'His Scholarship' : 
                   currentLang === 'ur' ? 'ان کا علمی کام' : 
                   'د هغه علمي کار'}
                </a>
                <a 
                  href="/peace" 
                  className={`cta-button-secondary ${isRTL ? 'rtl font-urdu' : ''}`}
                >
                  {currentLang === 'en' ? 'Peace Work' : 
                   currentLang === 'ur' ? 'امن کا کام' : 
                   'د سولې کار'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Biography;