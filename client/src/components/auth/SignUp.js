import React, { useState } from 'react';

import "./Auth.css";

function SignUp({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        
        // Keep functionality local, as it does not affect the entire site state to create an account.
        const API_URL = "/api/users/signup";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                repeat_password: repeatPassword
            })
        };
        
        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();
            console.log(data);
            
            if (data.hasOwnProperty("error")) {
                console.error(data);
                
                return;
            }
            
            // Send user to log in page after account creation.
            history.push("/users/login");

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="signup-container auth">
            <div className="auth-inner-wrapper">
                <h1 className="auth-title">Sign Up</h1>
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
                    <div className="auth-form__group">
                        <label htmlFor="repeat-password" className="auth-form__group__label">Confirm Password</label>
                        <input
                            onChange={(event) => setRepeatPassword(event.target.value)}
                            type="password"
                            id="repeat-password"
                            className="auth-form__group__input"
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
