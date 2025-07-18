// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { cn } from "@/lib/utils";

const Layout = () => {
  const location = useLocation();
  const isPortalPage = location.pathname === '/jyotish' || location.pathname === '/aol';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!isPortalPage && <Header />}
      
      {!isPortalPage && (
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
                <div className="flex space-x-8">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive 
                        ? "border-indigo-500 text-gray-900" 
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    Home
                  </NavLink>
                  
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive 
                        ? "border-indigo-500 text-gray-900" 
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    About Me
                  </NavLink>
                  
                  <NavLink 
                    to="/jyotish" 
                    className={({ isActive }) => cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive 
                        ? "border-indigo-500 text-gray-900" 
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    Jyotish
                  </NavLink>
                  
                  <NavLink 
                    to="/aol" 
                    className={({ isActive }) => cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive 
                        ? "border-indigo-500 text-gray-900" 
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    Art of Living
                  </NavLink>
                 
                  <NavLink 
                    to="/projects" 
                    className={({ isActive }) => cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive 
                        ? "border-indigo-500 text-gray-900" 
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    Passion Projects
                  </NavLink>
                  
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      isActive 
                        ? "border-indigo-500 text-gray-900" 
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>

              {/* Empty div for flexbox balance */}
              <div className="flex items-center md:hidden">
                <div className="w-10"></div>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                  <NavLink 
                    to="/" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    Home
                  </NavLink>
                  
                  <NavLink 
                    to="/about" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    About Me
                  </NavLink>
                  
                  <NavLink 
                    to="/jyotish" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    Jyotish
                  </NavLink>
                  
                  <NavLink 
                    to="/aol" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    Art of Living
                  </NavLink>
                  
                  <NavLink 
                    to="/projects" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    Passion Projects
                  </NavLink>
                  
                  <NavLink 
                    to="/contact" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;