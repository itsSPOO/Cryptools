import React from 'react';
import { Shield, Key, Zap, Code2 } from 'lucide-react';
import { AdBannerInFeed } from './AdBanner';

export const WelcomeScreen: React.FC = () => {

  return (
    <div className="h-full p-3 sm:p-6 lg:p-8 overflow-y-auto mobile-scroll mobile-optimized">
      <div className="max-w-4xl mx-auto animate-fade-in py-4 sm:py-8">
        {/* Hero Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl">
              <i className="fas fa-code text-primary text-6xl" />
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center mb-8">
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

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Cryptools is a comprehensive collection of free online cryptography and encoding tools designed for developers, security professionals, and anyone working with data transformation. Our platform offers 13+ powerful tools including Base64 encoding/decoding, MD5 and SHA-256 hashing, Caesar cipher, Vigenère cipher, ROT13, binary conversion, hexadecimal encoding, URL encoding, AES encryption, and more. All tools are built with privacy in mind - every operation happens entirely in your browser using JavaScript, ensuring that your sensitive data never leaves your device or gets transmitted to any server.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-12">
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

        {/* Conclusion */}
        <div className="max-w-4xl mx-auto my-8">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            Whether you're encoding data for APIs, generating secure hashes, encrypting messages, or converting between different text formats, Cryptools provides fast, reliable, and secure tools that work directly in your browser. No registration required, no data collection, and completely free to use. Select a tool from the sidebar to get started with your cryptography and encoding tasks.
          </p>
        </div>

        {/* Ad Banner */}
        <div className="my-12">
          <AdBannerInFeed />
        </div>

        {/* Detailed Description Section */}
        <div className="space-y-8 bg-white dark:bg-dark-surface rounded-xl p-6 md:p-8 border border-light-border dark:border-dark-border shadow-sm">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Cryptools?
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In today's digital world, data security and proper encoding are essential for developers and IT professionals. Cryptools was created to provide a comprehensive suite of cryptography and encoding tools that prioritize your privacy and security. Unlike many online tools that send your data to remote servers for processing, Cryptools performs all operations locally in your browser using modern JavaScript APIs.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              This client-side approach means your sensitive data never leaves your device, eliminating the risk of data interception or unauthorized access. Whether you're working with passwords, API keys, personal information, or any other sensitive data, you can use Cryptools with complete confidence knowing that your privacy is protected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Tools & Features
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Encoding & Decoding Tools:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Base64:</strong> Encode and decode Base64 strings for data transmission and storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Binary:</strong> Convert text to binary and vice versa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Hexadecimal:</strong> Transform data between text and hexadecimal format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>URL Encoding:</strong> Safely encode URLs and decode URL-encoded strings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Hashing Tools:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>MD5:</strong> Generate MD5 hashes for data integrity verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>SHA-256:</strong> Create secure SHA-256 cryptographic hashes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>SHA-1:</strong> Generate SHA-1 hashes for legacy system compatibility</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Cipher & Encryption Tools:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Caesar Cipher:</strong> Classic substitution cipher with customizable shift values</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Vigenère Cipher:</strong> Polyalphabetic cipher using keyword-based encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>ROT13:</strong> Simple letter substitution cipher for text obfuscation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Benefits
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Complete Privacy:</strong> All processing happens in your browser - no data is ever sent to external servers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>No Registration:</strong> Use all tools immediately without creating an account or providing personal information</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Free Forever:</strong> All tools are completely free with no hidden costs or premium tiers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Modern Interface:</strong> Clean, responsive design that works perfectly on desktop and mobile devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Code Snippets:</strong> View JavaScript implementation for each tool to learn or integrate into your projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Save Presets:</strong> Store your frequently used configurations locally for quick access</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Dark Mode:</strong> Eye-friendly dark theme for comfortable use in any lighting condition</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Who Can Benefit from Cryptools?
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Cryptools is designed for a wide range of users who work with data encoding, encryption, and hashing:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Web Developers:</strong> Encode data for APIs, generate hashes, and test encryption implementations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Security Professionals:</strong> Analyze hashes, test cipher implementations, and verify data integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Students:</strong> Learn about cryptography concepts with hands-on tools and code examples</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>System Administrators:</strong> Generate secure hashes and encode configuration data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span><strong>Data Analysts:</strong> Convert and transform data between different formats</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Using Cryptools is simple and straightforward. Follow these steps to start using any tool:
            </p>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-semibold">1.</span>
                <span>Select a tool from the sidebar navigation menu</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-semibold">2.</span>
                <span>Enter your input data in the provided text field</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-semibold">3.</span>
                <span>Click the appropriate action button (Encode, Decode, Hash, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-semibold">4.</span>
                <span>Copy the result using the convenient copy button</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-semibold">5.</span>
                <span>View code snippets to see how the operation works</span>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};
