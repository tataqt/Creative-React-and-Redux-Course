import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from '../redux/actions/gamesActions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            Hello ignite
        </div>
    );
};

export default Home;