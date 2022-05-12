import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameDetail = () => {
    const detail = useSelector(state => state.detail.game);

    if (!Object.keys(detail).length) {
        return <></>
    }

    return (
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{detail.name}</h3>
                        <p>Rating: {detail.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platform</h3>
                        <div className="platforms">
                            {detail.platforms.map(data =>
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            )}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={detail.background_image} alt="game" />
                </div>
                <div className="description">
                    <p>{detail.description_raw}</p>
                </div>
                <div className="galary">
                    {detail.screenshots.map(screen =>
                        <img key={screen.id} src={screen.image} alt='game' />
                    )}
                </div>
            </Detail>
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background: steelblue;
    }
    &::-webkit-scrollbar-track{
        background: #fff;
    }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  img{
      width: 100%;
  }
`;

export default GameDetail;