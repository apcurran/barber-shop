import React from "react";

import "./Page404.css";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <div className="page-404-container">
            <h2 className="page-404__test-header">404</h2>
            <h2 className="page-404__sub-header">Oops! The page you requested is not found.</h2>
            <Link to="/" className="page-404__home-link">Return Home</Link>
        </div>
    );
}

export default Page404;
