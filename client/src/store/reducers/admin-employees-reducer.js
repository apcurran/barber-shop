function adminEmployeesReducer(state = [], action) {
    switch (action.type) {
        case "GET_EMPLOYEES_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default adminEmployeesReducer;