import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Component to handle trailing slash redirects
 * Redirects URLs ending with / to the same URL without the trailing slash
 * Example: /robots.txt/ -> /robots.txt
 */
export function TrailingSlashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // Check if pathname ends with / and is not the root path
    if (pathname !== '/' && pathname.endsWith('/')) {
      // Remove trailing slash
      const newPathname = pathname.slice(0, -1);
      
      // Redirect to the same URL without trailing slash
      navigate(newPathname + search + hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
