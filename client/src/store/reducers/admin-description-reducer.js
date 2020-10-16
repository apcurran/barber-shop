function adminDescriptionReducer(state = "", action) {
    switch (action.type) {
        case "GET_ABOUT_DESCRIPTION_SUCCESS":
            return action.payload;
        case "PATCH_ABOUT_DESCRIPTION_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default adminDescriptionReducer;