import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ title, description, keywords, ogImage, structuredData }) => {
  const location = useLocation();
  const canonicalUrl = `https://mihirchavan.in${location.pathname}`;

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImageTag = document.querySelector('meta[property="og:image"]');

    if (ogTitle && title) ogTitle.setAttribute('content', title);
    if (ogDescription && description) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    if (ogImageTag && ogImage) ogImageTag.setAttribute('content', ogImage);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle && title) twitterTitle.setAttribute('content', title);
    if (twitterDescription && description) twitterDescription.setAttribute('content', description);
    if (twitterImage && ogImage) twitterImage.setAttribute('content', ogImage);

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl);

    // Add structured data if provided
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        try {
          const existingData = JSON.parse(existingScript.textContent);
          const newData = {
            ...existingData,
            ...structuredData
          };
          existingScript.textContent = JSON.stringify(newData);
        } catch (e) {
          console.warn('Error updating structured data:', e);
        }
      }
    }
  }, [title, description, keywords, ogImage, canonicalUrl, structuredData]);

  return null;
};

export default SEOHead;