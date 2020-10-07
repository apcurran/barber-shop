import React from 'react';
import { NavLink } from "react-router-dom";

function AdminDashboardLinks() {
    return (
        <ul className="admin-dashboard__list">
            <li className="admin-dashboard__item">
                <NavLink exact to="/admin/dashboard/appointments" activeClassName="admin-dashboard__link--selected" className="admin-dashboard__link">Appointments</NavLink>
            </li>
            <li className="admin-dashboard__item">
                <NavLink exact to="/admin/dashboard/description" activeClassName="admin-dashboard__link--selected" className="admin-dashboard__link">Description</NavLink>
            </li>
            <li className="admin-dashboard__item">
                <NavLink exact to="/admin/dashboard/employees" activeClassName="admin-dashboard__link--selected" className="admin-dashboard__link">Employees</NavLink>
            </li>
            <li className="admin-dashboard__item">
                <NavLink exact to="/admin/dashboard/services" activeClassName="admin-dashboard__link--selected" className="admin-dashboard__link">Services</NavLink>
            </li>
        </ul>
    );
}

export default AdminDashboardLinks;
