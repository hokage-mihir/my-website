// src/components/PerformanceMonitor.jsx
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observePerformance = () => {
      // First Contentful Paint (FCP)
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            // Log to analytics (you can replace with your preferred analytics)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FCP',
                value: Math.round(entry.startTime)
              });
            }
          }
        }
      });

      try {
        paintObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Browser doesn't support this observer
      }

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Browser doesn't support this observer
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }

        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000)
          });
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Browser doesn't support this observer
      }
    };

    // Wait for page load to start monitoring
    if (document.readyState === 'complete') {
      observePerformance();
    } else {
      window.addEventListener('load', observePerformance);
    }

    return () => {
      window.removeEventListener('load', observePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;