import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const RouteAnnouncer = () => {
  const location = useLocation();
  const [routeAnnouncement, setRouteAnnouncement] = useState('');

  useEffect(() => {
    // Determine the page name from the pathname for accessibility
    const path = location.pathname;
    let pageName = 'Home';
    
    if (path !== '/') {
      // Convert '/register' to 'Register' or '/how-elections-work' to 'How elections work'
      pageName = path
        .replace(/^\//, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    setRouteAnnouncement(`Navigated to ${pageName} page`);
  }, [location.pathname]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {routeAnnouncement}
    </div>
  );
};
