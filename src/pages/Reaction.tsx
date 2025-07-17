import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Heart, Flag } from 'lucide-react';

const Reaction: React.FC = () => {
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
        title: "National Response & Mourning",
        subtitle: "National grief; ANP 3-day mourning; PM Shehbaz praised him as a 'staunch advocate for peace'; huge funeral in Nawagai.",
        pmTribute: "Prime Minister's Tribute",
        anpResponse: "ANP Leadership Response",
        civilSociety: "Civil Society & Rights Groups",
        communityMourning: "Community Mourning",
        mediaCoverage: "Media Coverage",
        lastingImpact: "Lasting Impact",
        sources: "Sources"
      },
      ur: {
        title: "قومی ردعمل اور سوگ",
        subtitle: "قومی غم؛ ANP کا 3 دن کا سوگ؛ وزیراعظم شہباز نے انہیں 'امن کا مضبوط وکیل' قرار دیا؛ نواگئی میں بڑا جنازہ۔",
        pmTribute: "وزیراعظم کا خراج تحسین",
        anpResponse: "ANP قیادت کا ردعمل",
        civilSociety: "سول سوسائٹی اور حقوق کے گروپس",
        communityMourning: "کمیونٹی کا سوگ",
        mediaCoverage: "میڈیا کوریج",
        lastingImpact: "دیرپا اثرات",
        sources: "ذرائع"
      },
      ps: {
        title: "ملي غبرګون او ماتم",
        subtitle: "ملي غم؛ د ANP د ۳ ورځو ماتم؛ لومړي وزیر شهباز هغه د 'د سولې کلک مدافع' وباله؛ په نواګۍ کې لویه جنازه۔",
        pmTribute: "د لومړي وزیر درناوی",
        anpResponse: "د ANP مشرتابه غبرګون",
        civilSociety: "مدني ټولنه او د حقونو ډلې",
        communityMourning: "د ټولنې ماتم",
        mediaCoverage: "د رسنیو پوښښ",
        lastingImpact: "اوږدمهاله اغیزې",
        sources: "سرچینې"
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="reaction">
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
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Prime Minister's Tribute</h2>
                  <blockquote className="text-lg italic text-muted-foreground mb-4 border-l-4 border-primary pl-4">
                    "Very fine soul… staunch advocate for peace."
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    — Prime Minister Shehbaz Sharif<sup>1</sup>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <Flag className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">ANP Leadership Response</h2>
                  <p className="text-muted-foreground mb-4">
                    ANP leaders Aimal Wali Khan & Mian Iftikhar condemned attack; 3-day mourning (black flags, activities suspended).<sup>2</sup>
                  </p>
                  
                  <div className="bg-accent/20 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold mb-2">Official Mourning Period</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Three days of official mourning declared</li>
                      <li>• Black flags hoisted at ANP offices</li>
                      <li>• All party activities suspended</li>
                      <li>• Condemnation statements issued</li>
                    </ul>
                  </div>

                  <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                    "This attack is not only on the ANP but on Pashtun consciousness and peace."
                  </blockquote>
                  <p className="text-sm text-muted-foreground mt-2">
                    — Mian Iftikhar Hussain, ANP KP President
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Civil Society & Rights Groups</h2>
              <p className="text-muted-foreground mb-4">
                HRCP & civil society demanded impartial inquiry & better security for border districts.<sup>3</sup>
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">HRCP Statement</h3>
                  <p className="text-sm text-muted-foreground">
                    "He was one of the leading peace campaigners in a terror-hit region."
                  </p>
                </div>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Demands</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Impartial investigation</li>
                    <li>• Enhanced security for activists</li>
                    <li>• Protection of civil society workers</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Community Mourning</h2>
              <p className="text-muted-foreground mb-4">
                Thousands attended funeral prayers in Nawagai.<sup>4</sup>
              </p>
              
              <div className="bg-accent/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Funeral Details</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><strong>Location:</strong> Nawagai hometown</li>
                  <li><strong>Attendance:</strong> Thousands of mourners</li>
                  <li><strong>Participants:</strong> Religious leaders, political figures, community members</li>
                  <li><strong>Atmosphere:</strong> Grief mixed with calls for justice and peace</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Media Coverage</h2>
              <p className="text-muted-foreground mb-4">
                National and regional media extensively covered the assassination, highlighting Maulana Khan Zeb's role as a peace advocate and the broader implications for security in the tribal districts.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">National Coverage</h3>
                  <p className="text-sm text-muted-foreground">
                    Dawn, Tribune, Pakistan Today
                  </p>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Friday Times, Daily Times
                  </p>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Regional Media</h3>
                  <p className="text-sm text-muted-foreground">
                    TNN, Bajaur.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Lasting Impact</h2>
              <p className="text-muted-foreground">
                The widespread mourning and condemnation following Maulana Khan Zeb's assassination demonstrated the broad respect he commanded across political, religious, and social divides. His death galvanized calls for better protection of civil society workers and renewed commitment to his message of peace and nonviolent resistance.
              </p>
            </Card>
          </div>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Sources</h4>
            <ol className="space-y-1">
              <li>1. <a href="https://www.app.com.pk/national/pm-grieved-over-assassination-of-anps-maulana-khan-zeb-in-bajaur/" className="text-primary hover:underline">APP PM</a>, <a href="https://www.radio.gov.pk/11-07-2025/pm-expresses-grief-over-assassination-of-maulana-khan-zeb-in-bajaur-terror-attack" className="text-primary hover:underline">Radio PM</a></li>
              <li>2. <a href="https://www.dawn.com/news/1923308/anp-leader-maulana-khan-zeb-gunned-down-in-kps-bajaur-police" className="text-primary hover:underline">Dawn</a>, <a href="https://www.pakistantoday.com.pk/2025/07/11/anps-maulana-khanzaib-cop-shot-dead-in-bajaur-targeted-attack/" className="text-primary hover:underline">Pakistan Today</a></li>
              <li>3. <a href="https://www.dawn.com/news/1923530" className="text-primary hover:underline">Dawn FIR</a>, <a href="https://www.pakistantoday.com.pk/2025/07/12/thousands-attend-funeral-of-anps-slain-maulana-khanzaib-as-ctd-books-unidentified-attackers/" className="text-primary hover:underline">Pakistan Today</a></li>
              <li>4. <a href="https://www.pakistantoday.com.pk/2025/07/12/thousands-attend-funeral-of-anps-slain-maulana-khanzaib-as-ctd-books-unidentified-attackers/" className="text-primary hover:underline">Pakistan Today</a>, <a href="https://tribune.com.pk/story/2555169/awami-national-party-leader-maulana-khan-zeb-shot-dead-in-bajaur" className="text-primary hover:underline">Tribune</a></li>
            </ol>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Reaction;