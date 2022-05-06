import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, sliderAnim } from '../animation';
import styled from 'styled-components';
import { MovieState } from '../movieState';

const OurWork = () => {
    const [movies,] = useState(MovieState);

    return (
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <Frame1 variants={sliderAnim} />
            <Frame2 variants={sliderAnim} />
            <Frame3 variants={sliderAnim} />
            <Frame4 variants={sliderAnim} />
            {movies.map((movie) => (
                <Movie key={movie.url}>
                    <motion.h2 variants={fade}>{movie.title}</motion.h2>
                    <motion.div variants={lineAnim} className='line'></motion.div>
                    <Link to={movie.url}>
                        <Hide>
                            <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title} />
                        </Hide>
                    </Link>
                </Movie>
            ))}
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;