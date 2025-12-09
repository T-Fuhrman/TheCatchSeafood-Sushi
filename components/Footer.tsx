import React from 'react';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-ocean-950 text-white pt-20 pb-10 border-t border-ocean-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Adjusted grid to 3 columns since newsletter is removed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold tracking-wider">THE CATCH</h3>
            <p className="text-ocean-200 leading-relaxed text-sm">
              Artfully crafted seafood Peruvian fusion and sushi. Experience the finest flavors in West Palm Beach.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-ocean-900 rounded-full hover:bg-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/thecatchseafoodsushi" className="p-2 bg-ocean-900 rounded-full hover:bg-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-gold-500 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-ocean-200">
                <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-1" />
                <span>529 25th Street,<br />West Palm Beach, FL 33407</span>
              </li>
              <li className="flex items-center gap-3 text-ocean-200">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <span>(561) 842-2180</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-gold-500 mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-ocean-200">
              <li className="flex justify-between border-b border-ocean-900 pb-2">
                <span>Mon - Thu</span>
                <span>4:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-ocean-900 pb-2">
                <span>Friday</span>
                <span>4:00 PM - 11:00 PM</span>
              </li>
               <li className="flex justify-between border-b border-ocean-900 pb-2">
                <span>Saturday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span>12:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-ocean-900 pt-8 text-center text-sm text-ocean-400">
          <p>&copy; {new Date().getFullYear()} The Catch Seafood & Sushi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};