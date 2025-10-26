import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slide-up">
      <div className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl shadow-xl p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Cookie className="w-4 h-4 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Cookie Notice
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              We use cookies to enhance your experience.{' '}
              <a 
                href="/privacy-policy.html" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-medium rounded-lg transition-all duration-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 text-xs font-medium rounded-lg transition-all duration-200"
              >
                Decline
              </button>
            </div>
          </div>

          <button
            onClick={handleDecline}
            className="flex-shrink-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            aria-label="Close cookie notice"
          >
            <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
