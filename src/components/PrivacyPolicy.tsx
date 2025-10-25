import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-light-surface-elevated to-light-bg dark:from-dark-bg dark:via-dark-surface-elevated dark:to-dark-bg">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your privacy is our priority. Learn how we protect your data.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg border border-light-border dark:border-dark-border overflow-hidden">
          <div className="p-6 sm:p-8">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Cryptools is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, and safeguard your information when you use our encryption and conversion tools.
              </p>
            </section>

            {/* Data Collection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                Data Collection
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <UserCheck className="w-5 h-5" />
                    Zero Data Collection
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    We do not collect, store, or transmit any of your data. All processing happens locally in your browser.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What We Don't Collect:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No text you input or process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No encryption keys or passwords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No usage analytics or tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Local Storage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Local Storage
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  We use your browser's local storage to enhance your experience:
                </p>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Theme preference (light/dark mode)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Favorite tools list</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Custom cipher presets</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">
                  This data stays on your device and is never transmitted to our servers.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <div className="space-y-4">
                <div className="border border-light-border dark:border-dark-border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    We use Google Analytics to understand how our website is used. This helps us improve the user experience. 
                    Analytics data is anonymized and doesn't include any of your processed data.
                  </p>
                </div>
                
                <div className="border border-light-border dark:border-dark-border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Google AdSense</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    We display advertisements through Google AdSense. These ads are not related to your data processing activities.
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Security
              </h2>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Educational Use Only
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 text-sm">
                      Cryptools is designed for educational purposes only. Do not use for production security, 
                      storing sensitive data, or any security-critical applications.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> privacy@cryptools.click
                </p>
              </div>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
