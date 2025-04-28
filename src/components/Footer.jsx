// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Heart, Home, User, Lightbulb, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Site Navigation */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <User className="h-4 w-4 mr-2" />
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Passion Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/hokagemihir/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hokage-mihir/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Follow my social accounts for updates on latest projects and insights.
            </p>
          </div>
          
          {/* Support Section */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Support a Cause</h3>
            <a 
              href="https://vvki-dsy.org/donate" 
              className="inline-flex items-center text-gray-300 hover:text-blue-300 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Heart className="h-4 w-4 mr-2 text-red-400" />
              Dharma Sthambha Yojna
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Support service initiatives that transform lives through education, river rejuvination, skill developement and more.
            </p>
          </div>
          
          {/* Copyright Section */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Legal</h3>
            <p className="text-sm text-gray-400 mb-1">© {new Date().getFullYear()} Mihir Chavan.</p>
            <p className="text-sm text-gray-400">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;