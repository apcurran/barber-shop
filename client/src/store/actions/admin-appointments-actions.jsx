const API_APPOINTMENTS_URL = "/api/users/admin/appointments";

function getAppointmentsSuccess(appointmentsArr) {
    return {
        type: "GET_APPOINTMENTS_SUCCESS",
        payload: appointmentsArr,
    };
}

function addNewAppointmentSuccess(updatedAppointmentsArr) {
    return {
        type: "ADD_NEW_APPOINTMENT_SUCCESS",
        payload: updatedAppointmentsArr,
    };
}

function removeAppointmentSuccess(updatedAppointmentsArr) {
    return {
        type: "REMOVE_APPOINTMENT_SUCCESS",
        payload: updatedAppointmentsArr,
    };
}

export function getAppointments() {
    return async (dispatch) => {
        try {
            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            };
            const response = await fetch(API_APPOINTMENTS_URL, options);
            const appointments = await response.json();

            dispatch(getAppointmentsSuccess(appointments));
        } catch (err) {
            console.error(err);
        }
    };
}

export function addNewAppointment(appointmentData) {
    return (dispatch, getState) => {
        const oldAppointmentsArr = getState().appointments;
        const updatedAppointmentsArr = [...oldAppointmentsArr, appointmentData];

        dispatch(addNewAppointmentSuccess(updatedAppointmentsArr));
    };
}

export function removeAppointment(id) {
    return async (dispatch, getState) => {
        try {
            const API_DELETE_URL = `${API_APPOINTMENTS_URL}/${id}`;
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            };

            // Delete appointment from db.
            const response = await fetch(API_DELETE_URL, options);
            await response.json();
            // Delete appointment from store state.
            const oldAppointmentsArr = getState().appointments;
            const updatedAppointmentsArr = oldAppointmentsArr.filter(
                (appointment) => appointment.appointment_id !== id,
            );

            dispatch(removeAppointmentSuccess(updatedAppointmentsArr));
        } catch (err) {
            console.error(err);
        }
    };
}
