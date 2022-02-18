import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOutUser } from "../../../store/actions/auth-actions";
import { setAppointmentModalActive } from "../../../store/actions/book-appointment-modal-actions";

function SignedInLinks() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = useCallback(
        () => {
            dispatch(logOutUser());
            navigate("/");
        },[dispatch, navigate]
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
                <button onClick={handleActivateAppointmentModal} className="nav__link btn-link-styling">Book Appointment</button>
            </li>
            <li className="nav__item">
                <button onClick={handleLogOut} className="nav__link btn-link-styling">Log Out</button>
            </li>
        </ul>
    );
}

export default SignedInLinks;
