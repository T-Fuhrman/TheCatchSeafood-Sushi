import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';
import { Flame, Star } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.STARTERS);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-ocean-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Taste the Ocean</h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Our Menu</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 md:flex-wrap md:justify-center gap-3 px-2 hide-scrollbar">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gold-500 text-white border-gold-500 shadow-lg scale-105'
                  : 'bg-ocean-900 text-ocean-200 border-ocean-800 hover:border-gold-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-fade-in-up">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
          {filteredItems.length === 0 && (
             <div className="col-span-2 text-center py-10 text-ocean-400">Items coming soon...</div>
          )}
        </div>
      </div>
    </section>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group flex flex-col p-6 rounded-xl bg-ocean-900 hover:bg-ocean-800 hover:shadow-lg transition-all duration-300 border border-ocean-800 hover:border-gold-500/30">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-serif text-xl font-bold text-white leading-tight">{item.name}</h4>
        <div className="flex flex-col items-end">
          <span className="font-sans font-bold text-gold-500 whitespace-nowrap ml-4 text-lg">
            {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
          </span>
        </div>
      </div>
      
      <div className="flex gap-2 mb-3">
        {item.popular && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-500 bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-900">
            <Star className="w-3 h-3 fill-amber-500" /> Popular
          </span>
        )}
        {item.spicy && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-950/50 px-2 py-0.5 rounded-full border border-red-900">
            <Flame className="w-3 h-3 fill-red-500" /> Spicy
          </span>
        )}
      </div>
      
      <p className="text-ocean-200 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};