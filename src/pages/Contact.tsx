import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <SEOHead page="contact" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Us
        </h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions for new features, 
            feel free to reach out to us.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            
            <div className="grid gap-6">
              {/* Email */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Send us an email for general inquiries or support
                </p>
                <a 
                  href="mailto:contact@cryptools.click" 
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  contact@cryptools.click
                </a>
              </div>

              {/* Feedback */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Feedback & Suggestions
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We're always looking to improve Cryptools. If you have ideas for new features, tools, 
                  or improvements, we'd love to hear them! Your feedback helps us make Cryptools better 
                  for everyone.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Yes! All processing happens locally in your browser. Your data never leaves your device 
                  and is not transmitted to our servers or any third-party services.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Can I use these tools for production?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Cryptools is designed for educational purposes. While we implement industry-standard 
                  cryptographic functions, we recommend using professional security solutions for 
                  production environments and sensitive data.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How can I report a bug?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  You can report bugs by emailing us at contact@cryptools.click. 
                  Please include details about the issue and steps to reproduce it.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Can I request a new tool?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Absolutely! We're always looking to add new tools. Send us your suggestions via email, 
                  and we'll consider them for future updates.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Thank You!
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Thank you for using Cryptools. We appreciate your support and feedback as we continue 
              to improve and expand our collection of cryptographic and encoding tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
