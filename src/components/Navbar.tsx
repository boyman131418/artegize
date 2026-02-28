import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, user, logout } = useApp();
  const t = TRANSLATIONS[language].nav;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/about', label: t.about },
    { to: '/services', label: t.services },
    { to: '/account-sales', label: t.accountSales },
    { to: '/portfolio', label: t.portfolio },
    { to: '/clients', label: t.clients },
    { to: '/contact', label: t.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold gradient-text">Artegize</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {user.isAuthenticated && (
              <>
                <Link to="/admin" className="px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
                  {t.dashboard}
                </Link>
                <button onClick={logout} className="px-3 py-2 rounded-lg text-sm font-medium text-accent hover:bg-accent/10 transition-colors">
                  {t.logout}
                </button>
              </>
            )}

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="ml-2 flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Globe size={16} />
              <span>{language === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user.isAuthenticated && (
              <>
                <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium text-primary">
                  {t.dashboard}
                </Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-accent">
                  {t.logout}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
