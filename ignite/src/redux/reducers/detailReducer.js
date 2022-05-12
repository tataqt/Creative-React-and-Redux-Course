const initState = {
    game: [],
}

export const detailReducers = (state = initState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
            };
        case "CLEAR_DETAIL":
            return { ...initState };
        default:
            return {
                ...state
            };
    }
}