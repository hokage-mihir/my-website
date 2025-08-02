// src/pages/ContactPage.jsx
import React from 'react';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  return (
    <>
      <SEOHead 
        title="Contact Mihir Chavan | Excel Expert & Jyotish Practitioner"
        description="Get in touch with Mihir Chavan for Excel consultations, Jyotish readings, and Marma healing services. Book your consultation today."
        keywords="Contact Mihir Chavan, Excel consultation booking, Jyotish consultation, Marma healing appointment, consultation services"
        ogImage="https://mihirchavan.in/og-image.svg"
      />
      <ContactSection />
    </>
  );
};

export default ContactPage;