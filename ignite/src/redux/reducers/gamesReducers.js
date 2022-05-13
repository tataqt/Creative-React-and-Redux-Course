const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

export const gamesReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: []
            };
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