const API_EMPLOYEES_URL = "/api/company/employees";

function getEmployeesSuccess(employeeData) {
    return {
        type: "GET_EMPLOYEES_SUCCESS",
        payload: employeeData
    };
}

export function getEmployees() {
    return async (dispatch) => {
        try {
            const response = await fetch(API_EMPLOYEES_URL);
            const employees = await response.json();

            dispatch(getEmployeesSuccess(employees));

        } catch (err) {
            console.error(err);
        }
    };
}