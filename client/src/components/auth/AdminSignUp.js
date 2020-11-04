import React, { useState } from 'react';

function AdminSignUp({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [adminSecret, setAdminSecret] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        
        // Keep functionality local, as it does not affect the entire site state to create an account.
        const API_URL = "/api/users/admin/signup";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                repeat_password: repeatPassword,
                admin_secret: adminSecret
            })
        };
        
        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();
            
            if (data.hasOwnProperty("error")) {
                setError(data.error);

                return;
            }
            
            // Send user to log in page after account creation.
            history.push("/admin/login");

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="signup-container auth">
            <div className="auth-inner-wrapper">
                <h1 className="auth-title">Create Your Admin Account</h1>
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
                    <div className="auth-form__group">
                        <label htmlFor="admin-secret" className="auth-form__group__label">Admin Secret</label>
                        <input
                            onChange={(event) => setAdminSecret(event.target.value)}
                            type="password"
                            id="admin-secret"
                            className="auth-form__group__input"
                        />
                    </div>
                    {error ? <p className="error">{error}</p> : null}
                    <button type="submit" className="auth-form__submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default AdminSignUp;
