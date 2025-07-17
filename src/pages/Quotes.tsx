import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Share, Download } from 'lucide-react';

const Quotes: React.FC = () => {
  const quotes = [
    {
      quote: "Grieved to learn about the assassination of Maulana Khan Zeb… a staunch advocate for peace.",
      attrib: "Prime Minister Shehbaz Sharif",
      date: "July 11, 2025",
      src: ["APP-PM", "Radio-PM"]
    },
    {
      quote: "This attack is not only on the ANP but on Pashtun consciousness and peace.",
      attrib: "Mian Iftikhar Hussain, ANP KP President",
      date: "July 10, 2025",
      src: ["Dawn-10Jul2025", "PakistanToday-11Jul2025"]
    },
    {
      quote: "He was one of the leading peace campaigners in a terror-hit region.",
      attrib: "HRCP (statement summarized)",
      date: "July 12, 2025",
      src: ["PakistanToday-12Jul2025", "Dawn-FIR"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Quotes</h1>
            <p className="text-xl text-muted-foreground">
              Tributes and reflections on Maulana Khan Zeb's life and legacy from national leaders and organizations.
            </p>
          </header>

          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                      "{quote.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="font-semibold text-muted-foreground">
                          — {quote.attrib}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {quote.date}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Share These Messages</h2>
            <p className="text-muted-foreground mb-6">
              Help spread awareness of Maulana Khan Zeb's legacy by sharing these quotes and tributes on social media. Each quote is formatted for easy sharing across platforms.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold mb-2">Social Media Cards</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Download pre-formatted quote cards for Facebook, Twitter, and Instagram
                </p>
                <Button variant="outline" size="sm">Download Cards</Button>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold mb-2">Text Formats</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Copy-ready text versions for posts and messages
                </p>
                <Button variant="outline" size="sm">Copy Text</Button>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold mb-2">Print Materials</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  PDF versions for memorial events and gatherings
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Additional Tributes</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic">
                  "Maulana Khan Zeb represented the best of both worlds - deep religious knowledge combined with progressive political thought. His assassination is a loss not just for the ANP, but for all who believe in peaceful change."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Civil society tribute</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-muted-foreground italic">
                  "His book on Bajaur history will remain a testament to his belief that knowledge and culture are the foundations of lasting peace."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Academic community</p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <p className="text-muted-foreground italic">
                  "He showed us that we could be proud of our Islamic heritage while working for democratic rights and peaceful coexistence."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Community elder, Nawagai</p>
              </div>
            </div>
          </Card>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Share Guidelines</h4>
            <p className="mb-2">
              When sharing quotes and tributes, please maintain their original context and attribution. These materials are provided to honor Maulana Khan Zeb's memory and continue his message of peace and education.
            </p>
            <p>
              For high-resolution images or additional formats, please contact the memorial committee.
            </p>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Quotes;