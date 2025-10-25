import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, Heart, Zap } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-light-surface-elevated to-light-bg dark:from-dark-bg dark:via-dark-surface-elevated dark:to-dark-bg">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Shield className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-light-text-muted dark:text-dark-text-muted mb-2">
            Your privacy is our priority. Learn how we protect your data.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-light-text-subtle dark:text-dark-text-subtle">
            <Heart className="w-4 h-4 text-error" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl border border-light-border dark:border-dark-border overflow-hidden">
          <div className="p-8 sm:p-12">
            
            {/* Introduction */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Introduction
                </h2>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
                <p className="text-lg text-light-text dark:text-dark-text leading-relaxed">
                  Cryptools is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, and safeguard your information when you use our encryption and conversion tools.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-success to-success-dark rounded-xl shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Data Collection
                </h2>
              </div>
              <div className="bg-success-50 dark:bg-success-900/20 border-2 border-success-200 dark:border-success-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-success rounded-lg">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-success-800 dark:text-success-200">
                    Zero Data Collection
                  </h3>
                </div>
                <p className="text-lg text-success-700 dark:text-success-300 mb-4">
                  We do not collect, store, or transmit any of your data. All processing happens locally in your browser.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No personal information</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No text you input or process</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No encryption keys or passwords</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No usage analytics or tracking</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Local Storage */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-accent to-accent-dark rounded-xl shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Local Storage
                </h2>
              </div>
              <div className="bg-accent-50 dark:bg-accent-900/20 border-2 border-accent-200 dark:border-accent-800 rounded-2xl p-6 shadow-lg">
                <p className="text-lg text-accent-800 dark:text-accent-200 mb-4">
                  We use your browser's local storage to enhance your experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Theme preference</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Favorite tools list</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Custom cipher presets</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary-100 dark:bg-primary-900/50 rounded-xl">
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    🔒 This data stays on your device and is never transmitted to our servers.
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-warning to-warning-dark rounded-xl shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Security
                </h2>
              </div>
              <div className="bg-warning-50 dark:bg-warning-900/20 border-2 border-warning-200 dark:border-warning-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-warning rounded-lg flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warning-800 dark:text-warning-200 mb-3">
                      Educational Use Only
                    </h3>
                    <p className="text-warning-700 dark:text-warning-300 text-lg leading-relaxed">
                      Cryptools is designed for educational purposes only. Do not use for production security, 
                      storing sensitive data, or any security-critical applications.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Contact Us
                </h2>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800 shadow-lg">
                <p className="text-lg text-light-text dark:text-dark-text mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-4">
                  <p className="text-lg text-light-text dark:text-dark-text font-medium">
                    📧 <strong>Email:</strong> privacy@cryptools.click
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
