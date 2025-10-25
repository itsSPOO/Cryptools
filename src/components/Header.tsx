import React, { memo, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useStore } from '@/store/useStore';

const HeaderComponent: React.FC = () => {
  const { theme, toggleTheme, setActiveTool } = useStore();

  const handleLogoClick = useCallback(() => {
    setActiveTool(null);
  }, [setActiveTool]);

  return (
    <header className="h-16 bg-gradient-to-r from-white via-light-surface-elevated to-white dark:from-dark-surface dark:via-dark-surface-elevated dark:to-dark-surface border-b border-light-border dark:border-dark-border shadow-lg relative backdrop-blur-sm">
      <div className="h-full max-w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo - Left side for desktop, hidden on mobile */}
        <button
          onClick={handleLogoClick}
          className="hidden lg:flex items-center gap-3 hover:opacity-80 transition-all group"
          aria-label="Go to home"
        >
          <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:from-primary-dark group-hover:to-accent-dark transition-all shadow-lg">
            <i className="fas fa-code text-white text-lg" />
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
        
        {/* Mobile logo - Center */}
        <button
          onClick={handleLogoClick}
          className="lg:hidden flex items-center gap-2 hover:opacity-80 transition-all group flex-1 justify-center"
          aria-label="Go to home"
        >
          <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:from-primary-dark group-hover:to-accent-dark transition-all shadow-lg">
            <i className="fas fa-code text-white text-lg" />
          </div>
          <h1 className="text-base font-bold text-gray-900 dark:text-white">
            Cryptools
          </h1>
        </button>
        
        {/* Right theme button */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 dark:from-primary/20 dark:to-accent/20 dark:hover:from-primary/30 dark:hover:to-accent/30 transition-all touch-target shadow-md hover:shadow-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
