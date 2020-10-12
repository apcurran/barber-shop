import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../../store/actions/auth-actions";

function SignedInLinks({ logOut }) {
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
                <a onClick={logOut} href="#" className="nav__link">Log Out</a>
            </li>
        </ul>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut())
    };
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
