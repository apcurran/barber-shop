const API_SERVICES_URL = "/api/company/services";

function getServicesSuccess(servicesData) {
    return {
        type: "GET_SERVICES_SUCCESS",
        payload: servicesData
    };
}

function addServiceSuccess(updatedServicesArr) {
    return {
        type: "ADD_SERVICE_SUCCESS",
        payload: updatedServicesArr
    };
}

function removeServiceSuccess(updatedServicesArr) {
    return {
        type: "REMOVE_SERVICE_SUCCESS",
        payload: updatedServicesArr
    };
}

export function getServices() {
    return async (dispatch) => {
        try {
            const response = await fetch(API_SERVICES_URL);
            const services = await response.json();

            dispatch(getServicesSuccess(services));

        } catch (err) {
            console.error(err);
        }
    };
}

export function addService(newServiceData) {
    return async (dispatch, getState) => {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newServiceData)
            };

            // Add service to db.
            const response = await fetch(API_SERVICES_URL, options);
            const data = await response.json();
            console.log(data);
            // Add service to Redux store.
            const oldServicesArr = getState().services;
            const updatedServicesArr = [...oldServicesArr, newServiceData];

            dispatch(addServiceSuccess(updatedServicesArr));

        } catch (err) {
            console.error(err);
        }
    };
}

export function removeService(id) {
    return async (dispatch, getState) => {
        try {
            const API_DELETE_URL = `${API_SERVICES_URL}/${id}`;
            const options = {
                method: "DELETE",
                headers: {
                    // TODO add auth with JWT token
                }
            };

            // Delete service from db.
            const response = await fetch(API_DELETE_URL, options);
            const data = await response.json();
            console.log(data);
            // Delete service from store state.
            const oldServicesArr = getState().services;
            const updatedServicesArr = oldServicesArr.filter(service => service.service_id !== id);

            dispatch(removeServiceSuccess(updatedServicesArr));

        } catch (err) {
            console.error(err);
        }
    };
}