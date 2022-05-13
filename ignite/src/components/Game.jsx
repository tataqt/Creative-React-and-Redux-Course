import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadDetail } from '../redux/actions/detailAction';
import { smallImage } from '../helpers/mediaResize';
import { popUp } from '../helpers/animation';

const Game = ({ id, name, released, image }) => {
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame variants={popUp} initial="hidden" animate="show" layoutId={id} onClick={loadDetailHandler}>
            <motion.h3 layoutId={`title${id}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image${id}`} src={smallImage(image, 420)} alt={name} />
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        border-radius: 1rem;
    }
`;

export default Game;