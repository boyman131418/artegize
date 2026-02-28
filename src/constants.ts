import { BlogPost, IGAccount } from './types';

export const INITIAL_POSTS: BlogPost[] = [];

export const INITIAL_ACCOUNTS: IGAccount[] = [
  {
    id: '1',
    handle: '@foodie_hk_***',
    niche: 'Food & Lifestyle',
    followers: '45.2k',
    engagement: '5.1%',
    price: '$1,200 USD',
    imageUrl: 'https://picsum.photos/400/400?random=10',
    description: 'Active Hong Kong food blog with high engagement. Perfect for restaurant promotions.'
  },
  {
    id: '2',
    handle: '@fit_life_***',
    niche: 'Health & Fitness',
    followers: '28.5k',
    engagement: '4.2%',
    price: '$850 USD',
    imageUrl: 'https://picsum.photos/400/400?random=11',
    description: 'Established fitness community. Great for supplement brands or coaching services.'
  },
  {
    id: '3',
    handle: '@tech_gadgets_***',
    niche: 'Tech & Gadgets',
    followers: '12.1k',
    engagement: '6.5%',
    price: '$450 USD',
    imageUrl: 'https://picsum.photos/400/400?random=12',
    description: 'Fast growing tech review page. High viral potential on Reels.'
  },
  {
    id: '4',
    handle: '@pet_lovers_***',
    niche: 'Pets',
    followers: '85k',
    engagement: '3.9%',
    price: '$2,500 USD',
    imageUrl: 'https://picsum.photos/400/400?random=13',
    description: 'Viral cat and dog content. Very active comment section.'
  },
  {
    id: '5',
    handle: '@fashion_daily_***',
    niche: 'Fashion',
    followers: '32k',
    engagement: '4.8%',
    price: '$950 USD',
    imageUrl: 'https://picsum.photos/400/400?random=14',
    description: 'Streetwear and modern fashion aesthetics. Perfect for clothing brands.'
  },
  {
    id: '6',
    handle: '@crypto_news_***',
    niche: 'Finance & Crypto',
    followers: '18k',
    engagement: '7.2%',
    price: '$1,500 USD',
    imageUrl: 'https://picsum.photos/400/400?random=15',
    description: 'High net worth audience interested in investment and crypto.'
  }
];
