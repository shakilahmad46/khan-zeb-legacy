import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Peace: React.FC = () => {
  const [currentLang, setCurrentLang] = React.useState('en');

  React.useEffect(() => {
    const savedLang = localStorage.getItem('memorial-site-lang');
    if (savedLang && ['en', 'ur', 'ps'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const getContent = (lang: string) => {
    const content = {
      en: {
        title: "Peace & Politics",
        subtitle: "ANP cleric who mobilised mosques & community forums for anti-militancy peace marches across Bajaur.",
        faithMeetsNationalism: "Faith Meets Secular Pashtun Nationalism",
        grassrootsMarches: "Grassroots Peace Marches",
        motherTongue: "Mother-Tongue Education",
        legacyOfPeace: "Legacy of Peaceful Resistance",
        amanPasoon: "Aman Pasoon (Peace Parade)",
        sources: "Sources"
      },
      ur: {
        title: "امن و سیاست",
        subtitle: "ANP کے مذہبی رہنما جنہوں نے باجوڑ بھر میں عسکریت پسندی کے خلاف امن مارچ کے لیے مساجد اور کمیونٹی فورمز کو متحرک کیا۔",
        faithMeetsNationalism: "عقیدہ اور سیکولر پشتون قوم پرستی کا ملاپ",
        grassrootsMarches: "نچلی سطح پر امن مارچ",
        motherTongue: "مادری زبان کی تعلیم",
        legacyOfPeace: "پرامن مزاحمت کی میراث",
        amanPasoon: "امن پسون (امن پریڈ)",
        sources: "ذرائع"
      },
      ps: {
        title: "امن او سیاست",
        subtitle: "د ANP مذهبي مشر چې په باجوړ کې یې د تروریزم ضد د سولې لاریونونو لپاره جومات او د ټولنې فورمونه فعال کړل۔",
        faithMeetsNationalism: "عقیده او سیکولر پښتون ملتپالنه",
        grassrootsMarches: "د خلکو د سولې لاریونونه",
        motherTongue: "د میندنۍ ژبې زده کړه",
        legacyOfPeace: "د سوله ایزه مقاومت میراث",
        amanPasoon: "امن پسون (د سولې لاریون)",
        sources: "سرچینې"
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="peace">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className={`text-4xl font-bold text-foreground mb-4 ${isRTL ? 'rtl font-urdu' : ''}`}>
              {content.title}
            </h1>
            <p className={`text-xl text-muted-foreground ${isRTL ? 'rtl font-urdu' : ''}`}>
              {content.subtitle}
            </p>
          </header>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Faith Meets Secular Pashtun Nationalism</h2>
              <p className="text-muted-foreground mb-4">
                Bridged ulema leadership with ANP's progressive platform; argued Islam & constitutional rights align against extremism.<sup>1</sup>
              </p>
              <p className="text-muted-foreground">
                As a religious scholar within a secular political party, Maulana Khan Zeb represented a unique voice that could speak to both traditional religious communities and progressive political activists.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Grassroots Peace Marches</h2>
              <p className="text-muted-foreground mb-4">
                Organised Aman Pasoon / Peace Parade mobilisations drawing elders, youth & political workers.<sup>2</sup>
              </p>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Aman Pasoon (Peace Parade)</h3>
                <p className="text-sm text-muted-foreground">
                  These community-led peace marches brought together diverse segments of Bajaur society, from tribal elders to young activists, united in their commitment to nonviolent resistance against militancy.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Mother-Tongue Education</h2>
              <p className="text-muted-foreground">
                Linked durable peace to Pashto instruction & cultural dignity.<sup>3</sup> He believed that preserving and promoting Pashto language and culture was essential for building lasting peace and resisting extremist ideologies that sought to erase local identity.
              </p>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Legacy of Peaceful Resistance</h2>
              <p className="text-muted-foreground">
                Maulana Khan Zeb's approach to peace was rooted in the belief that sustainable security comes not from military operations alone, but from empowering communities through education, cultural preservation, and inclusive political participation.
              </p>
            </Card>
          </div>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Sources</h4>
            <ol className="space-y-1">
              <li>1. <a href="https://www.dawn.com/news/1923308/anp-leader-maulana-khan-zeb-gunned-down-in-kps-bajaur-police" className="text-primary hover:underline">Dawn</a>, <a href="https://dailytimes.com.pk/1333048/anps-peace-champion-maulana-khan-zeb-killed-in-bajaur-gun-attack/" className="text-primary hover:underline">Daily Times</a>, <a href="https://leadpakistan.com.pk/news/anp-leader-among-two-killed-in-bajaur/" className="text-primary hover:underline">Lead Pakistan</a></li>
              <li>2. <a href="https://tnnenglish.com/ambassador-of-peace-martyr-of-the-nation-who-was-maulana-khan-zeb-shaheed" className="text-primary hover:underline">TNN Profile</a>, <a href="https://leadpakistan.com.pk/news/anp-leader-among-two-killed-in-bajaur/" className="text-primary hover:underline">Lead Pakistan</a>, <a href="https://dailytimes.com.pk/1333048/anps-peace-champion-maulana-khan-zeb-killed-in-bajaur-gun-attack/" className="text-primary hover:underline">Daily Times</a></li>
              <li>3. <a href="https://thefridaytimes.com/11-Jul-2025/maulana-khan-zeb-s-legacy-and-the-cost-of-kp-s-counterterrorism-failure" className="text-primary hover:underline">Friday Times</a>, <a href="https://www.bajaur.com/ambassador-of-peace-who-was-maulana-khan-zeb/" className="text-primary hover:underline">Bajaur Profile</a></li>
            </ol>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Peace;