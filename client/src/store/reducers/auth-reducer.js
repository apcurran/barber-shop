function authReducer(state = false, action) {
    switch (action.type) {
        case "VERIFY_AUTH":
            return { ...state, userAuth: true };
        case "LOG_IN_USER_SUCCESS":
            return { ...state, userAuth: true };
        case "LOG_OUT_USER_SUCCESS":
            return { ...state, userAuth: false };
        default:
            return state;
    }
}

export default authReducer;