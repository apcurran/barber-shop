const API_APPOINTMENTS_URL = "/api/users/admin/appointments";

function getAppointmentsSuccess(appointmentsArr) {
    return {
        type: "GET_APPOINTMENTS_SUCCESS",
        payload: appointmentsArr
    };
}

export function getAppointments() {
    return async (dispatch) => {
        try {
            const response = await fetch(API_APPOINTMENTS_URL);
            const appointments = await response.json();

            dispatch(getAppointmentsSuccess(appointments));
        } catch (err) {
            console.error(err);
        }
    };
}