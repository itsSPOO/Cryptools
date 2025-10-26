import React from 'react';
import { SEOHead } from '@/components/SEOHead';

export const Disclaimer: React.FC = () => {
  return (
    <>
      <SEOHead page="disclaimer" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Disclaimer
        </h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. General Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The information provided by Cryptools is for educational and informational purposes only. 
              We make no representations or warranties of any kind, express or implied, about the completeness, 
              accuracy, reliability, suitability, or availability of the tools and information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Educational Purpose Only
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>⚠️ Important:</strong> Cryptools is designed for educational purposes to help users learn 
              about cryptography, encoding, and text manipulation. The tools should NOT be used for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Production security systems or applications</li>
              <li>Storing or protecting sensitive personal or financial data</li>
              <li>Security-critical applications or environments</li>
              <li>Compliance with security standards or regulations</li>
              <li>Professional cryptographic implementations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Security Limitations
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Many of the ciphers and encoding methods provided (such as Caesar Cipher, ROT13, Atbash, etc.) 
              are classical cryptographic techniques that are <strong>not secure</strong> by modern standards. 
              They can be easily broken and should only be used for learning, puzzles, or non-security purposes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Even modern hash functions like MD5 and SHA-1 are considered cryptographically weak and should 
              not be used for security-sensitive applications. Use SHA-256 or stronger alternatives for 
              production security needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. No Professional Advice
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The information on this website is not intended as professional security advice, legal advice, 
              or any other form of professional consultation. Always consult with qualified security 
              professionals for production systems and sensitive data protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. No Warranty
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The tools and services are provided "as is" without any warranties, express or implied. 
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>The tools will be error-free or uninterrupted</li>
              <li>The results will be accurate or reliable</li>
              <li>Any errors or defects will be corrected</li>
              <li>The tools meet your specific requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              In no event shall Cryptools or its operators be liable for any damages (including, without 
              limitation, damages for loss of data, business interruption, or loss of information) arising 
              out of the use or inability to use the tools, even if we have been advised of the possibility 
              of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. External Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website may contain links to external websites. We have no control over the content and 
              nature of these sites and are not responsible for their content, privacy policies, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              8. User Responsibility
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>How you use the tools and information provided</li>
              <li>Ensuring compliance with applicable laws and regulations</li>
              <li>Protecting your sensitive data with appropriate security measures</li>
              <li>Verifying the accuracy and suitability of results for your purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              9. Changes to Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify this disclaimer at any time. Changes will be effective 
              immediately upon posting on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              10. Contact
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this disclaimer, please contact us through our contact page.
            </p>
          </section>

          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>⚠️ Remember:</strong> This tool is for educational use only. Do not use for production 
              security, storing sensitive data, or any security-critical applications. Always use appropriate 
              professional security solutions for real-world applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
