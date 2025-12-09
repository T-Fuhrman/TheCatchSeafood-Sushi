import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md backdrop-blur-sm h-[60px] flex items-center justify-center`}
      style={{
        backgroundColor: '#000000'
      }}
    >
      <div className="mx-auto flex w-full items-center justify-center">
        {/* Logo text removed as requested */}
      </div>
    </nav>
  );
};