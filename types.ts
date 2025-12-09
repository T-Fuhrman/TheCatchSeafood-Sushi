
export enum Category {
  STARTERS = 'Starters',
  SALADS = 'Salads',
  SOUPS = 'Soups',
  SANDWICHES = 'Sandwiches',
  ENTREES = 'Entrées',
  UNDER_THE_SEA = 'Under The Sea',
  ROLLS = 'Rolls',
  CREATE_OWN = 'Create Your Own'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string; // Changed to allow 'MP' strings
  category: Category;
  imageUrl: string;
  popular?: boolean;
  spicy?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface SocialPost {
  id: string;
  imageUrl: string;
  posterUrl?: string;
  caption: string;
  tags: string[];
  mediaType?: 'image' | 'video';
}
