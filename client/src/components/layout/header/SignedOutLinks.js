import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLinks() {
    return (
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/services" className="nav__link">Services</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/users/login" className="nav__link">Log In</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/users/signup" className="nav__link">Sign Up</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;
