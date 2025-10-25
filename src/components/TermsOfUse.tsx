import React from 'react';
import { FileText, AlertTriangle, Shield, Code, Users, Gavel } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-light-surface-elevated to-light-bg dark:from-dark-bg dark:via-dark-surface-elevated dark:to-dark-bg">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Please read these terms carefully before using Cryptools.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg border border-light-border dark:border-dark-border overflow-hidden">
          <div className="p-6 sm:p-8">
            
            {/* Acceptance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-primary" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using Cryptools, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Service Description
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cryptools provides free online encryption, hashing, and text conversion tools. Our services include:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Base64 encoding/decoding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hash generation (MD5, SHA-1, SHA-256)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Classical ciphers (Caesar, Vigenère, ROT13)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Text conversion tools (Binary, Hex, URL encoding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Password generation</span>
                </li>
              </ul>
            </section>

            {/* Educational Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Educational Use Only
              </h2>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 text-sm mb-3">
                      Cryptools is designed for educational and demonstration purposes only. The implementations 
                      are simplified for learning and are not suitable for production security.
                    </p>
                    <ul className="space-y-1 text-amber-700 dark:text-amber-300 text-sm">
                      <li>• Do not use for storing sensitive data</li>
                      <li>• Do not use for production security</li>
                      <li>• Do not use for security-critical applications</li>
                      <li>• Use only for learning and experimentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                User Responsibilities
              </h2>
              <div className="space-y-4">
                <div className="border border-light-border dark:border-dark-border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Appropriate Use</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    You agree to use Cryptools only for lawful purposes and in accordance with these Terms of Use.
                  </p>
                </div>
                
                <div className="border border-light-border dark:border-dark-border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Prohibited Activities</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Using the service for illegal activities</li>
                    <li>• Attempting to harm or disrupt the service</li>
                    <li>• Reverse engineering or copying the service</li>
                    <li>• Using automated systems to access the service</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Privacy and Data
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Zero Data Collection
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                  We do not collect, store, or transmit any of your data. All processing happens locally in your browser.
                </p>
                <ul className="space-y-1 text-green-700 dark:text-green-300 text-sm">
                  <li>• No personal information is collected</li>
                  <li>• No text you input is stored or transmitted</li>
                  <li>• No encryption keys or passwords are saved</li>
                  <li>• All processing is client-side only</li>
                </ul>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Disclaimers
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    Security Disclaimer
                  </h3>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    Cryptools is provided "as is" without any warranties. The cryptographic implementations 
                    are for educational purposes only and should not be used for production security.
                  </p>
                </div>
                
                <div className="border border-light-border dark:border-dark-border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Warranties</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    We make no warranties about the accuracy, reliability, or security of the service. 
                    Use at your own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                In no event shall Cryptools, its developers, or contributors be liable for any direct, indirect, 
                incidental, special, or consequential damages arising out of or in connection with the use of this service.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes by posting the new Terms of Use on this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> legal@cryptools.click
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
