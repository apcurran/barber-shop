function authReducer(state = false, action) {
    switch (action.type) {
        case "VERIFY_AUTH":
            return { ...state, userAuth: true };
        case "LOG_IN_USER_SUCCESS":
            return { ...state, userAuth: true };
        case "LOG_IN_USER_ERROR":
            return { ...state, error: action.error };
        case "LOG_OUT_USER_SUCCESS":
            return { ...state, userAuth: false };
        case "LOG_IN_ADMIN_SUCCESS":
            return { ...state, userAuth: true };
        case "LOG_IN_ADMIN_ERROR":
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export default authReducer;