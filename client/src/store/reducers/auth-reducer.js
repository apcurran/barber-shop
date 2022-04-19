function authReducer(state = { userAuth: false, error: "" }, action) {
    switch (action.type) {
        case "VERIFY_AUTH":
            return { userAuth: true, error: "" };
        case "LOG_IN_USER_SUCCESS":
            return { userAuth: true, error: "" };
        case "LOG_IN_USER_ERROR":
            return { ...state, error: action.error };
        case "LOG_OUT_USER_SUCCESS":
            return { userAuth: false, error: "" };
        case "LOG_IN_ADMIN_SUCCESS":
            return { userAuth: true, error: "" };
        case "LOG_IN_ADMIN_ERROR":
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export default authReducer;