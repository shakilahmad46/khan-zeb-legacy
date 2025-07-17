import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, FileText } from 'lucide-react';

const Resources: React.FC = () => {
  const sources = [
    { key: "Dawn-10Jul2025", title: "ANP leader Maulana Khan Zeb gunned down in KP's Bajaur", url: "https://www.dawn.com/news/1923308/anp-leader-maulana-khan-zeb-gunned-down-in-kps-bajaur-police", type: "News Report" },
    { key: "Dawn-FIR", title: "FIR registered in Maulana Khan Zeb assassination", url: "https://www.dawn.com/news/1923530", type: "Investigation" },
    { key: "Tribune-10Jul2025", title: "Awami National Party leader Maulana Khan Zeb shot dead in Bajaur", url: "https://tribune.com.pk/story/2555169/awami-national-party-leader-maulana-khan-zeb-shot-dead-in-bajaur", type: "News Report" },
    { key: "FridayTimes", title: "Maulana Khan Zeb's legacy and the cost of KP's counterterrorism failure", url: "https://thefridaytimes.com/11-Jul-2025/maulana-khan-zeb-s-legacy-and-the-cost-of-kp-s-counterterrorism-failure", type: "Analysis" },
    { key: "BajaurProfile", title: "Ambassador of Peace: Who was Maulana Khan Zeb?", url: "https://www.bajaur.com/ambassador-of-peace-who-was-maulana-khan-zeb/", type: "Profile" },
    { key: "Dawn-Book2021", title: "Book Review: Bajaur Da Treekh Pa Rana Kay", url: "https://www.dawn.com/news/1621648", type: "Book Review" },
    { key: "TheNews-Book2021", title: "Book on Bajaur history a crash course for researchers", url: "https://www.thenews.com.pk/print/826290-book-on-bajaur-history-a-crash-course-for-researchers-historians", type: "Book Review" },
    { key: "ECP-NA8", title: "NA-8 Bajaur Election Results 2024", url: "https://www.electionpakistani.com/ge2024/NA-8.htm", type: "Election Data" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground">
              Books, articles, documents, and materials related to Maulana Khan Zeb's life and work.
            </p>
          </header>

          <div className="space-y-8">
            <Card className="p-6" id="book">
              <div className="flex items-start gap-4">
                <BookOpen className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">Bajaur Da Treekh Pa Rana Kay</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold mb-3">Book Information</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Title:</strong> Bajaur Da Treekh Pa Rana Kay</li>
                        <li><strong>Language:</strong> Pashto</li>
                        <li><strong>Pages:</strong> 438</li>
                        <li><strong>Year:</strong> 2021</li>
                        <li><strong>Publisher:</strong> Mafkoora (Peshawar)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Abstract</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive Pashto history of Bajaur—geography, peoples, heritage, folklore—used by scholars and cultural groups.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Download Info (PDF)
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Publisher Website
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Articles and Media Coverage</h2>
              <div className="space-y-4">
                {sources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{source.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{source.type}</p>
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        {source.url}
                      </a>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Educational Materials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Study Guides</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Biography Summary (English/Urdu/Pashto)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Timeline of Key Events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Reading Circle Discussion Guide</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Memorial Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Social Media Quote Cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Print-Ready Tributes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Event Commemoration Kit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Archive Collections</h2>
              <div className="space-y-4">
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Photo Archive</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Historical photographs of Maulana Khan Zeb at peace marches, community events, and political gatherings.
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Archive
                  </Button>
                </div>
                
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Speech Recordings</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Audio recordings of speeches and presentations on peace, education, and cultural preservation.
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Access Audio
                  </Button>
                </div>
                
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Document Collection</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Letters, statements, and writings that provide insight into his thoughts on peace and governance.
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    View Documents
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Research Requests</h2>
              <p className="text-muted-foreground mb-4">
                Researchers, journalists, and students seeking additional materials or permissions for academic work can submit requests through our research committee.
              </p>
              <div className="flex gap-3">
                <Button>Submit Research Request</Button>
                <Button variant="outline">Research Guidelines</Button>
              </div>
            </Card>
          </div>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Usage and Attribution</h4>
            <p className="mb-2">
              All materials are provided for educational and memorial purposes. When using these resources, please provide proper attribution to Maulana Khan Zeb and cite original sources where indicated.
            </p>
            <p className="mb-2">
              For commercial use or republication, please contact the memorial committee for permissions.
            </p>
            <p>
              <strong>Contact:</strong> memorial@khanzeb.org | <strong>Archive maintained by:</strong> Bajaur Cultural Heritage Society
            </p>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;