import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const Assassination: React.FC = () => {
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
        title: "Assassination",
        subtitle: "Killed Jul 10, 2025 in targeted gun attack at Shindai Mor near Khar while mobilising for Jul 13 peace march.",
        attackDetails: "Attack Details",
        investigation: "Investigation",
        community: "Community Response",
        sources: "Sources"
      },
      ur: {
        title: "شہادت",
        subtitle: "10 جولائی 2025 کو 13 جولائی کے امن مارچ کے لیے تیاری کرتے وقت کھر کے قریب شندائی مور میں ہدف بندی شدہ بندوق کے حملے میں شہید۔",
        attackDetails: "حملے کی تفصیلات",
        investigation: "تحقیقات",
        community: "کمیونٹی کا ردعمل",
        sources: "ذرائع"
      },
      ps: {
        title: "شهادت",
        subtitle: "د ۲۰۲۵ کال د جولای په ۱۰ د جولای د ۱۳ د سولې لاریون لپاره چمتووالی پر مهال د خار څخه نږدې په شندي مور کې د هدفي بریدونو په ترڅ کې شهید شو۔",
        attackDetails: "د برید توضیحات",
        investigation: "پلټنه",
        community: "د ټولنې غبرګون",
        sources: "سرچینې"
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="assassination">
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
            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-destructive">July 10, 2025 - Targeted Attack</h2>
                  <p className="text-muted-foreground mb-4">
                    Attackers on motorcycles opened fire on his vehicle near Khar HQ. Police escort Sepahi Sher Zada also killed; companions incl. Dr Tariq, Shahsawar, Usman injured.<sup>1</sup>
                  </p>
                  <p className="text-muted-foreground">
                    The attack occurred while Maulana Khan Zeb was mobilizing community support for a peace march scheduled for July 13, 2025.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Attack Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Incident Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Location:</strong> Shindai Mor near Khar HQ</li>
                    <li><strong>Method:</strong> Targeted gun attack</li>
                    <li><strong>Attackers:</strong> Five shooters on two motorcycles</li>
                    <li><strong>Evidence:</strong> 35 bullet casings recovered</li>
                    <li><strong>Investigation:</strong> Geo-fencing two locations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Casualties</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Killed:</strong> Maulana Khan Zeb, Sepahi Sher Zada (police escort)</li>
                    <li><strong>Injured:</strong> Dr Tariq, Shahsawar, Usman</li>
                  </ul>
                  <h3 className="font-semibold mb-3 mt-4">Legal Action</h3>
                  <p className="text-sm text-muted-foreground">
                    FIR filed under Sections 302, 324, 427 PPC and Section 7 ATA
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Immediate Response</h2>
              <p className="text-muted-foreground mb-4">
                Locals rushed victims; protests erupted placing his body in Khar Bazaar.<sup>2</sup>
              </p>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Community Reaction</h3>
                <p className="text-sm text-muted-foreground">
                  The local community's immediate response demonstrated the deep respect and affection they held for Maulana Khan Zeb. Spontaneous protests broke out as news of the assassination spread.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Investigation</h2>
              <p className="text-muted-foreground mb-4">
                Counter-Terrorism Dept FIR: Sec 302, 324, 427 PPC; Sec 7 ATA; 35 bullet casings; geo-fencing two locations; witnesses saw five shooters/two bikes.<sup>3</sup>
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Criminal Charges</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Section 302 PPC: Murder</li>
                    <li>Section 324 PPC: Attempted murder</li>
                    <li>Section 427 PPC: Mischief causing damage</li>
                    <li>Section 7 ATA: Anti-terrorism charges</li>
                  </ul>
                </div>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Evidence Collected</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>35 bullet casings recovered</li>
                    <li>Witness testimonies</li>
                    <li>Geo-fencing of two locations</li>
                    <li>Forensic analysis ongoing</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Context and Significance</h2>
              <p className="text-muted-foreground">
                The assassination of Maulana Khan Zeb represents a devastating blow to peace efforts in Bajaur and the broader region. His killing, while organizing for peace, underscores the challenges faced by those who choose nonviolent resistance over armed conflict. The targeted nature of the attack suggests it was carried out by those opposed to his message of peace and democratic engagement.
              </p>
            </Card>
          </div>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Sources</h4>
            <ol className="space-y-1">
              <li>1. <a href="https://tribune.com.pk/story/2555169/awami-national-party-leader-maulana-khan-zeb-shot-dead-in-bajaur" className="text-primary hover:underline">Tribune</a>, <a href="https://www.dawn.com/news/1923308/anp-leader-maulana-khan-zeb-gunned-down-in-kps-bajaur-police" className="text-primary hover:underline">Dawn</a>, <a href="https://www.dawn.com/news/1923530" className="text-primary hover:underline">Dawn FIR</a>, <a href="https://leadpakistan.com.pk/news/anp-leader-among-two-killed-in-bajaur/" className="text-primary hover:underline">Lead Pakistan</a></li>
              <li>2. <a href="https://leadpakistan.com.pk/news/anp-leader-among-two-killed-in-bajaur/" className="text-primary hover:underline">Lead Pakistan</a>, <a href="https://tribune.com.pk/story/2555169/awami-national-party-leader-maulana-khan-zeb-shot-dead-in-bajaur" className="text-primary hover:underline">Tribune</a></li>
              <li>3. <a href="https://www.dawn.com/news/1923530" className="text-primary hover:underline">Dawn FIR</a>, <a href="https://www.pakistantoday.com.pk/2025/07/12/thousands-attend-funeral-of-anps-slain-maulana-khanzaib-as-ctd-books-unidentified-attackers/" className="text-primary hover:underline">Pakistan Today</a></li>
            </ol>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Assassination;