import React from 'react';
import { Moon, Sun, Lock } from 'lucide-react';
import { useStore } from '@/store/useStore';

export const Header: React.FC = () => {
  const { theme, toggleTheme, setActiveTool } = useStore();

  const handleLogoClick = () => {
    setActiveTool(null);
  };

  return (
    <header className="h-16 bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border shadow-sm relative">
      <div className="h-full max-w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Left spacer for mobile menu button */}
        <div className="w-16 lg:w-0"></div>
        
        {/* Center logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all group flex-1 justify-center lg:flex-none lg:justify-start"
          aria-label="Go to home"
        >
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Cryptools
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Encryption & Conversion Suite
            </p>
          </div>
          <div className="sm:hidden">
            <h1 className="text-base font-bold text-gray-900 dark:text-white">
              Cryptools
            </h1>
          </div>
        </button>
        
        {/* Right theme button */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-all touch-target"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
