// src/components/Header.jsx
import React from 'react';
import { Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import OptimizedImage from "@/components/ui/optimized-image";


const Header = ({ toggleDarkMode }) => {
  return (
    <header className="relative h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-r from-emerald-800/80 to-teal-700/80 text-white overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80" 
          alt="Mihir Chavan personal website header - mountain landscape" 
          className="w-full h-full object-cover object-center opacity-95"
          loading="eager"
          width="2000"
          height="1200"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/40 to-teal-700/40 backdrop-blur-[0.5px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Mihir Chavan
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" asChild className="hover:text-teal-300 transition-colors">
            <a href="https://www.linkedin.com/in/hokage-mihir/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-7 h-7 drop-shadow-md" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-teal-300 transition-colors">
            <a href="https://www.instagram.com/hokage.mihir" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-7 h-7 drop-shadow-md" />
            </a>
          </Button>
          <Toggle pressed={document.documentElement.classList.contains('dark')} onPressedChange={toggleDarkMode}>
            <Sun className="w-7 h-7 hidden dark:block drop-shadow-md" />
            <Moon className="w-7 h-7 dark:hidden drop-shadow-md" />
          </Toggle>
        </div>
      </div>
    </header>
  );
};

export default Header;