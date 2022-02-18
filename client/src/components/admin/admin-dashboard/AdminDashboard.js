import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./AdminDashboard.css";
import AdminDashboardLinks from "./AdminDashboardLinks";
import Appointments from "./Appointments";
import Description from "./Description";
import Employees from "./Employees";
import Services from "./Services";

function AdminDashboard() {
    // Grab auth state from Redux store
    const { userAuth } = useSelector((state) => state.auth);

    if (!userAuth) {
        return <Navigate to="/admin/login" />;
    }

    return (
        <section className="admin-dashboard">
            <h1 className="admin-dashboard__title">Admin Dashboard</h1>
            <AdminDashboardLinks />
            <Routes>
                <Route path="/admin/dashboard/appointments" element={<Appointments />} />
                <Route path="/admin/dashboard/description" element={<Description />} />
                <Route path="/admin/dashboard/employees" element={<Employees />} />
                <Route path="/admin/dashboard/services" element={<Services />} />
            </Routes>
        </section>
    );
}

export default AdminDashboard;
