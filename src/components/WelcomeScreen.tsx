import React from 'react';
import { Shield, Key, Zap, Code2 } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {

  return (
    <div className="flex items-center justify-center h-full p-3 sm:p-6 lg:p-8 overflow-y-auto mobile-scroll mobile-optimized">
      <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8 animate-fade-in py-4 sm:py-8">
        {/* Hero Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl">
              <i className="fas fa-code text-primary text-6xl" />
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Welcome to <span className="text-primary">Cryptools</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Your complete toolkit for encryption, hashing, and text conversion. 
            <span className="block mt-2 text-sm sm:text-base">
              All processing happens locally in your browser 🔒
            </span>
          </p>
        </div>


        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
          <div className="p-4 sm:p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              13+ Tools
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Base64, MD5, SHA-256, Caesar, Vigenère, ROT13, and more
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              100% Private
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              All processing in your browser. Zero data sent to servers.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Key className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              Save Presets
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Create and save custom cipher configurations locally
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              Code Snippets
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              View and copy JavaScript implementation for each tool
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};
