function adminAppointmentsReducer(state = [], action) {
    switch (action.type) {
        case "GET_APPOINTMENTS_SUCCESS":
            return action.payload;
        case "ADD_NEW_APPOINTMENT_SUCCESS":
            return action.payload;
        case "REMOVE_APPOINTMENT_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default adminAppointmentsReducer;
