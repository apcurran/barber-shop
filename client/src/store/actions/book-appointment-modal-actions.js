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

export function bookAppointment() {
    // TODO check if state necessary in store, otherwise localize state to BookAppointmentModal comp
    return async (dispatch) => {
        const API_URL = "/api/users/appointments";
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        };

        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();
            console.log(data);

        } catch (err) {
            console.error(err);
        }
    };
}