import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";

// Layout and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PassionProjectsPage from './pages/PassionProjectsPage';
import ContactPage from './pages/ContactPage';
import ArtOfLivingPortal from './pages/ArtOfLivingPortal';
import JyotishPortal from './pages/JyotishPortal';

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="aol" element={<ArtOfLivingPortal />} />
          <Route path="jyotish" element={<JyotishPortal />} />
          <Route path="projects" element={<PassionProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;