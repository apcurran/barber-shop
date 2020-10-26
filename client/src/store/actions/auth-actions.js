export function verifyAuth() {
    return {
        type: "VERIFY_AUTH"
    };
}

function logInUserSuccess() {
    return {
        type: "LOG_IN_USER_SUCCESS"
    };
}

function logInUserError(err) {
    return {
        type: "LOG_IN_USER_ERROR",
        error: err
    };
}

function logOutUserSuccess() {
    return {
        type: "LOG_OUT_USER_SUCCESS"
    };
}

function logInAdminSuccess() {
    return {
        type: "LOG_IN_ADMIN_SUCCESS"
    };
}

export function logInUser(email, password, history) {
    return async (dispatch) => {
        const API_URL = "/api/users/login";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        };

        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();

            if (data.hasOwnProperty("error")) {
                console.error(data);

                dispatch(logInUserError(data.error));
                return;
            }

            // No error, continue
            const token = data.accessToken;
            
            localStorage.setItem("token", token);

            dispatch(logInUserSuccess());
            history.push("/");

        } catch (err) {
            console.error(err);
        }
    };
}

export function logOutUser() {
    return (dispatch) => {
        localStorage.removeItem("token");

        dispatch(logOutUserSuccess());
    };
}

export function logInAdmin(email, password) {
    return async (dispatch) => {
        const API_URL = "/api/users/admin/login";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        };

        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();

            if (data.hasOwnProperty("error")) {
                console.error(data);

                return;
            }

            console.log(data);

            const token = data.accessToken;
            
            localStorage.setItem("token", token);

            dispatch(logInAdminSuccess());

        } catch (err) {
            console.error(err);
        }
    };
}