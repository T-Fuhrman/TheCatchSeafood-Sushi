import React from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, Hash } from 'lucide-react';
import { SocialPost } from '../types';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-ocean-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Social Feed</h3>
             <h2 className="font-serif text-4xl font-bold text-white">Just a sampling of our fabulous cuisine</h2>
           </div>
           <a href="https://www.instagram.com/thecatchseafoodsushi" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-ocean-100 font-bold hover:text-gold-500 transition-colors">
             <Instagram className="h-5 w-5" />
             @TheCatchSeafoodSushi
           </a>
        </div>

        {/* Grid is strictly 2 columns on medium+ screens to match Top-Left/Top-Right layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_POSTS.map((post) => (
            <SocialCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="https://www.instagram.com/thecatchseafoodsushi" className="inline-flex items-center gap-2 text-ocean-100 font-bold hover:text-gold-500 transition-colors">
             <Instagram className="h-5 w-5" />
             @TheCatchSeafoodSushi
           </a>
        </div>
      </div>
    </section>
  );
};

const SocialCard: React.FC<{ post: SocialPost }> = ({ post }) => {
  return (
    <div 
      className="group bg-ocean-900 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 flex flex-col h-full border border-ocean-800"
    >
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-black">
        <img 
          src={post.imageUrl} 
          alt={post.caption.substring(0, 20)} 
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Instagram Overlay */}
        <div className="absolute inset-0 bg-ocean-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Instagram className="h-10 w-10 text-white drop-shadow-lg" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-ocean-100 text-sm leading-relaxed flex-1 mb-4 whitespace-pre-line">
          {post.caption}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold text-gold-500 flex items-center">
              <Hash className="w-3 h-3 mr-0.5" />{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};