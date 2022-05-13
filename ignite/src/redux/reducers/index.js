import {
    combineReducers
} from 'redux';
import { detailReducers } from './detailReducer';
import { gamesReducers } from './gamesReducers';

const rootReducer = combineReducers({
    games: gamesReducers,
    detail: detailReducers
});

export default rootReducer;