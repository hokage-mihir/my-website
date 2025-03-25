// src/components/Layout.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => cn(
                  "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  isActive 
                    ? "border-indigo-500 text-gray-900 dark:text-white" 
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200"
                )}
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => cn(
                  "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  isActive 
                    ? "border-indigo-500 text-gray-900 dark:text-white" 
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200"
                )}
              >
                About Me
              </NavLink>
              
              <NavLink 
                to="/projects" 
                className={({ isActive }) => cn(
                  "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  isActive 
                    ? "border-indigo-500 text-gray-900 dark:text-white" 
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200"
                )}
              >
                Passion Projects
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;