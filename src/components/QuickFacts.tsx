import React from 'react';

interface QuickFactsProps {
  currentLang: string;
}

const QuickFacts: React.FC<QuickFactsProps> = ({ currentLang }) => {
  const facts = {
    full_name: "Maulana Khan Zeb (Khanzeb/Khanzaib)",
    origin: "Nawagai Tehsil, Bajaur District, Khyber Pakhtunkhwa (Salarzai-Shaykhan lineage)",
    education: "Matric Govt High School Nawagai; Dars-e-Nizami Islamic studies graduate (1999)",
    political_affiliation: "Awami National Party (ANP); Central Secretary for Ulema Affairs",
    election_2024: "Contested NA-8 Bajaur by-poll Apr 21 2024; 12,019 votes (ECP consolidated)",
    major_work: "'Bajaur Da Treekh Pa Rana Kay' (Bajaur in the Light of History) – 438pp Pashto history (2021, Mafkoora)",
    known_for: "Peace marches (Aman Pasoon), Pashto/mother-tongue education advocacy, bridging ulema & secular Pashtun politics",
    died: "July 10, 2025 – Targeted gun attack at Shindai Mor near Khar while mobilising for peace march",
    burial: "Nawagai hometown; funeral attended by thousands"
  };

  const getLabels = (lang: string) => {
    const labels = {
      en: {
        title: "Quick Facts",
        full_name: "Full Name",
        origin: "Origin",
        education: "Education",
        political_affiliation: "Political Affiliation",
        election_2024: "2024 Election",
        major_work: "Major Work",
        known_for: "Known For",
        died: "Martyred",
        burial: "Burial"
      },
      ur: {
        title: "اہم حقائق",
        full_name: "پورا نام",
        origin: "آبائی علاقہ",
        education: "تعلیم",
        political_affiliation: "سیاسی وابستگی",
        election_2024: "2024 انتخابات",
        major_work: "اہم کام",
        known_for: "شہرت",
        died: "شہادت",
        burial: "تدفین"
      },
      ps: {
        title: "مهم معلومات",
        full_name: "بشپړ نوم",
        origin: "اصلي ځای",
        education: "زده کړې",
        political_affiliation: "سیاسي اړیکه",
        election_2024: "د 2024 ټاکنې",
        major_work: "مهم کار",
        known_for: "پېژندنه",
        died: "شهادت",
        burial: "ښخول"
      }
    };
    return labels[lang as keyof typeof labels] || labels.en;
  };

  const labels = getLabels(currentLang);
  const isRTL = currentLang === 'ur' || currentLang === 'ps';

  return (
    <section className="memorial-card" aria-labelledby="quick-facts-title">
      <h2 id="quick-facts-title" className={`text-heading font-bold mb-6 ${isRTL ? 'rtl font-urdu' : ''}`}>
        {labels.title}
      </h2>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="facts-table">
          <tbody>
            {Object.entries(facts).map(([key, value]) => (
              <tr key={key}>
                <th className={`w-1/3 ${isRTL ? 'rtl font-urdu' : ''}`}>
                  {labels[key as keyof typeof labels]}
                </th>
                <td className={`${isRTL ? 'rtl font-urdu' : ''}`}>
                  {value}
                  {key === 'died' && (
                    <span className="block text-sm text-muted-foreground mt-1">
                      {currentLang === 'en' ? 'May his soul rest in peace' : 
                       currentLang === 'ur' ? 'اللہ تعالیٰ ان کو جنت الفردوس میں اعلیٰ مقام عطا فرمائے' :
                       'دده روح دې ښه ځای ولري'}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Definition List */}
      <dl className="facts-dl md:hidden">
        {Object.entries(facts).map(([key, value]) => (
          <div key={key} className={`${isRTL ? 'rtl' : ''}`}>
            <dt className={`${isRTL ? 'font-urdu' : ''}`}>
              {labels[key as keyof typeof labels]}
            </dt>
            <dd className={`${isRTL ? 'font-urdu' : ''}`}>
              {value}
              {key === 'died' && (
                <span className="block text-sm text-muted-foreground mt-1">
                  {currentLang === 'en' ? 'May his soul rest in peace' : 
                   currentLang === 'ur' ? 'اللہ تعالیٰ ان کو جنت الفردوس میں اعلیٰ مقام عطا فرمائے' :
                   'دده روح دې ښه ځای ولري'}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default QuickFacts;