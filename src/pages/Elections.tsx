import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Elections: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Elections</h1>
            <p className="text-xl text-muted-foreground">
              Contested NA-8 Bajaur by-poll (Apr 21, 2024); received 12,019 votes (ECP consolidated).
            </p>
          </header>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">NA-8 Bajaur By-Election 2024</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Election Details</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Date:</strong> April 21, 2024</li>
                    <li><strong>Constituency:</strong> NA-8 Bajaur</li>
                    <li><strong>Candidate:</strong> Maulana Khan Zeb (ANP)</li>
                    <li><strong>Votes Received:</strong> 12,019</li>
                    <li><strong>Registered Voters:</strong> ~664,000</li>
                    <li><strong>Male Voters:</strong> 363,000</li>
                    <li><strong>Female Voters:</strong> 301,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Background</h3>
                  <p className="text-muted-foreground mb-3">
                    After the earlier assassination of candidate Rehan Zeb Khan, NA-8 polls were rescheduled; by-election held 21 Apr 2024.
                  </p>
                  <p className="text-muted-foreground">
                    Independent candidate Mubarak Zeb Khan won the election, while Maulana Khan Zeb represented the ANP's platform of peace and progressive politics.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Campaign Platform</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Peace</h3>
                  <p className="text-sm text-muted-foreground">
                    Anti-militancy initiatives and community-led peace building
                  </p>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Mother-tongue instruction and cultural preservation
                  </p>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Rights</h3>
                  <p className="text-sm text-muted-foreground">
                    Constitutional rights and democratic participation
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Electoral Legacy</h2>
              <p className="text-muted-foreground mb-4">
                Despite not winning, Maulana Khan Zeb's electoral participation demonstrated the viability of peaceful, democratic engagement in a region often dominated by violence and extremism.
              </p>
              <p className="text-muted-foreground">
                His campaign brought together diverse constituencies around a message of peace, education, and cultural dignity—a platform that continued to guide his activism until his assassination.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Electoral Context</h2>
              <p className="text-muted-foreground">
                The 2024 by-election took place in a challenging security environment, with the earlier assassination of candidate Rehan Zeb Khan highlighting the risks faced by political figures in the region. Maulana Khan Zeb's decision to contest despite these dangers exemplified his commitment to democratic processes and peaceful political engagement.<sup>1</sup>
              </p>
            </Card>
          </div>

          <footer className="text-sm text-muted-foreground border-t pt-4 mt-8">
            <h4 className="font-semibold mb-2">Sources</h4>
            <ol className="space-y-1">
              <li>1. <a href="https://www.electionpakistani.com/ge2024/NA-8.htm" className="text-primary hover:underline">ECP NA-8</a>, <a href="https://www.geo.tv/election/NA-8" className="text-primary hover:underline">Geo NA-8</a>, <a href="https://www.bajaur.com/ambassador-of-peace-who-was-maulana-khan-zeb/" className="text-primary hover:underline">Bajaur Profile</a></li>
            </ol>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Elections;