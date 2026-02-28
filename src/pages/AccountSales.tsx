import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';

const AccountSales: React.FC = () => {
  const { language, accounts } = useApp();
  const t = TRANSLATIONS[language].accountSales;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO title={t.title} description={t.subtitle} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.map((account) => (
            <div key={account.id} className="glass-panel rounded-2xl overflow-hidden hover:border-primary/50 transition-all group">
              <div className="h-48 overflow-hidden">
                <img src={account.imageUrl} alt={account.handle} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{account.handle}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">{account.niche}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{account.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="glass-panel p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">{language === 'en' ? 'Followers' : '粉絲'}</p>
                    <p className="text-foreground font-bold">{account.followers}</p>
                  </div>
                  <div className="glass-panel p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">{language === 'en' ? 'Engagement' : '互動率'}</p>
                    <p className="text-foreground font-bold">{account.engagement}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold gradient-text">{account.price}</span>
                  <a
                    href="https://wa.me/85296997127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 gradient-brand text-primary-foreground text-sm font-bold rounded-lg hover:opacity-90 transition"
                  >
                    {t.inquire} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSales;
