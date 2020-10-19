function adminServicesReducer(state = [], action) {
    switch (action.type) {
        case "GET_SERVICES_SUCCESS":
            return action.payload;
        case "ADD_SERVICE_SUCCESS":
            return action.payload;
        case "REMOVE_SERVICE_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default adminServicesReducer;