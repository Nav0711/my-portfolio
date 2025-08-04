import React, { useState } from 'react';
import { ANIMATION_CONFIG } from '../../utils/constants';

const ContactForm = ({ showNotification }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      
      setTimeout(() => setFormStatus('idle'), ANIMATION_CONFIG.FORM_SUCCESS_DELAY);
    } catch (error) {
      setFormStatus('error');
      showNotification('Failed to send message. Please try again or contact me directly.', 'error');
      
      setTimeout(() => setFormStatus('idle'), ANIMATION_CONFIG.FORM_SUCCESS_DELAY);
    }
  };

  const getButtonClasses = () => {
    const baseClasses = "w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none";
    
    if (formStatus === 'success') {
      return `${baseClasses} bg-green-500 text-white focus:ring-green-500`;
    }
    if (formStatus === 'error') {
      return `${baseClasses} bg-red-500 text-white focus:ring-red-500`;
    }
    return `${baseClasses} bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 hover:-translate-y-0.5 focus:ring-gray-900 dark:focus:ring-white`;
  };

  const getButtonText = () => {
    switch (formStatus) {
      case 'sending': return 'sending...';
      case 'success': return 'message sent!';
      case 'error': return 'failed to send';
      default: return 'send message';
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Your name"
          required
          disabled={formStatus === 'sending'}
          className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Your email"
          required
          disabled={formStatus === 'sending'}
          className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          placeholder="Your message"
          rows={5}
          required
          disabled={formStatus === 'sending'}
          className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 transition-all disabled:opacity-60 disabled:cursor-not-allowed resize-vertical"
        />
      </div>
      <button
        type="submit"
        disabled={formStatus === 'sending'}
        className={getButtonClasses()}
      >
        {getButtonText()}
      </button>
    </form>
  );
};

export default ContactForm;