// src/components/JsonLd.jsx
import React from 'react';

export const PersonJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mihir Chavan",
        "jobTitle": ["Program Manager Cloud Business", "Art of Living Faculty"],
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Redington Ltd"
          },
          {
            "@type": "Organization",
            "name": "The Art of Living Foundation"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Sri Sri University",
            "address": "Cuttack, Odisha"
          },
          {
            "@type": "CollegeOrUniversity",
            "name": "Mumbai University",
            "address": "Mumbai, Maharashtra"
          }
        ],
        "knowsAbout": [
          "Microsoft Excel",
          "Financial Management",
          "Program Management",
          "Vedic Astrology",
          "Jyotish",
          "Art of Living Programs",
          "Meditation",
          "Marma Therapy"
        ],
        "url": "https://mihirchavan.in",
        "sameAs": [
          "https://www.linkedin.com/in/hokage-mihir/",
          "https://www.instagram.com/hokagemihir/"
        ]
      })
    }}
  />
);

export const OrganizationJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mihir Chavan Consulting",
        "description": "Professional services in Finance, Excel consulting, Jyotish readings, and Art of Living programs",
        "url": "https://mihirchavan.in",
        "logo": "https://mihirchavan.in/og-image.svg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-83697-90166",
          "contactType": "Customer Service",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "founder": {
          "@type": "Person",
          "name": "Mihir Chavan"
        },
        "serviceArea": {
          "@type": "Country",
          "name": "India"
        }
      })
    }}
  />
);

export const ServiceJsonLd = ({ service }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "Person",
          "name": "Mihir Chavan",
          "url": "https://mihirchavan.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `https://mihirchavan.in${service.url}`,
          "serviceType": service.type
        }
      })
    }}
  />
);