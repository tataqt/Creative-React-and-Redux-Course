import {
    combineReducers
} from 'redux';
import { detailReducers } from './detailReducer';
import { gamesReducers } from './gamesReducers';
import { userReducer } from './userReducers';

const rootReducer = combineReducers({
    games: gamesReducers,
    user: userReducer,
    detail: detailReducers
});

export default rootReducer;