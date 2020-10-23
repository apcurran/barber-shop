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

export function logInUser(email, password) {
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

                return;
            }

            const token = data.accessToken;
            
            localStorage.setItem("token", token);

            dispatch(logInUserSuccess());

        } catch (err) {
            console.error(err);
        }
    };
}

export function logOutUser() {
    return (dispatch) => {
        if (localStorage.isAdmin) {
            localStorage.removeItem("isAdmin");
        }
        
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
            const { isAdmin } = data;
            
            localStorage.setItem("token", token);
            localStorage.setItem("isAdmin", isAdmin);

            dispatch(logInUserSuccess());

        } catch (err) {
            console.error(err);
        }
    };
}