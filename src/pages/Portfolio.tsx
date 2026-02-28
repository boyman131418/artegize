import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';

const Portfolio: React.FC = () => {
  const { language, posts } = useApp();
  const t = TRANSLATIONS[language].portfolio;

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

        {posts.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl">
            <p className="text-muted-foreground text-lg">
              {language === 'en' ? 'No portfolio items yet. Check back soon!' : '暫無案例。敬請期待！'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.id} className="glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    {post.link && (
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:text-accent">
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
