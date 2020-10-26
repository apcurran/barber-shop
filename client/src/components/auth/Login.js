import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Auth.css";
import { logInUser, logInAdmin } from "../../store/actions/auth-actions";

function Login({ adminTitle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // Get error from Redux store state
    const loginError = useSelector(state => state.auth.error);
    const dispatch = useDispatch();
    const history = useHistory();
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        if (adminTitle) {
            // Admin Log In
            dispatch(logInAdmin(email, password));
            history.push("/admin/dashboard");
            
            return;
        }
        
        // User Log In
        dispatch(logInUser(email, password, history)); // Passing history obj to action
    }

    return (
        <div className="login-container auth">
            <div className="auth-inner-wrapper">
                <h1 className="auth-title">{adminTitle} Log In</h1>
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
                    <p className="error">{loginError}</p>
                    <button type="submit" className="auth-form__submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
