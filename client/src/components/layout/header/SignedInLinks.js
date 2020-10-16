import React, { useCallback } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOutUser } from "../../../store/actions/auth-actions";

function SignedInLinks() {
    const dispatch = useDispatch();
    const handleLogOut = useCallback(
        () => dispatch(logOutUser()),
        [dispatch]
    );

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
                <a onClick={handleLogOut} href="#" className="nav__link">Log Out</a>
            </li>
        </ul>
    );
}

export default SignedInLinks;
