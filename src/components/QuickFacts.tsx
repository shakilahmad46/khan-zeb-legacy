
import React from 'react';

interface QuickFactsProps {
  currentLang: string;
}

const QuickFacts: React.FC<QuickFactsProps> = ({ currentLang }) => {
  const getFactsContent = (lang: string) => {
    const factsContent = {
      en: {
        full_name: "Maulana Khan Zeb (Khanzeb/Khanzaib)",
        origin: "Nawagai Tehsil, Bajaur District, Khyber Pakhtunkhwa (Salarzai-Shaykhan lineage)",
        education: "Matric Govt High School Nawagai; Dars-e-Nizami Islamic studies graduate (1999)",
        political_affiliation: "Awami National Party (ANP); Central Secretary for Ulema Affairs",
        election_2024: "Contested NA-8 Bajaur by-poll Apr 21 2024; 12,019 votes (ECP consolidated)",
        major_work: "'Bajaur Da Treekh Pa Rana Kay' (Bajaur in the Light of History) – 438pp Pashto history (2021, Mafkoora)",
        known_for: "Peace marches (Aman Pasoon), Pashto/mother-tongue education advocacy, bridging ulema & secular Pashtun politics",
        died: "July 10, 2025 – Targeted gun attack at Shindai Mor near Khar while mobilising for peace march",
        burial: "Nawagai hometown; funeral attended by thousands"
      },
      ur: {
        full_name: "مولانا خان زیب (خان زیب/خانزیب)",
        origin: "نواگئی تحصیل، باجوڑ ضلع، خیبر پختونخوا (سالارزئی-شیخان نسب)",
        education: "میٹرک گورنمنٹ ہائی اسکول نواگئی؛ درس نظامی اسلامی تعلیم کے فارغ التحصیل (1999)",
        political_affiliation: "عوامی نیشنل پارٹی (ANP)؛ علماء امور کے مرکزی سکریٹری",
        election_2024: "NA-8 باجوڑ ضمنی انتخابات 21 اپریل 2024 میں حصہ لیا؛ 12,019 ووٹ (ECP مجموعی)",
        major_work: "'باجوڑ د تریخ په رڼا کے' (تاریخ کی روشنی میں باجوڑ) – 438 صفحات پشتو تاریخ (2021، مفکورہ)",
        known_for: "امن مارچ (امن پسون)، پشتو/مادری زبان تعلیم کی وکالت، علماء اور سیکولر پشتون سیاست کے درمیان پل کا کردار",
        died: "10 جولائی 2025 – خار کے قریب شندئی مور میں امن مارچ کی تیاری کے دوران ہدفی فائرنگ",
        burial: "نواگئی آبائی علاقے میں؛ جنازے میں ہزاروں لوگوں کی شرکت"
      },
      ps: {
        full_name: "مولانا خان زیب (خانزیب/خانزیب)",
        origin: "د نواګئي تحصیل، د باجوړ ولسوالۍ، خیبر پښتونخوا (د سالارزیو-شیخانو نسب)",
        education: "د نواګئي دولتي عالي ښوونځي څخه میټرک؛ د درس نظامي اسلامي زده کړو فارغ (1999)",
        political_affiliation: "عوامي ملي ګوند (ANP)؛ د علماؤ چارو مرکزي منشي",
        election_2024: "د NA-8 باجوړ اضافي ټاکنو کې د ۲۱ اپریل ۲۰۲۴ کې برخه واخیسته؛ ۱۲،۰۱۹ رایې (د ECP ټولګړې)",
        major_work: "'باجوړ د تریخ په رڼا کې' (د تاریخ په رڼا کې باجوړ) – ۴۳۸ مخونه د پښتو تاریخ (۲۰۲۱، مفکوره)",
        known_for: "د سولې لاریونونه (امن پسون)، د پښتو/مورنۍ ژبې د زده کړو ملاتړ، د علماؤ او سیکولر پښتون سیاست ترمنځ د پل رول",
        died: "د ۲۰۲۵ کال د جولای ۱۰مه – د خار سره نږدې د شندئي مور کې د سولې د لاریون د تیاری پر مهال ډزو",
        burial: "د نواګئي په اصلي سیمه کې؛ په جنازه کې د زرګونو خلکو ګډون"
      }
    };
    return factsContent[lang as keyof typeof factsContent] || factsContent.en;
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

  const getRIPMessage = (lang: string) => {
    const messages = {
      en: 'May his soul rest in peace',
      ur: 'اللہ تعالیٰ ان کو جنت الفردوس میں اعلیٰ مقام عطا فرمائے',
      ps: 'دده روح دې ښه ځای ولري'
    };
    return messages[lang as keyof typeof messages] || messages.en;
  };

  const facts = getFactsContent(currentLang);
  const labels = getLabels(currentLang);
  const ripMessage = getRIPMessage(currentLang);
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
                      {ripMessage}
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
                  {ripMessage}
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
