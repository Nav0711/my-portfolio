import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { CONTACT_LINKS } from '../../utils/constants';
import ContactForm from '../forms/ContactForm';

const iconMap = {
  Mail,
  Github,
  Linkedin
};

const Contact = ({ registerSection, showNotification }) => {
  return (
    <section 
      ref={el => registerSection('contact', el)}
      id="contact" 
      className="mb-20 animate-fade-in"
    >
      <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
        get in touch
        <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
      </h2>
      <div className="grid md:grid-cols-2 gap-15">
        <div>
          <p className="text-base leading-relaxed mb-8 text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to chat about tech? I'd love to hear from you!
          </p>
          <div className="space-y-4">
            {CONTACT_LINKS.map((link, index) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a 
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:translate-x-1 py-3 border-b border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                >
                  <IconComponent size={18} />
                  <span>{link.text}</span>
                </a>
              );
            })}
          </div>
        </div>
        
        <ContactForm showNotification={showNotification} />
      </div>
    </section>
  );
};

export default Contact;