import React from 'react';
import { Fish, Sun, Music } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-ocean-950 text-white overflow-hidden -mt-[450px] z-20">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2">Our Story</h3>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Peruvian Fusion & <br/> Outdoor Dining
                        </h2>
                        <div className="w-24 h-1 bg-gold-500 rounded-full mb-8"></div>
                        <p className="text-ocean-100 text-lg leading-relaxed mb-6 font-light">
                            We are now open! We are still getting settled in our new location, but our restaurant is in West Palm Beach and features beautiful outdoor dining! So excited to start this adventure and to meet our local residents and new clientele that will enjoy our restaurant’s location as much as we do!
                        </p>
                        <p className="text-ocean-100 text-lg leading-relaxed font-light mb-8">
                             Come see us, we have live music and friendly service. Be the first of your friends to experience The Catch.
                        </p>

                        <div className="bg-ocean-900/50 p-6 rounded-xl border border-ocean-800">
                           <div className="flex items-center gap-3 mb-3">
                             <Fish className="w-6 h-6 text-gold-500" />
                             <h4 className="font-serif text-xl font-bold text-white">You Hook It, We Cook It!</h4>
                           </div>
                           <p className="text-ocean-200 text-sm italic">
                             From the ocean to your plate, as fresh as it gets! Bring in your catch and our chefs will turn it into a masterpiece. Blackened, fried, sushi... you choose, we deliver.
                           </p>
                        </div>
                    </div>
                    
                    <div className="flex gap-8 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-ocean-800 rounded-full text-gold-500">
                                <Sun className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-white">Outdoor<br/>Dining</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-ocean-800 rounded-full text-gold-500">
                                <Music className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-white">Live<br/>Music</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-ocean-800">
                        <img src="https://image.pollinations.ai/prompt/professional%20sushi%20chef%20preparing%20fresh%20fish%20sashimi%20kitchen%20restaurant%20moody" alt="Chef plating sushi" className="w-full h-auto object-cover" />
                    </div>
                    <div className="absolute top-10 -left-10 z-0 w-full h-full border-2 border-gold-500/30 rounded-lg transform -rotate-3"></div>
                    
                    {/* Floating Info Card */}
                    <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                      <p className="font-serif text-ocean-950 text-lg italic">"A daring fusion of east and west."</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-ocean-900"></div>
                        <span className="text-xs font-bold text-ocean-900 uppercase">The Catch Team</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};