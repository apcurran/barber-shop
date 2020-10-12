import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Header() {
    // Grab auth state from Redux store
    const auth = useSelector(state => state.auth);
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

export default Header;
