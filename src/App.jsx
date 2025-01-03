// src/App.jsx
import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

// Component Imports
import Header from './components/Header';
import Welcome from './components/Welcome';
import PassionProjects from './components/PassionProjects';
import About from './components/About';
import Career from './components/Career';
import Footer from './components/Footer';

function App() {
  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { 
          branding: { brandColor: "#4f46e5" } // Using indigo-600 color
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  // Dark mode toggle function
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  // Initialize dark mode based on system preference or localStorage
  useEffect(() => {
    // Check if dark mode preference exists in localStorage
    const darkModePreference = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Set initial dark mode state
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <Welcome />
        <PassionProjects />
        <About />
        <Career />
      </main>
      <Footer />
    </div>
  );
}

export default App;