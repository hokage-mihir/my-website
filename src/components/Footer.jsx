// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Heart, Home, User, Lightbulb, Mail, Flower2, FileText, Star } from 'lucide-react';

const ScrollToTopLink = ({ to, children, className }) => {
  const handleClick = () => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

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
                <ScrollToTopLink to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/about" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <User className="h-4 w-4 mr-2" />
                  About Me
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/jyotish" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Star className="h-4 w-4 mr-2" />
                  Jyotish
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/aol" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Flower2 className="h-4 w-4 mr-2" />
                  Art of Living
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/projects" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Passion Projects
                </ScrollToTopLink>
              </li>
              <li>
              <ScrollToTopLink to="/contact" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                  Contact
                </ScrollToTopLink>
              </li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/hokage.mihir/" 
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
            <ul className="space-y-2 mb-4">
              <li>
                <ScrollToTopLink to="/terms" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FileText className="h-4 w-4 mr-2" />
                  Terms & Privacy
                </ScrollToTopLink>
              </li>
            </ul>
            <p className="text-sm text-gray-400 mb-1">© {new Date().getFullYear()} Mihir Chavan.</p>
            <p className="text-sm text-gray-400">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;