import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLinks() {
    return (
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/" className="nav__link">About</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/services" className="nav__link">Services</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/users/appointments" className="nav__link">Book Appointment</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/users/logout" className="nav__link">Log Out</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;
