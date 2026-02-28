import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].services;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO title={t.title} description={t.subtitle} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.list.map((service: any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
