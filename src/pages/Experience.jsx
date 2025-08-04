import React from "react";

import CustomCursor from "../components/ui/CustomCursor";
import Navigation from "../components/ui/Navigation";
import DarkModeToggle from "../components/ui/DarkModeToggle";
import BackToTop from "../components/ui/BackToTop";

const Experience = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Navigation Bar */}
            <Navigation />

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Back to Top */}
            <BackToTop />

            <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
                {/* Experience Section */}
                <h1 className="text-3xl font-bold mb-8">Experience</h1>
                {/* Add your experience content here */}
            </div>
        </div>
    );
}
export default Experience;