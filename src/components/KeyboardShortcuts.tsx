import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { tools } from '@/data/tools';
import { HelpCircle, X } from 'lucide-react';

interface Shortcut {
  key: string;
  description: string;
  category: string;
  action: () => void;
}

export const KeyboardShortcuts: React.FC = () => {
  const { setActiveTool, toggleTheme } = useStore();
  const [showHelp, setShowHelp] = useState(false);
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  useEffect(() => {
    const shortcutsList: Shortcut[] = [
      // Navigation shortcuts
      ...tools.slice(0, 9).map((tool, index) => ({
        key: `${index + 1}`,
        description: `Open ${tool.name}`,
        category: 'Navigation',
        action: () => setActiveTool(tool.id),
      })),
      {
        key: '0',
        description: 'Go to Home',
        category: 'Navigation',
        action: () => setActiveTool(null),
      },
      
      // General shortcuts
      {
        key: 'Ctrl/Cmd + D',
        description: 'Toggle Dark/Light Mode',
        category: 'General',
        action: toggleTheme,
      },
      {
        key: 'Ctrl/Cmd + K',
        description: 'Open Search',
        category: 'General',
        action: () => {
          const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
          if (searchInput) {
            searchInput.focus();
            searchInput.select();
          }
        },
      },
      {
        key: 'Ctrl/Cmd + /',
        description: 'Show Keyboard Shortcuts',
        category: 'General',
        action: () => setShowHelp(true),
      },
      {
        key: 'Escape',
        description: 'Close Modal/Menu',
        category: 'General',
        action: () => {
          setShowHelp(false);
          const mobileMenu = document.querySelector('[aria-label="Toggle mobile menu"]') as HTMLButtonElement;
          if (mobileMenu && window.innerWidth < 1024) {
            mobileMenu.click();
          }
        },
      },
      
      // Tool-specific shortcuts
      {
        key: 'Ctrl/Cmd + Enter',
        description: 'Execute Tool Action',
        category: 'Tools',
        action: () => {
          const primaryButton = document.querySelector('button[class*="bg-primary"]') as HTMLButtonElement;
          if (primaryButton) {
            primaryButton.click();
          }
        },
      },
      {
        key: 'Ctrl/Cmd + C',
        description: 'Copy Result',
        category: 'Tools',
        action: () => {
          const copyButton = document.querySelector('button[aria-label*="Copy"]') as HTMLButtonElement;
          if (copyButton) {
            copyButton.click();
          }
        },
      },
      {
        key: 'Ctrl/Cmd + R',
        description: 'Refresh/Regenerate',
        category: 'Tools',
        action: () => {
          const refreshButton = document.querySelector('button[class*="Refresh"]') as HTMLButtonElement;
          if (refreshButton) {
            refreshButton.click();
          }
        },
      },
    ];

    setShortcuts(shortcutsList);
  }, [setActiveTool, toggleTheme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Number shortcuts (1-9, 0)
      if (key >= '0' && key <= '9') {
        e.preventDefault();
        const index = key === '0' ? 9 : parseInt(key) - 1;
        if (index >= 0 && index < tools.length) {
          setActiveTool(tools[index].id);
        } else if (key === '0') {
          setActiveTool(null);
        }
        return;
      }

      // Ctrl/Cmd combinations
      if (isCtrlOrCmd) {
        switch (key) {
          case 'd':
            e.preventDefault();
            toggleTheme();
            break;
          case 'k':
            e.preventDefault();
            const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
            if (searchInput) {
              searchInput.focus();
              searchInput.select();
            }
            break;
          case '/':
            e.preventDefault();
            setShowHelp(true);
            break;
          case 'enter':
            e.preventDefault();
            const primaryButton = document.querySelector('button[class*="bg-primary"]') as HTMLButtonElement;
            if (primaryButton) {
              primaryButton.click();
            }
            break;
          case 'c':
            e.preventDefault();
            const copyButton = document.querySelector('button[aria-label*="Copy"]') as HTMLButtonElement;
            if (copyButton) {
              copyButton.click();
            }
            break;
          case 'r':
            e.preventDefault();
            const refreshButton = document.querySelector('button[class*="Refresh"]') as HTMLButtonElement;
            if (refreshButton) {
              refreshButton.click();
            }
            break;
        }
      }

      // Escape key
      if (key === 'escape') {
        setShowHelp(false);
        const mobileMenu = document.querySelector('[aria-label="Toggle mobile menu"]') as HTMLButtonElement;
        if (mobileMenu && window.innerWidth < 1024) {
          mobileMenu.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveTool, toggleTheme]);

  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = [];
    }
    acc[shortcut.category].push(shortcut);
    return acc;
  }, {} as Record<string, Shortcut[]>);

  return (
    <>
      {/* Help Button */}
      <button
        onClick={() => setShowHelp(true)}
        className="fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all z-40 touch-target"
        aria-label="Show keyboard shortcuts"
        title="Keyboard Shortcuts (Ctrl/Cmd + /)"
      >
        <HelpCircle className="w-5 h-5" />
      </button>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setShowHelp(false)}
                className="p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {categoryShortcuts.map((shortcut, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-3 bg-light-bg dark:bg-dark-bg rounded-lg"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {shortcut.description}
                        </span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded border border-gray-300 dark:border-gray-600">
                          {shortcut.key}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Tip:</strong> Press <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs rounded">Ctrl/Cmd + /</kbd> anytime to show this help.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};