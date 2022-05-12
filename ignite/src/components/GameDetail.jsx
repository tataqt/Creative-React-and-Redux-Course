import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { unLoadDetail } from '../redux/actions/detailAction';

const GameDetail = () => {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail.game);

    if (!Object.keys(detail).length) {
        return <></>
    }

    const closeDetailHandler = (e) => {
        if (e.currentTarget === e.target) {
            document.body.style.overflow = 'initial';
            dispatch(unLoadDetail());
        }
    }

    return (
        <CardShadow onClick={closeDetailHandler}>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{detail.name}</h3>
                        <p>Rating: {detail.rating}</p>
                    </div>
                    <Info>
                        <h3>Platform</h3>
                        <Platforms>
                            {detail.platforms.map(data =>
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            )}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={detail.background_image} alt="game" />
                </Media>
                <Description>
                    <p>{detail.description_raw}</p>
                </Description>
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
    cursor: pointer;
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
  padding: 2rem 5rem;
  margin: 1rem 0;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  cursor: initial;
  img{
      width: 100%;
  }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
      margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0;
`

export default GameDetail;