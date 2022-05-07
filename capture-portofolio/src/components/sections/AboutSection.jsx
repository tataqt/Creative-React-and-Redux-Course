import React from 'react';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnim } from '../../animation';
import Wave from '../Wave';
import home1 from '../../img/home1.png';
import { About, Description, Hide, Image } from '../../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img src={home1} alt="guy with a camera" variants={photoAnim} />
            </Image>
            <Wave />
        </About>
    );
};

export default AboutSection;