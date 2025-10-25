import React from 'react';
import { FileText, AlertTriangle, Shield, Code, Users, Gavel, Heart, Zap, Globe, CheckCircle } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-light-surface-elevated to-light-bg dark:from-dark-bg dark:via-dark-surface-elevated dark:to-dark-bg">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FileText className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Terms of Use
          </h1>
          <p className="text-xl text-light-text-muted dark:text-dark-text-muted mb-2">
            Please read these terms carefully before using Cryptools.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-light-text-subtle dark:text-dark-text-subtle">
            <Heart className="w-4 h-4 text-error" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl border border-light-border dark:border-dark-border overflow-hidden">
          <div className="p-8 sm:p-12">
            
            {/* Acceptance */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-accent to-accent-dark rounded-xl shadow-lg">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="bg-accent-50 dark:bg-accent-900/20 rounded-2xl p-6 border border-accent-200 dark:border-accent-800">
                <p className="text-lg text-light-text dark:text-dark-text leading-relaxed">
                  By accessing and using Cryptools, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Service Description
                </h2>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
                <p className="text-lg text-light-text dark:text-dark-text mb-4">
                  Cryptools provides free online encryption, hashing, and text conversion tools. Our services include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Base64 encoding/decoding</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Hash generation (MD5, SHA-1, SHA-256)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Classical ciphers (Caesar, Vigenère, ROT13)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Text conversion tools (Binary, Hex, URL encoding)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-xl">
                    <div className="p-2 bg-primary rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Password generation</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Educational Use */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-warning to-warning-dark rounded-xl shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Educational Use Only
                </h2>
              </div>
              <div className="bg-warning-50 dark:bg-warning-900/20 border-2 border-warning-200 dark:border-warning-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-warning rounded-lg flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warning-800 dark:text-warning-200 mb-3">
                      Important Notice
                    </h3>
                    <p className="text-warning-700 dark:text-warning-300 text-lg leading-relaxed mb-4">
                      Cryptools is designed for educational and demonstration purposes only. The implementations 
                      are simplified for learning and are not suitable for production security.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-warning-600 dark:text-warning-400">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>Do not use for storing sensitive data</span>
                      </div>
                      <div className="flex items-center gap-2 text-warning-600 dark:text-warning-400">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>Do not use for production security</span>
                      </div>
                      <div className="flex items-center gap-2 text-warning-600 dark:text-warning-400">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>Do not use for security-critical applications</span>
                      </div>
                      <div className="flex items-center gap-2 text-warning-600 dark:text-warning-400">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <span>Use only for learning and experimentation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-success to-success-dark rounded-xl shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Privacy and Data
                </h2>
              </div>
              <div className="bg-success-50 dark:bg-success-900/20 border-2 border-success-200 dark:border-success-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-success rounded-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-success-800 dark:text-success-200">
                    Zero Data Collection
                  </h3>
                </div>
                <p className="text-success-700 dark:text-success-300 text-lg mb-4">
                  We do not collect, store, or transmit any of your data. All processing happens locally in your browser.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No personal information is collected</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No text you input is stored or transmitted</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No encryption keys or passwords are saved</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-600 dark:text-success-400">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>All processing is client-side only</span>
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
                  Contact Information
                </h2>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800 shadow-lg">
                <p className="text-lg text-light-text dark:text-dark-text mb-4">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-4">
                  <p className="text-lg text-light-text dark:text-dark-text font-medium">
                    📧 <strong>Email:</strong> legal@cryptools.click
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
