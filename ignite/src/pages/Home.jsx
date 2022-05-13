import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Game from '../components/Game';
import { loadGames } from '../redux/actions/gamesActions';
import GameDetail from '../components/GameDetail';

const Home = () => {
    const dispatch = useDispatch();
    const { popular, newGames, upcoming } = useSelector(state => state.games);

    useEffect(() => {
        dispatch(loadGames());
        // eslint-disable-next-line
    }, [dispatch]);

    return (
        <GameList>
                <AnimatePresence >
                    <GameDetail />
               
                <h2>Upcoming games</h2>
                <Games>
                    {upcoming.map(game =>
                        <Game
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                        />
                    )}
                </Games>
                <h2>Popular games</h2>
                <Games>
                    {popular.map(game =>
                        <Game
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                        />
                    )}
                </Games>
                <h2>New games</h2>
                <Games>
                    {newGames.map(game =>
                        <Game
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                        />
                    )}
                </Games>
                </AnimatePresence>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    margin-bottom: 3rem;
`;

export default Home;