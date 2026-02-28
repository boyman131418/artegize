import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].about;

  const renderText = (text: string) => {
    return text.split('**').map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-primary">{part}</strong> : part
    );
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <SEO title={t.title} description={t.subtitle} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">{t.title}</h1>
          <p className="text-xl text-muted-foreground italic">{t.subtitle}</p>
        </div>

        <div className="space-y-12">
          {[t.origin, t.mission, t.vision].map((section: any, i: number) => (
            <div key={i} className="glass-panel p-8 rounded-2xl animate-fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-2 h-8 gradient-brand rounded-full mr-4" />
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {renderText(section.content)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center glass-panel p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t.cta.title}</h3>
          <p className="text-muted-foreground mb-6">{t.cta.desc}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 gradient-brand text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
