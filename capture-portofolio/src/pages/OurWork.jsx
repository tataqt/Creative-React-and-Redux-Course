import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { pageAnimation, sliderAnim } from '../animation';
import { MovieState } from '../movieState';

const OurWork = () => {
    const [movies,] = useState(MovieState);

    return (
        <StyledWork layout="position" variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <Frame1 variants={sliderAnim} />
            <Frame2 variants={sliderAnim} />
            <Frame3 variants={sliderAnim} />
            <Frame4 variants={sliderAnim} />
            {movies.map((movie, index) => <MovieCard key={movie.url} movie={movie} index={index} />)}
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

    @media(max-width: 1300px){
        padding: 2rem 2rem;
    }
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