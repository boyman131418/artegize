import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';

const Disclaimer: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].disclaimer;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO title={t.title} description={t.intro} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-2xl">
          <h1 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">{t.title}</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>{t.intro}</p>

            {t.sections.map((section: any, index: number) => (
              <section key={index}>
                <h2 className="text-xl font-bold text-primary mb-3">{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
