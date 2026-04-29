/**
 * AnalyticsService.js
 * High-fidelity event tracking for Matdaan Saathi.
 * Uses GA4 protocols to track user conversion paths and common queries.
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

export const trackPageView = (path) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
    console.log(`[Analytics] PageView tracked: ${path}`);
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    console.log(`[Analytics] Event tracked: ${action} - ${category}`);
  }
};

export const initGA = () => {
  if (typeof window.gtag !== 'function') {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    window.gtag = gtag;
    console.log(`[Analytics] GA4 Initialized with ID: ${GA_MEASUREMENT_ID}`);
  }
};
