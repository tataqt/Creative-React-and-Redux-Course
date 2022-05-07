import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation, titleAnimation } from '../animation';

const ContactUs = () => {
    return (
        <ConstactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Socials</h2>
                    </Social>
                </Hide>
            </div>
        </ConstactStyle>
    );
};

const ConstactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media(max-width: 1300px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    @media(max-width: 1300px){
        margin-top: 5rem;
    }
    
    margin-bottom: 4rem;
    color: black;
`;

const Hide = styled.div`
    overflow:hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width:1.5rem;
    height: 1.5rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`;

export default ContactUs;