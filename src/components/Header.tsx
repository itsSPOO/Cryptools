import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useStore } from '@/store/useStore';

type HeaderProps = {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

const HeaderComponent: React.FC<HeaderProps> = ({ isMobileMenuOpen, onToggleMobileMenu }) => {
  const { theme, toggleTheme, setActiveTool } = useStore();
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    setActiveTool(null);
    navigate('/');
  }, [setActiveTool, navigate]);

  return (
    <header className="h-14 bg-gradient-to-r from-white via-light-surface-elevated to-white dark:from-dark-surface dark:via-dark-surface-elevated dark:to-dark-surface border-b border-light-border dark:border-dark-border shadow-lg relative backdrop-blur-sm">
      <div className="h-full max-w-full px-4 sm:px-6 flex items-center gap-3">
        <div className="flex items-center gap-2">
          {/* Mobile menu toggle */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-white to-light-surface-elevated dark:from-dark-surface dark:to-dark-surface-elevated border border-light-border dark:border-dark-border hover:shadow-lg transition-all duration-200 touch-target"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Logo - Left side for desktop, hidden on mobile */}
          <button
            onClick={handleLogoClick}
            className="hidden lg:flex items-center gap-2.5 hover:opacity-80 transition-all group"
            aria-label="Go to home"
          >
            <div className="p-1.5 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:from-primary-dark group-hover:to-accent-dark transition-all shadow-lg">
              <i className="fas fa-code text-white text-base" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900 dark:text-white">
                Cryptools
              </h1>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                Encryption & Conversion Suite
              </p>
            </div>
          </button>
        </div>

        {/* Mobile logo - Center */}
        <button
          onClick={handleLogoClick}
          className="lg:hidden flex items-center gap-2 hover:opacity-80 transition-all group flex-1 justify-center"
          aria-label="Go to home"
        >
          <div className="p-1.5 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:from-primary-dark group-hover:to-accent-dark transition-all shadow-lg">
            <i className="fas fa-code text-white text-base" />
          </div>
          <h1 className="text-sm font-bold text-gray-900 dark:text-white">
            Cryptools
          </h1>
        </button>

        {/* Right theme button */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-auto">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gradient-to-br from-white to-light-surface-elevated dark:from-dark-surface dark:to-dark-surface-elevated border border-light-border dark:border-dark-border hover:shadow-lg transition-all duration-200 touch-target"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-primary" />
            ) : (
              <Moon className="w-5 h-5 text-accent" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
