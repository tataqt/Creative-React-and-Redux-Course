import axios from 'axios';
import {
    popularGamesUrl,
    newGamesUrl,
    upcomingGamesUrl
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