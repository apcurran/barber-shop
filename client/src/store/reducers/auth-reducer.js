function authReducer(state = false, action) {
    switch (action.type) {
        case "LOG_IN":
            return !state;
        default:
            return state;
    }
}

export default authReducer;