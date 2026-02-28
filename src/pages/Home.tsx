import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { Sparkles, Target, Zap, BarChart3 } from 'lucide-react';

const whyIcons = [Sparkles, Target, Zap, BarChart3];

const Home: React.FC = () => {
  const { language, posts } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={language === 'en' ? 'AI Marketing Solutions' : 'AI 營銷方案'} description={t.hero.subtitle} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel mb-8">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered Marketing Agency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text">{t.hero.title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 gradient-brand text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
              >
                {t.hero.cta}
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 glass-panel text-foreground font-bold rounded-xl hover:bg-muted/30 transition-all"
              >
                {t.hero.cta2} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">{t.home.servicesTitle}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.home.servicesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.list.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">{t.home.whyTitle}</h2>
            <p className="text-muted-foreground text-lg">{t.home.whySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.reasons.map((reason: any, index: number) => {
              const Icon = whyIcons[index];
              return (
                <div key={index} className="glass-panel p-8 rounded-2xl text-center hover:bg-muted/20 transition-all">
                  <div className="w-14 h-14 gradient-brand rounded-xl flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      {posts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10">{t.home.portfolio.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map(post => (
                <div key={post.id} className="glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t.home.contact.title}</h2>
            <p className="text-muted-foreground mb-8">{t.home.contact.description}</p>
            <form className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder={t.home.contact.namePlaceholder} className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
                <input type="email" placeholder={t.home.contact.emailPlaceholder} className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              </div>
              <textarea rows={4} placeholder={t.home.contact.msgPlaceholder} className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              <button type="submit" className="w-full gradient-brand text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition">
                {t.home.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;