import {
    combineReducers
} from 'redux';
import {
    gamesReducers
} from './gamesReducers';
import {
    userReducer
} from './userReducers';

const rootReducer = combineReducers({
    games: gamesReducers,
    user: userReducer
});

export default rootReducer;