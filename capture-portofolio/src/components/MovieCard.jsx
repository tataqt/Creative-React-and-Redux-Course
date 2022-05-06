import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useScroll } from '../useHooks/useScroll';
import { fade, photoAnim, lineAnim, scrollReveal } from '../animation';

const MovieCard = ({ movie, index }) => {
    const [element, controls] = useScroll();

    return (
        <Movie variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div variants={lineAnim} className='line'></motion.div>
            <Link to={movie.url}>
                <Hide>
                    <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title} />
                </Hide>
            </Link>
        </Movie>
    );
};

const Movie = styled(motion.div)`
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

export default MovieCard;