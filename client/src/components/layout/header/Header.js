import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Header() {
    const isAuth = false; // Temp, for testing
    const links = isAuth ? <SignedInLinks /> : <SignedOutLinks /> 

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
