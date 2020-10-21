function bookAppointmentModalReducer(state = false, action) {
    switch (action.type) {
        case "SET_APPOINTMENT_MODAL_ACTIVE_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default bookAppointmentModalReducer;