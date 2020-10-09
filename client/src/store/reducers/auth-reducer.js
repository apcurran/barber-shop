function authReducer(state = false, action) {
    switch (action.type) {
        case "LOGGED_IN":
            return true;
        default:
            return state;
    }
}

export default authReducer;