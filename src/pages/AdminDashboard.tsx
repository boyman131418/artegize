import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../translations';
import { Trash2 } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { posts, addPost, deletePost, accounts, addAccount, deleteAccount, clients, addClient, deleteClient, user, language } = useApp();
  const t = TRANSLATIONS[language].admin;
  const servicesT = TRANSLATIONS[language].services;

  const [activeTab, setActiveTab] = useState<'posts' | 'accounts' | 'clients'>('posts');

  // Post form
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postServiceSlug, setPostServiceSlug] = useState('');

  // Account form
  const [accHandle, setAccHandle] = useState('');
  const [accNiche, setAccNiche] = useState('');
  const [accFollowers, setAccFollowers] = useState('');
  const [accEngagement, setAccEngagement] = useState('');
  const [accPrice, setAccPrice] = useState('');
  const [accDescription, setAccDescription] = useState('');

  // Client form
  const [clientName, setClientName] = useState('');
  const [clientLogo, setClientLogo] = useState('');

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle || !postCategory) return;
    addPost({
      title: postTitle,
      category: postCategory,
      imageUrl: postImage || 'https://picsum.photos/800/400?random=' + Date.now(),
      excerpt: postExcerpt,
      content: postContent,
      serviceSlug: postServiceSlug || undefined,
    });
    setPostTitle(''); setPostCategory(''); setPostImage(''); setPostExcerpt(''); setPostContent(''); setPostServiceSlug('');
  };

  const handleAddAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accHandle) return;
    addAccount({
      handle: accHandle,
      niche: accNiche,
      followers: accFollowers,
      engagement: accEngagement,
      price: accPrice,
      description: accDescription,
      imageUrl: 'https://picsum.photos/400/400?random=' + Date.now(),
    });
    setAccHandle(''); setAccNiche(''); setAccFollowers(''); setAccEngagement(''); setAccPrice(''); setAccDescription('');
  };

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName) return;
    addClient({
      name: clientName,
      imageUrl: clientLogo || 'https://picsum.photos/200/200?random=' + Date.now(),
    });
    setClientName(''); setClientLogo('');
  };

  const inputClass = "w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition text-sm";

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-foreground">{t.dashboardTitle}</h1>
          <p className="text-muted-foreground">{t.welcome}, {user.username}</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8">
          {(['posts', 'accounts', 'clients'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab ? 'gradient-brand text-primary-foreground' : 'glass-panel text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab === 'posts' ? t.tabPosts : tab === 'accounts' ? t.tabAccounts : t.tabClients}
            </button>
          ))}
        </div>

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">{t.createPost}</h2>
              <form onSubmit={handleAddPost} className="space-y-4">
                <input value={postTitle} onChange={e => setPostTitle(e.target.value)} placeholder={t.postTitle} className={inputClass} />
                <input value={postCategory} onChange={e => setPostCategory(e.target.value)} placeholder={t.postCategory} className={inputClass} />
                <input value={postImage} onChange={e => setPostImage(e.target.value)} placeholder={t.postImage} className={inputClass} />
                <input value={postExcerpt} onChange={e => setPostExcerpt(e.target.value)} placeholder={t.postExcerpt} className={inputClass} />
                <textarea value={postContent} onChange={e => setPostContent(e.target.value)} placeholder={t.postContent} rows={4} className={inputClass} />
                <select value={postServiceSlug} onChange={e => setPostServiceSlug(e.target.value)} className={inputClass}>
                  <option value="">-- Service (Optional) --</option>
                  {servicesT.list.map((s: any) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
                <button type="submit" className="gradient-brand text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition">
                  {t.publish}
                </button>
              </form>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">{t.manageContent}</h2>
              {posts.length === 0 ? (
                <p className="text-muted-foreground">No posts yet.</p>
              ) : (
                <div className="space-y-3">
                  {posts.map(post => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div>
                        <h3 className="text-foreground font-medium">{post.title}</h3>
                        <p className="text-muted-foreground text-sm">{post.category} · {post.date}</p>
                      </div>
                      <button onClick={() => deletePost(post.id)} className="text-destructive hover:text-destructive/80 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Accounts Tab */}
        {activeTab === 'accounts' && (
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">{t.createAccount}</h2>
              <form onSubmit={handleAddAccount} className="space-y-4">
                <input value={accHandle} onChange={e => setAccHandle(e.target.value)} placeholder={t.accHandle} className={inputClass} />
                <input value={accNiche} onChange={e => setAccNiche(e.target.value)} placeholder={t.accNiche} className={inputClass} />
                <input value={accFollowers} onChange={e => setAccFollowers(e.target.value)} placeholder={t.accFollowers} className={inputClass} />
                <input value={accEngagement} onChange={e => setAccEngagement(e.target.value)} placeholder={t.accEngagement} className={inputClass} />
                <input value={accPrice} onChange={e => setAccPrice(e.target.value)} placeholder={t.accPrice} className={inputClass} />
                <input value={accDescription} onChange={e => setAccDescription(e.target.value)} placeholder={t.accDescription} className={inputClass} />
                <button type="submit" className="gradient-brand text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition">
                  {t.publishAccount}
                </button>
              </form>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">{t.tabAccounts}</h2>
              <div className="space-y-3">
                {accounts.map(acc => (
                  <div key={acc.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h3 className="text-foreground font-medium">{acc.handle}</h3>
                      <p className="text-muted-foreground text-sm">{acc.niche} · {acc.followers} · {acc.price}</p>
                    </div>
                    <button onClick={() => deleteAccount(acc.id)} className="text-destructive hover:text-destructive/80 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">{t.createClient}</h2>
              <form onSubmit={handleAddClient} className="space-y-4">
                <input value={clientName} onChange={e => setClientName(e.target.value)} placeholder={t.clientName} className={inputClass} />
                <input value={clientLogo} onChange={e => setClientLogo(e.target.value)} placeholder={t.clientLogo} className={inputClass} />
                <button type="submit" className="gradient-brand text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition">
                  {t.addClient}
                </button>
              </form>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">{t.tabClients}</h2>
              {clients.length === 0 ? (
                <p className="text-muted-foreground">No clients yet.</p>
              ) : (
                <div className="space-y-3">
                  {clients.map(client => (
                    <div key={client.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img src={client.imageUrl} alt={client.name} className="w-10 h-10 rounded-lg object-contain" />
                        <span className="text-foreground font-medium">{client.name}</span>
                      </div>
                      <button onClick={() => deleteClient(client.id)} className="text-destructive hover:text-destructive/80 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
