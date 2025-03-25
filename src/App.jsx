// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";

// Layout and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PassionProjectsPage from './pages/PassionProjectsPage';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<PassionProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;