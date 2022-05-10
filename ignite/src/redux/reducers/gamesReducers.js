const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    serched: []
}

export const gamesReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
            };
        default:
            return {
                ...state
            };
    }
}