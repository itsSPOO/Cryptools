import React from 'react';
import { Lock, Shield, Key, Zap, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { tools } from '@/data/tools';

export const WelcomeScreen: React.FC = () => {
  const { setActiveTool } = useStore();

  const popularTools = [
    { id: 'base64', name: 'Base64', icon: '🔤' },
    { id: 'sha256', name: 'SHA-256', icon: '🔐' },
    { id: 'caesar', name: 'Caesar Cipher', icon: '🔑' },
  ];

  return (
    <div className="flex items-center justify-center h-full p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in py-8">
        {/* Hero Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl">
              <Lock className="w-20 h-20 text-primary" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Welcome to <span className="text-primary">Cryptools</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your complete toolkit for encryption, hashing, and text conversion. 
            <span className="block mt-2 text-base">
              All processing happens locally in your browser 🔒
            </span>
          </p>
        </div>

        {/* Quick Start - Popular Tools */}
        <div className="pt-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Start
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className="px-6 py-3 bg-white dark:bg-dark-surface border-2 border-primary/20 hover:border-primary rounded-xl hover:shadow-lg transition-all group"
              >
                <span className="text-2xl mb-1 block group-hover:scale-110 transition-transform">
                  {tool.icon}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {tool.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          <div className="p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Shield className="w-10 h-10 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              13+ Tools
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Base64, MD5, SHA-256, Caesar, Vigenère, ROT13, and more
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Zap className="w-10 h-10 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              100% Private
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              All processing in your browser. Zero data sent to servers.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Key className="w-10 h-10 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Save Presets
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Create and save custom cipher configurations locally
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border hover:border-primary/50 transition-all hover:shadow-lg">
            <Code2 className="w-10 h-10 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Code Snippets
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View and copy JavaScript implementation for each tool
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-medium">
            <span>Select a tool from the sidebar to get started</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Stats */}
        <div className="pt-8 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">{tools.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tools Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client-Side</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Data Collected</div>
          </div>
        </div>
      </div>
    </div>
  );
};
