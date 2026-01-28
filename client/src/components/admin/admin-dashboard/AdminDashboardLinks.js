import React from "react";
import { NavLink } from "react-router-dom";

function AdminDashboardLinks() {
    return (
        <ul className="admin-dashboard__list">
            <li className="admin-dashboard__item">
                <NavLink
                    to="/admin/dashboard/appointments"
                    activeclassname="admin-dashboard__link--selected"
                    className="admin-dashboard__link"
                >
                    <span>Appointments</span>
                </NavLink>
            </li>
            <li className="admin-dashboard__item">
                <NavLink
                    to="/admin/dashboard/description"
                    activeclassname="admin-dashboard__link--selected"
                    className="admin-dashboard__link"
                >
                    <span>Description</span>
                </NavLink>
            </li>
            <li className="admin-dashboard__item">
                <NavLink
                    to="/admin/dashboard/employees"
                    activeclassname="admin-dashboard__link--selected"
                    className="admin-dashboard__link"
                >
                    <span>Employees</span>
                </NavLink>
            </li>
            <li className="admin-dashboard__item">
                <NavLink
                    to="/admin/dashboard/services"
                    activeclassname="admin-dashboard__link--selected"
                    className="admin-dashboard__link"
                >
                    <span>Services</span>
                </NavLink>
            </li>
        </ul>
    );
}

export default AdminDashboardLinks;
