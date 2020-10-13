import React from 'react';
import { Switch, Route } from "react-router-dom";

import "./AdminDashboard.css";
import AdminDashboardLinks from "./AdminDashboardLinks";
import Appointments from "./Appointments";
import Description from "./Description";
import Employees from "./Employees";
import Services from "./Services";

function AdminDashboard() {
    return (
        <section className="admin-dashboard">
            <h1 className="admin-dashboard__title">Admin Dashboard</h1>
            <AdminDashboardLinks />
            <Switch>
                <Route exact path="/admin/dashboard/appointments" component={Appointments} />
                <Route exact path="/admin/dashboard/description" component={Description} />
                <Route exact path="/admin/dashboard/employees" component={Employees} />
                <Route exact path="/admin/dashboard/services" component={Services} />
            </Switch>
        </section>
    );
}

export default AdminDashboard;
