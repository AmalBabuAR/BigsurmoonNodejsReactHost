// GoogleAnalytics.js
import React, { useEffect } from 'react';

function GoogleAnalytics() {
  useEffect(() => {
    // Replace 'G-GXJ942BJYP' with your actual tracking ID
    const trackingId = 'G-GXJ942BJYP';

    // Function to load Google Analytics script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', trackingId);
      };
    };

    loadScript();
  }, []);

  return null; // This component doesn't render anything
}

export default GoogleAnalytics;
