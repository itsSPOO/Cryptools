import React from 'react';
import { SEOHead } from '@/components/SEOHead';

export const TermsOfUse: React.FC = () => {
  return (
    <>
      <SEOHead page="terms" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Terms of Use
        </h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              By accessing and using Cryptools, you accept and agree to be bound by the terms and provisions 
              of this agreement. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Educational Purpose
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Cryptools is provided for educational and learning purposes. The tools are designed to help users 
              understand cryptography, encoding, and text manipulation concepts. They should not be used for 
              production security, storing sensitive data, or any security-critical applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. No Security Guarantees
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              While we implement industry-standard cryptographic functions, we make no warranties about the 
              security or reliability of the tools for production use. Classical ciphers like Caesar, ROT13, 
              and others are not secure for modern applications and should only be used for educational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Use at Your Own Risk
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You use Cryptools at your own risk. We are not responsible for any data loss, security breaches, 
              or other damages resulting from the use of our tools. Always use appropriate security measures 
              for sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The content, design, and code of Cryptools are protected by copyright and other intellectual 
              property laws. You may not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Prohibited Uses
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You agree not to use Cryptools for any illegal activities, to harm others, or to violate any 
              applicable laws or regulations. You may not attempt to reverse engineer, hack, or exploit our 
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website may contain links to third-party websites or services. We are not responsible for 
              the content, privacy policies, or practices of these third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              To the maximum extent permitted by law, Cryptools and its operators shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages resulting from your use of or 
              inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting. Your continued use of the website after changes constitutes acceptance of the 
              modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these terms, please contact us through our contact page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
