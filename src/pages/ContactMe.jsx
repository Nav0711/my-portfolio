import React from "react";

import CustomCursor from "../components/ui/CustomCursor";
import Navigation from "../components/ui/Navigation";
import ContactForm from "../components/forms/ContactForm";
import DarkModeToggle from "../components/ui/DarkModeToggle";
import BackToTop from "../components/ui/BackToTop";

const ContactMe = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Custom Cursor */}
            <CustomCursor />
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            <Navigation /> {/* Navigation bar */}

            {/* Back to Top */}
            <BackToTop />

            <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
                {/* Contact Section */}
                <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
                <ContactForm />
            </div>
        </div>
    );
}
export default ContactMe;