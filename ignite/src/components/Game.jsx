import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadDetail } from '../redux/actions/detailAction';

const Game = ({ id, name, released, image }) => {
    const dispatch = useDispatch();
    const gameDetail = useSelector(state => state.detail);

    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        border-radius: 1rem;
    }
`;

export default Game;