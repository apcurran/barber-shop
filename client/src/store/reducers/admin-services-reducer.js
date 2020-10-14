function adminServicesReducer(state = [], action) {
    switch (action.type) {
        case "GET_SERVICES_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default adminServicesReducer;