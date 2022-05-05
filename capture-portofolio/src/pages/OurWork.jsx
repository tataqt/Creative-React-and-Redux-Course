import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';
import { MovieState } from '../movieState';

const OurWork = () => {
    const [movies,] = useState(MovieState);

    return (
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            {movies.map((movie) => (
                <Movie key={movie.url}>
                    <h2>{movie.title}</h2>
                    <div className='line'></div>
                    <Link to={movie.url}>
                        <img src={movie.mainImg} alt={movie.title} />
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
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;