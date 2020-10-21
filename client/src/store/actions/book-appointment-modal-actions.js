function setAppointmentModalActiveSuccess(activeState) {
    return {
        type: "SET_APPOINTMENT_MODAL_ACTIVE_SUCCESS",
        payload: activeState
    };
}

export function setAppointmentModalActive(activeState) {
    return (dispatch) => {
        dispatch(setAppointmentModalActiveSuccess(activeState));
    };
}