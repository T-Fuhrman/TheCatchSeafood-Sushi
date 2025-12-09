import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { AiConcierge } from './components/AiConcierge';

const App: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ocean-950 text-white">
      <Navbar />
      <Hero onMenuClick={scrollToMenu} />
      <About />
      <MenuSection />
      <Gallery />
      <Footer />
      <AiConcierge />
    </div>
  );
};

export default App;