import React, { useState, useEffect } from 'react';
import { Keyboard, X } from 'lucide-react';

export const KeyboardShortcuts: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Show shortcuts with Ctrl/Cmd + /
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setIsOpen(true);
      }
      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const shortcuts = [
    { key: 'Ctrl + /', description: 'Show keyboard shortcuts' },
    { key: 'Ctrl + K', description: 'Focus search (sidebar)' },
    { key: 'Ctrl + D', description: 'Toggle dark/light mode' },
    { key: 'Ctrl + Enter', description: 'Execute current tool' },
    { key: 'Ctrl + C', description: 'Copy output' },
    { key: 'Escape', description: 'Close modals' },
    { key: 'Tab', description: 'Navigate between fields' },
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 p-3 bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Show keyboard shortcuts"
        title="Keyboard shortcuts (Ctrl + /)"
      >
        <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary" />
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-2xl max-w-md w-full animate-slide-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border">
            <div className="flex items-center gap-3">
              <Keyboard className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Keyboard Shortcuts
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Shortcuts List */}
          <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-light-bg dark:bg-dark-bg rounded-lg"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {shortcut.description}
                </span>
                <kbd className="px-3 py-1 text-xs font-mono font-semibold text-gray-900 dark:text-white bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded shadow-sm">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-b-2xl">
            <p className="text-xs text-center text-gray-500 dark:text-gray-500">
              Press <kbd className="px-2 py-0.5 text-xs font-mono bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded">Esc</kbd> to close
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
