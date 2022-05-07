import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import FaqSection from '../components/sections/FaqSection';

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