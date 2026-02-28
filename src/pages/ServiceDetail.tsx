import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import SEO from '../components/SEO';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, posts } = useApp();
  const t = TRANSLATIONS[language].services;

  const service = t.list.find((s: any) => s.slug === slug);
  const relatedPosts = posts.filter(post => post.serviceSlug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  if (service.slug === 'account-sales') {
    return <Navigate to="/account-sales" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO title={service.title} description={service.description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Services' : '服務'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold text-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground">{service.description}</p>
            </div>

            {service.details && (
              <div className="glass-panel p-8 rounded-2xl space-y-6">
                <p className="text-primary font-bold italic text-lg">{service.details.quote}</p>
                <p className="text-foreground/80">{service.details.content}</p>
                <p className="text-foreground font-medium">{service.details.value}</p>
              </div>
            )}

            <Link
              to="/contact"
              className="inline-block px-8 py-4 gradient-brand text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25"
            >
              {language === 'en' ? 'Get Started' : '立即開始'} →
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="glass-panel p-8 rounded-2xl">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <span className="gradient-text text-6xl font-extrabold">AI</span>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {language === 'en' ? 'Related Posts' : '相關文章'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <div key={post.id} className="glass-panel rounded-xl overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
