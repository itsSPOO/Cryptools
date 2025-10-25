import React, { useState } from 'react';
import { Mail, MessageCircle, Github, Twitter, Send, CheckCircle, AlertCircle, Heart, Zap, Clock, Star } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-light-surface-elevated to-light-bg dark:from-dark-bg dark:via-dark-surface-elevated dark:to-dark-bg">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-light-text-muted dark:text-dark-text-muted mb-2">
            Get in touch with our team. We'd love to hear from you!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-light-text-subtle dark:text-dark-text-subtle">
            <Heart className="w-4 h-4 text-error" />
            <span>We're here to help</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl border border-light-border dark:border-dark-border overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
                  Send us a Message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-light-border dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-light-border dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-light-border dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text shadow-sm hover:shadow-md focus:shadow-lg"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="security">Security Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-light-text dark:text-dark-text mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-light-border dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text resize-none shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-lg">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span className="text-lg">Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 text-success dark:text-success-light bg-success-50 dark:bg-success-900/20 border-2 border-success-200 dark:border-success-800 rounded-xl p-4 shadow-lg">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 text-error dark:text-error-light bg-error-50 dark:bg-error-900/20 border-2 border-error-200 dark:border-error-800 rounded-xl p-4 shadow-lg">
                    <AlertCircle className="w-6 h-6" />
                    <span className="font-medium">Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Quick Contact */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl border border-light-border dark:border-dark-border p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-success to-success-dark rounded-xl shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
                  Quick Contact
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-3 bg-primary rounded-xl shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text">Email</h3>
                    <p className="text-light-text-muted dark:text-dark-text-muted">contact@cryptools.click</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-accent-50 dark:bg-accent-900/20 rounded-2xl border border-accent-200 dark:border-accent-800 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-3 bg-accent rounded-xl shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text">Response Time</h3>
                    <p className="text-light-text-muted dark:text-dark-text-muted">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl border border-light-border dark:border-dark-border p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-accent to-accent-dark rounded-xl shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">
                    Is Cryptools free to use?
                  </h3>
                  <p className="text-light-text-muted dark:text-dark-text-muted">
                    Yes, Cryptools is completely free and open source.
                  </p>
                </div>

                <div className="p-4 bg-success-50 dark:bg-success-900/20 rounded-xl border border-success-200 dark:border-success-800">
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">
                    Is my data secure?
                  </h3>
                  <p className="text-light-text-muted dark:text-dark-text-muted">
                    All processing happens locally in your browser. We don't collect any data.
                  </p>
                </div>

                <div className="p-4 bg-warning-50 dark:bg-warning-900/20 rounded-xl border border-warning-200 dark:border-warning-800">
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">
                    Can I use this for production?
                  </h3>
                  <p className="text-light-text-muted dark:text-dark-text-muted">
                    No, this is for educational purposes only. Use proper crypto libraries for production.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
