const API_EMPLOYEES_URL = "/api/company/employees";

function getEmployeesSuccess(employeeData) {
    return {
        type: "GET_EMPLOYEES_SUCCESS",
        payload: employeeData
    };
}

function removeEmployeeSuccess(updatedEmployeesArr) {
    return {
        type: "REMOVE_EMPLOYEE_SUCCESS",
        payload: updatedEmployeesArr
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

export function removeEmployee(id) {
    return async (dispatch, getState) => {
        try {
            const API_DELETE_URL = `${API_EMPLOYEES_URL}/${id}`;
            const options = {
                method: "DELETE",
                headers: {
                    // TODO authorization with JWT token
                }
            };

            // Delete employee from db.
            const response = await fetch(API_DELETE_URL, options);
            const data = await response.json();
            console.log(data);
            // Delete employee from store state.
            const oldEmployeesArr = getState().employees;
            const updatedEmployeesArr = oldEmployeesArr.filter(employee => employee.employee_id !== id);

            dispatch(removeEmployeeSuccess(updatedEmployeesArr));

        } catch (err) {
            console.error(err);
        }
    };
}