import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUsPage = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
};

export default AboutUsPage;