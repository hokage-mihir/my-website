import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";

// Layout and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PassionProjectsPage from './pages/PassionProjectsPage';
import ContactPage from './pages/ContactPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import JyotishPortal from './pages/JyotishPortal';
import ArtOfLivingPortal from './pages/ArtOfLivingPortal';

function App() {
  // Initialize Cal.com booking widgets
  useEffect(() => {
    (async function () {
      // Default Cal.com instance for general bookings
      const cal = await getCalApi();
      cal("ui", {
        styles: { 
          branding: { brandColor: "#4f46e5" } // Using indigo-600 color
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });

      // Dedicated namespace for Complete Birth Chart Analysis (60 min comprehensive reading)
      const calComplete = await getCalApi({"namespace":"complete-birth-chart-analysis"});
      calComplete("ui", {"hideEventTypeDetails":false,"layout":"month_view"});

      // Dedicated namespace for Couples/2 People Consultation (60 min joint session)
      const cal2People = await getCalApi({"namespace":"2people"});
      cal2People("ui", {"hideEventTypeDetails":false,"layout":"month_view"});

      // Dedicated namespace for 30 Minute Consultation (focused guidance)
      const cal30Min = await getCalApi({"namespace":"30min"});
      cal30Min("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<PassionProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsConditionsPage />} />
          <Route path="jyotish" element={<JyotishPortal />} />
          <Route path="aol" element={<ArtOfLivingPortal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;