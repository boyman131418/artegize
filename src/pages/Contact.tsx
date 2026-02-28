import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].contact;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      <SEO title={t.title} description={t.subtitle} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl space-y-6">
              <a href={`mailto:${t.info.email}`} className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center text-primary-foreground shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{t.info.email}</p>
                </div>
              </a>
              <a href={`tel:${t.info.phone}`} className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center text-primary-foreground shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'en' ? 'Phone' : '電話'}</p>
                  <p className="font-medium">{t.info.phone}</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 text-foreground">
                <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center text-primary-foreground shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'en' ? 'Location' : '地點'}</p>
                  <p className="font-medium">{t.info.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-10 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">{t.namePlaceholder}</label>
                <input type="text" className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">{t.emailPlaceholder}</label>
                <input type="email" className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">{t.phonePlaceholder}</label>
                <input type="tel" className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">{t.msgPlaceholder}</label>
                <textarea rows={5} className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              </div>
              <button type="submit" className="w-full gradient-brand text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition">
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
