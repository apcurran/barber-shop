function authReducer(state = false, action) {
    switch (action.type) {
        case "LOGGED_IN":
            return true;
        case "LOG_OUT":
            localStorage.removeItem("token");

            return false;
        default:
            return false;
    }
}

export default authReducer;