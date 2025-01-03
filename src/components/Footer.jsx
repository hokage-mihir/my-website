// src/components/Footer.jsx
import React from 'react';
import { Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Connect With Me</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/hokagemihir/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mihir-chavan-48710717/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center md:text-left">
            <p className="mb-2">Support a cause:</p>
            <a 
              href="https://vvki-dsy.org/donate" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Heart className="h-4 w-4 mr-2" />
              Dharma Sthambha Yojna
            </a>
            <div id="bmc-wrapper" className="inline-flex justify-center md:justify-start" />
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right text-sm md:text-base">
            <p>© {new Date().getFullYear()} Mihir Chavan.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;