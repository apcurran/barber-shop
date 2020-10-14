const API_SERVICES_URL = "/api/company/services";

function getServicesSuccess(servicesData) {
    return {
        type: "GET_SERVICES_SUCCESS",
        payload: servicesData
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