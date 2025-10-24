import React from 'react';
import { Shield, Zap, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-surface dark:to-dark-bg border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-4 sm:mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Cryptools
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Professional encryption & conversion toolkit for developers
            </p>
          </div>

          {/* Features */}
          <div className="text-center">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Features
            </h4>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>13+ Crypto Tools</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>100% Client-Side</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>Zero Data Collection</span>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="text-center md:text-right">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Privacy & Security
            </h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>All processing in browser</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>No server communication</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Open source & transparent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-light-border dark:border-dark-border my-4 sm:my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="text-gray-600 dark:text-gray-400">
            © {currentYear} <span className="font-semibold text-primary">Cryptools</span> - All rights reserved
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm"
            >
              Terms of Use
            </a>
            <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-light-border dark:border-dark-border">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2 sm:p-3">
            <p className="text-xs text-center text-amber-800 dark:text-amber-200">
              ⚠️ <strong>Educational Use Only:</strong> This tool is for learning purposes. Do not use for production security, storing sensitive data, or any security-critical applications.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
