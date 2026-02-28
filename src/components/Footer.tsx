import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold gradient-text mb-4">Artegize</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === 'en' 
                ? 'AI-powered marketing solutions that deliver measurable results.' 
                : 'AI 驅動的營銷方案，帶來可衡量的成果。'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : '快速連結'}
            </h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary text-sm transition-colors">{t.nav.about}</Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary text-sm transition-colors">{t.nav.services}</Link>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-primary text-sm transition-colors">{t.nav.portfolio}</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary text-sm transition-colors">{t.nav.contact}</Link>
              <Link to="/disclaimer" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                {language === 'en' ? 'Disclaimer' : '免責聲明'}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.nav.contact}</h4>
            <div className="space-y-3">
              <a href="mailto:hello@artegize.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                <Mail size={16} />
                <span>hello@artegize.com</span>
              </a>
              <a href="tel:+85296997127" className="flex items-center space-x-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                <Phone size={16} />
                <span>+852 9699 7127</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} />
                <span>{language === 'en' ? 'Hong Kong' : '香港'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Artegize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
