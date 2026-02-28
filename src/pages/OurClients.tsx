import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';

const OurClients: React.FC = () => {
  const { language, clients } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <SEO
        title={t.nav.clients}
        description={language === 'en' ? 'Our valued clients and partners.' : '我們尊貴的客戶與合作夥伴。'}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="gradient-text">{t.nav.clients}</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' ? 'Trusted by innovative brands and businesses.' : '深受創新品牌和企業的信賴。'}
          </p>
        </div>

        {clients.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl">
            <p className="text-muted-foreground text-lg">
              {language === 'en' ? 'No clients listed yet.' : '暫無客戶列表。'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map(client => (
              <div key={client.id} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-all">
                <img src={client.imageUrl} alt={client.name} className="w-24 h-24 object-contain mb-4 rounded-xl" />
                <p className="text-foreground font-medium text-sm">{client.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurClients;
