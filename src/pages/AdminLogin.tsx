import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const { login, language } = useApp();
  const t = TRANSLATIONS[language].admin;
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError(language === 'en' ? 'Invalid password' : '密碼錯誤');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md glass-panel p-8 rounded-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl font-bold text-foreground">{t.loginTitle}</h1>
          <p className="text-muted-foreground text-sm mt-2">{t.loginSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">{t.passwordLabel}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>

          {error && <p className="text-destructive text-sm">{error}</p>}

          <button type="submit" className="w-full gradient-brand text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition">
            {t.loginBtn}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>{t.hint}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
