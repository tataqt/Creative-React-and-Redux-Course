import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUsPage = () => {
    return (
        <React.Fragment>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </React.Fragment>
    );
};

export default AboutUsPage;