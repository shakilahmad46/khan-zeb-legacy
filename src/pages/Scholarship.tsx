import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Scholarship: React.FC = () => {
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
        title: "Scholarship",
        subtitle: "Author of the definitive Pashto history 'Bajaur Da Treekh Pa Rana Kay'—a richly sourced 438-page cultural survey.",
        bookTitle: "Bajaur Da Treekh Pa Rana Kay",
        bookDetails: "Book Details",
        significance: "Significance",
        contentOverview: "Content Overview",
        impact: "Impact",
        sources: "Sources"
      },
      ur: {
        title: "علمی کام",
        subtitle: "حتمی پشتو تاریخ 'باجوڑ دا تریخ پہ رنا کے' کے مصنف—ایک بھرپور 438 صفحات کا ثقافتی جائزہ۔",
        bookTitle: "باجوڑ دا تریخ پہ رنا کے",
        bookDetails: "کتاب کی تفصیلات",
        significance: "اہمیت",
        contentOverview: "مواد کا جائزہ",
        impact: "اثرات",
        sources: "ذرائع"
      },
      ps: {
        title: "علمي کار",
        subtitle: "د باجوړ د 'باجوړ دا تاریخ په رڼا کې' د حتمي پښتو تاریخ لیکوال—یوه بډایه 438 مخونو کلتوري سروې۔",
        bookTitle: "باجوړ دا تاریخ په رڼا کې",
        bookDetails: "د کتاب توضیحات",
        significance: "اهمیت",
        contentOverview: "د منځپانګې کتنه",
        impact: "اغیزې",
        sources: "سرچینې"
      }
    };
    return content[lang as keyof typeof content] || content.en;
  };

  const content = getContent(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <Layout currentPage="scholarship">
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

          <Card className="p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Bajaur Da Treekh Pa Rana Kay</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Book Details</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><strong>Title:</strong> Bajaur Da Treekh Pa Rana Kay</li>
                    <li><strong>Language:</strong> Pashto</li>
                    <li><strong>Pages:</strong> 438</li>
                    <li><strong>Year:</strong> 2021</li>
                    <li><strong>Publisher:</strong> Mafkoora (Peshawar)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Significance</h3>
                  <p className="text-muted-foreground">
                    Comprehensive Pashto history of Bajaur—geography, peoples, heritage, folklore—used by scholars and cultural groups.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Content Overview</h3>
              <p className="mb-4">
                Published 2021 (Mafkoora, Peshawar), 438 pages. Covers geography, minerals, tribal lineages, shrines, flora/fauna, folklore, and visits by historic figures (incl. Bacha Khan). Described as a "guideline" & "crash course" for researchers & cultural orgs.<sup>1</sup>
              </p>
              
              <p className="mb-4">
                Sixteen-chapter structure from etymology (Baaj+war) & archaeology to poetry & love tales (Sher Alam & Maimonai).<sup>2</sup>
              </p>
              
              <p className="mb-4">
                Reframes Bajaur beyond conflict headlines; knowledge as peacebuilding.<sup>3</sup>
              </p>

              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <p>
                The book stands as a comprehensive cultural survey that documents the rich heritage of Bajaur, moving beyond the region's association with conflict to highlight its deep historical roots, cultural traditions, and intellectual contributions.
              </p>
            </div>
          </Card>

          <footer className="text-sm text-muted-foreground border-t pt-4">
            <h4 className="font-semibold mb-2">Sources</h4>
            <ol className="space-y-1">
              <li>1. <a href="https://www.dawn.com/news/1621648" className="text-primary hover:underline">Dawn Book Review 2021</a>, <a href="https://www.thenews.com.pk/print/826290-book-on-bajaur-history-a-crash-course-for-researchers-historians" className="text-primary hover:underline">The News Book Review 2021</a></li>
              <li>2. <a href="https://www.thenews.com.pk/print/826290-book-on-bajaur-history-a-crash-course-for-researchers-historians" className="text-primary hover:underline">The News Book Review 2021</a>, <a href="https://www.dawn.com/news/1621648" className="text-primary hover:underline">Dawn Book Review 2021</a></li>
              <li>3. <a href="https://thefridaytimes.com/11-Jul-2025/maulana-khan-zeb-s-legacy-and-the-cost-of-kp-s-counterterrorism-failure" className="text-primary hover:underline">Friday Times</a>, <a href="https://www.dawn.com/news/1621648" className="text-primary hover:underline">Dawn Book Review 2021</a></li>
            </ol>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Scholarship;