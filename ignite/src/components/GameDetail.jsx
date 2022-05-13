import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { unLoadDetail } from '../redux/actions/detailAction';
import { smallImage } from '../helpers/mediaResize';
import { getPlatform, getStars } from '../helpers/util';


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
        <CardShadow onClick={closeDetailHandler}    >
            <Detail layoutId={detail.id}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title${detail.id}`}>{detail.name}</motion.h3>
                        <p>Rating: {detail.rating}</p>
                        {getStars(detail.rating)}
                    </div>
                    <Info>
                        <h3>Platform</h3>
                        <Platforms>
                            {detail.parent_platforms.map(data =>
                                <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}/>
                            )}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image${detail.id}`} src={smallImage(detail.background_image, 1280)} alt="game" />
                </Media>
                <Description>
                    <p>{detail.description_raw}</p>
                </Description>
                <div className="galary">
                    {detail.screenshots.map(screen =>
                        <img key={screen.id} src={smallImage(screen.image, 1280)} alt='game' />
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
    z-index: 1;
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
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
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