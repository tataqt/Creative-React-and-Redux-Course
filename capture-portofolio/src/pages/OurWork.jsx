import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {
    return (
        <StyledWork>
            <Movie>
                <h2>The Athlete</h2>
                <div className='line'></div>
                <Link to={'/'}>
                    <img src={athlete} alt="Athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The racer</h2>
                <div className='line'></div>
                <Link to={'/'}>
                    <img src={theracer} alt="The racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Goodtimes</h2>
                <div className='line'></div>
                <Link to={'/'}>
                    <img src={goodtimes} alt="Goodtimes" />
                </Link>
            </Movie>
        </StyledWork>
    );
};

const StyledWork = styled.div`
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
`

export default OurWork;