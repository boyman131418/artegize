import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, BlogPost, User, Language, IGAccount, ClientLogo } from '../types';
import { INITIAL_POSTS, INITIAL_ACCOUNTS } from '../constants';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('artegize_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [accounts, setAccounts] = useState<IGAccount[]>(() => {
    const saved = localStorage.getItem('artegize_accounts');
    return saved ? JSON.parse(saved) : INITIAL_ACCOUNTS;
  });

  const [clients, setClients] = useState<ClientLogo[]>(() => {
    const saved = localStorage.getItem('artegize_clients');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState<User>({
    username: '',
    isAuthenticated: false,
  });

  useEffect(() => {
    localStorage.setItem('artegize_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('artegize_accounts', JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem('artegize_clients', JSON.stringify(clients));
  }, [clients]);

  const login = (password: string): boolean => {
    if (password === 'admin123') {
      setUser({ username: 'Admin', isAuthenticated: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser({ username: '', isAuthenticated: false });
  };

  const addPost = (post: Omit<BlogPost, 'id' | 'date'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (updatedPost: BlogPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const addAccount = (account: Omit<IGAccount, 'id'>) => {
    const newAccount: IGAccount = {
      ...account,
      id: Date.now().toString(),
      imageUrl: account.imageUrl || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60'
    };
    setAccounts([newAccount, ...accounts]);
  };

  const deleteAccount = (id: string) => {
    setAccounts(accounts.filter(a => a.id !== id));
  };

  const addClient = (client: Omit<ClientLogo, 'id'>) => {
    const newClient: ClientLogo = {
      ...client,
      id: Date.now().toString(),
    };
    setClients([newClient, ...clients]);
  };

  const deleteClient = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
  };

  return (
    <AppContext.Provider value={{
      language, setLanguage,
      posts, accounts, clients, user,
      login, logout,
      addPost, updatePost, deletePost,
      addAccount, deleteAccount,
      addClient, deleteClient
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
