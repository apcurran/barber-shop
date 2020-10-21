import React, { useCallback } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOutUser } from "../../../store/actions/auth-actions";
import { setAppointmentModalActive } from "../../../store/actions/book-appointment-modal-actions";

function SignedInLinks() {
    const dispatch = useDispatch();
    const handleLogOut = useCallback(
        () => dispatch(logOutUser()),
        [dispatch]
    );

    function handleActivateAppointmentModal() {
        dispatch(setAppointmentModalActive(true));
    }

    return (
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/services" className="nav__link">Services</NavLink>
            </li>
            <li className="nav__item">
                <button onClick={handleActivateAppointmentModal} className="nav__link book-appointment-btn">Book Appointment</button>
            </li>
            <li className="nav__item">
                <a onClick={handleLogOut} href="#" className="nav__link">Log Out</a>
            </li>
        </ul>
    );
}

export default SignedInLinks;
