export type Language = 'en' | 'zh';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  category: string;
  serviceSlug?: string;
  link?: string;
}

export interface Service {
  id: string;
  slug?: string;
  title: string;
  description: string;
  icon: string;
  details?: {
    quote: string;
    content: string;
    value: string;
  };
}

export interface IGAccount {
  id: string;
  handle: string;
  niche: string;
  followers: string;
  engagement: string;
  price: string;
  imageUrl: string;
  description: string;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface ClientLogo {
  id: string;
  name: string;
  imageUrl: string;
}

export interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
  posts: BlogPost[];
  accounts: IGAccount[];
  clients: ClientLogo[];
  user: User;
  login: (password: string) => boolean;
  logout: () => void;
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  addAccount: (account: Omit<IGAccount, 'id'>) => void;
  deleteAccount: (id: string) => void;
  addClient: (client: Omit<ClientLogo, 'id'>) => void;
  deleteClient: (id: string) => void;
}
