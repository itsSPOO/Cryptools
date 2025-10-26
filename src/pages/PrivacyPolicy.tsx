import React from 'react';
import { SEOHead } from '@/components/SEOHead';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead page="privacy" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to Cryptools. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we handle your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Data Processing
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Client-Side Processing:</strong> All cryptographic operations, text conversions, and password 
              generation are performed entirely in your browser. Your data never leaves your device and is not 
              transmitted to our servers or any third-party services.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>No Data Collection:</strong> We do not collect, store, or process any of the text, passwords, 
              or other content you input into our tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Cookies and Local Storage
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We use browser local storage to save your preferences (such as theme settings and tool presets) 
              locally on your device. This data is not transmitted to our servers and remains under your control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use 
              cookies and web beacons to collect information about your visits to this and other websites to 
              provide relevant advertisements. You can opt out of personalized advertising by visiting 
              Google's Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Since we don't collect personal data, there is no personal information to access, modify, or delete. 
              You can clear your browser's local storage at any time to remove any saved preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              All processing happens locally in your browser using modern web standards and cryptographic APIs. 
              We recommend using HTTPS to access our site for additional security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this privacy policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this privacy policy, please contact us through our contact page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
