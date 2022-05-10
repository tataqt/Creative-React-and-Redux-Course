const initState = {
    name: '',
    isLogged: false
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
}