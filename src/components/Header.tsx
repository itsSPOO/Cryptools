import React from 'react';
import { Moon, Sun, Lock } from 'lucide-react';
import { useStore } from '@/store/useStore';

export const Header: React.FC = () => {
  const { theme, toggleTheme, setActiveTool } = useStore();

  const handleLogoClick = () => {
    setActiveTool(null);
  };

  return (
    <header className="h-16 bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border shadow-sm">
      <div className="h-full max-w-full px-6 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-all group"
          aria-label="Go to home"
        >
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Cryptools
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Encryption & Conversion Suite
            </p>
          </div>
        </button>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
