const API_EMPLOYEES_URL = "/api/company/employees";

function getEmployeesSuccess(employeeData) {
    return {
        type: "GET_EMPLOYEES_SUCCESS",
        payload: employeeData
    };
}

function patchEmployeeSuccess(updatedEmployeesArr) {
    return {
        type: "PATCH_EMPLOYEE_SUCCESS",
        payload: updatedEmployeesArr
    };
}

function removeEmployeeSuccess(updatedEmployeesArr) {
    return {
        type: "REMOVE_EMPLOYEE_SUCCESS",
        payload: updatedEmployeesArr
    };
}

function addEmployeeSuccess(updatedEmployeesArr) {
    return {
        type: "ADD_EMPLOYEE_SUCCESS",
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

export function addEmployee(employeeData) {
    return async (dispatch, getState) => {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(employeeData)
            };

            const response = await fetch(API_EMPLOYEES_URL, options);
            await response.json();

            const oldEmployeesArr = getState().employees;
            const updatedEmployeesArr = [...oldEmployeesArr, employeeData];

            dispatch(addEmployeeSuccess(updatedEmployeesArr));

        } catch (err) {
            console.error(err);
        }
    };
}

export function patchEmployee(employeeData) {
    return async (dispatch, getState) => {
        try {
            const API_PATCH_URL = `${API_EMPLOYEES_URL}/${employeeData.employee_id}`;
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(employeeData)
            };

            // Update employee in db.
            const response = await fetch(API_PATCH_URL, options);
            await response.json();
            // Update employee in store state.
            const oldEmployeesArr = getState().employees;
            const updatedEmployeesArr = oldEmployeesArr.map((employee) => {
                if (employee.employee_id === employeeData.employee_id) {
                    return employeeData; // Transform current employee to updated employee data.
                } else {
                    return employee;
                }
            });

            dispatch(patchEmployeeSuccess(updatedEmployeesArr));

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
                    "Authorization": `Bearer ${localStorage.token}`
                }
            };

            // Delete employee from db.
            const response = await fetch(API_DELETE_URL, options);
            const data = await response.json();
            // Delete employee from store state.
            const oldEmployeesArr = getState().employees;
            const updatedEmployeesArr = oldEmployeesArr.filter((employee) => employee.employee_id !== id);

            dispatch(removeEmployeeSuccess(updatedEmployeesArr));

        } catch (err) {
            console.error(err);
        }
    };
}