import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '@/store/useStore';

export const ConsentBanner: React.FC = () => {
  const { consentGiven, setConsent } = useStore();

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 dark:bg-black border-t border-gray-700 p-4 z-50 animate-slide-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-gray-300 flex-1">
          We use localStorage to save your preferences and presets locally. No data is sent to external servers.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setConsent(true)}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setConsent(true)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
