import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { useLocation } from 'react-router-dom';
import { MovieAward as Award } from '../components/MovieAward';
import { MovieState } from '../movieState';

const MovieDetail = () => {
    const url = useLocation();

    const [movies,] = useState(MovieState);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const currentMovie = movies.filter((state) => state.url === url.pathname);
        if (currentMovie[0])
            setMovie(currentMovie[0]);
    }, [movies, url.pathname]);

    return (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt={movie.title} />
            </HeadLine>
            <Awards>
                {movie.awards?.map((award, index) => (
                    <Award
                        key={index}
                        title={award.title}
                        description={award.description}
                    />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="" />
            </ImageDisplay>
        </Details>
    );
};

const Details = styled(motion.div)`
    color: #fff;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 1rem;
    align-items: center;
    justify-content: space-around;
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`



export default MovieDetail;