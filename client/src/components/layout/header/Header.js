import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Header({ auth }) {
    // const isAuth = false; // Temp, for testing
    const links = auth ? <SignedInLinks /> : <SignedOutLinks /> 

    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav__logo-link">
                    <img src={logo} alt="Black Premium Cuts logo" className="nav__logo-img"/>
                </NavLink>
                {links}
            </nav>
        </header>
    );
}

function mapStateToProps(state) {
    console.log(state);

    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Header);
