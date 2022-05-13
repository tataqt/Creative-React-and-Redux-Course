import axios from 'axios';
import {
    popularGamesUrl,
    newGamesUrl,
    upcomingGamesUrl,
    searchGameURL
} from '../../helpers/api'

export const loadGames = () => async (dispatch) => {
    const popuarData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popuarData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}

export const fetchSeacrh = (game_name) => async (dispatch) => {
    const searchedData = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedData.data.results,
        }
    })
}

export const clearSeacrh = () => {
    return { type: "CLEAR_SEARCHED" };
}