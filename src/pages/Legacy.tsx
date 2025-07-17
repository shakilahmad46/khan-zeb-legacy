import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Heart, Archive } from 'lucide-react';

const Legacy: React.FC = () => {
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
        title: "Legacy",
        subtitle: "Continue his mission: education, inter-tribal unity, nonviolent struggle for rights in Pakistan's borderlands.",
        mission: "The Mission Continues",
        actions: "Take Action",
        reading: "Start a Reading Circle",
        education: "Support Mother-Tongue Education",
        peace: "Join Peace Marches",
        heritage: "Document Local Heritage"
      },
      ur: {
        title: "وراثت",
        subtitle: "ان کے مشن کو جاری رکھیں: تعلیم، قبائلی اتحاد، پاکستان کے سرحدی علاقوں میں حقوق کے لیے عدم تشدد کی جدوجہد۔",
        mission: "مشن جاری ہے",
        actions: "عمل کریں",
        reading: "مطالعاتی حلقہ شروع کریں",
        education: "مادری زبان کی تعلیم کی حمایت کریں",
        peace: "امن مارچ میں شامل ہوں",
        heritage: "مقامی ورثے کو محفوظ کریں"
      },
      ps: {
        title: "میراث",
        subtitle: "د هغه ماموریت ته دوام ورکړئ: زده کړه، د قبایلو اتحاد، د پاکستان په پولو کې د حقونو لپاره غیر تشدد مبارزه۔",
        mission: "ماموریت دوام لري",
        actions: "عمل وکړئ",
        reading: "د لوستلو حلقه پیل کړئ",
        education: "د میندنۍ ژبې زده کړو ملاتړ وکړئ",
        peace: "د سولې په لاریونونو کې برخه واخلئ",
        heritage: "سیمه ایز میراث مستند کړئ"
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="legacy">
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
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-primary">The Bridge Builder</h2>
              <p className="text-muted-foreground mb-4">
                Bridge figure: madrasa-trained alim working within a secular party to resist militancy & neglect.<sup>1</sup>
              </p>
              <p className="text-muted-foreground">
                Maulana Khan Zeb represented a unique synthesis of religious scholarship and progressive politics, demonstrating that Islamic principles and democratic values could work together in the pursuit of peace and justice.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Knowledge as Peacebuilding</h2>
              <p className="text-muted-foreground mb-6">
                Culture, language & local history reduce appeal of extremism.<sup>2</sup> His approach recognized that sustainable peace requires not just security operations, but cultural empowerment and educational opportunity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Cultural Preservation</h3>
                  <p className="text-sm text-muted-foreground">
                    Documenting local history and traditions to strengthen community identity and resist extremist narratives.
                  </p>
                </div>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Educational Empowerment</h3>
                  <p className="text-sm text-muted-foreground">
                    Promoting mother-tongue education and critical thinking to build resilient communities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Continue His Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Start a Reading Circle</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Study chapters from "Bajaur Da Treekh Pa Rana Kay" to understand local heritage and promote cultural awareness.
                      </p>
                      <Button variant="outline" size="sm">Download Chapter Summaries</Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-lg">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Support Mother-Tongue Education</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Advocate for Pashto language instruction in schools and educational institutions.
                      </p>
                      <Button variant="outline" size="sm">Get Petition Kit</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-lg">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Join Peace Marches</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Participate in community-led peace initiatives and nonviolent resistance movements.
                      </p>
                      <Button variant="outline" size="sm">Sign Up for Alerts</Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-lg">
                    <Archive className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Document Local Heritage</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Help preserve oral histories, folklore, and cultural traditions of your community.
                      </p>
                      <Button variant="outline" size="sm">Upload Stories</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Support Peace Education</h2>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Memorial Education Fund</h3>
                <p className="text-muted-foreground mb-4">
                  Help establish educational programs that continue Maulana Khan Zeb's work in promoting peace through knowledge, cultural preservation, and community empowerment.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold">Reading Programs</h4>
                    <p className="text-sm text-muted-foreground">Community libraries and book circles</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Cultural Documentation</h4>
                    <p className="text-sm text-muted-foreground">Oral history and heritage projects</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Peace Education</h4>
                    <p className="text-sm text-muted-foreground">Conflict resolution workshops</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Support the Fund
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Enduring Principles</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-secondary/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Knowledge as the foundation of lasting peace
                  </p>
                </div>
                <div className="text-center p-4 border border-secondary/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Unity</h3>
                  <p className="text-sm text-muted-foreground">
                    Bridging religious and secular divides
                  </p>
                </div>
                <div className="text-center p-4 border border-secondary/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Nonviolence</h3>
                  <p className="text-sm text-muted-foreground">
                    Democratic engagement over armed struggle
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Sources</h4>
            <ol className="space-y-1">
              <li>1. <a href="https://thefridaytimes.com/11-Jul-2025/maulana-khan-zeb-s-legacy-and-the-cost-of-kp-s-counterterrorism-failure" className="text-primary hover:underline">Friday Times</a>, <a href="https://dailytimes.com.pk/1333048/anps-peace-champion-maulana-khan-zeb-killed-in-bajaur-gun-attack/" className="text-primary hover:underline">Daily Times</a>, <a href="https://www.dawn.com/news/1923308/anp-leader-maulana-khan-zeb-gunned-down-in-kps-bajaur-police" className="text-primary hover:underline">Dawn</a></li>
              <li>2. <a href="https://thefridaytimes.com/11-Jul-2025/maulana-khan-zeb-s-legacy-and-the-cost-of-kp-s-counterterrorism-failure" className="text-primary hover:underline">Friday Times</a>, <a href="https://www.thenews.com.pk/print/826290-book-on-bajaur-history-a-crash-course-for-researchers-historians" className="text-primary hover:underline">The News Book Review</a>, <a href="https://www.dawn.com/news/1621648" className="text-primary hover:underline">Dawn Book Review</a></li>
            </ol>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Legacy;