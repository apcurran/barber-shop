import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { logInUser } from "../../store/actions/auth-actions";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        dispatch(logInUser(email, password));
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-form__group">
                    <label htmlFor="email" className="auth-form__group__label">Email</label>
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        id="email"
                        className="auth-form__group__input"
                    />
                </div>
                <div className="auth-form__group">
                    <label htmlFor="password" className="auth-form__group__label">Password</label>
                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        id="password"
                        className="auth-form__group__input"
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;
