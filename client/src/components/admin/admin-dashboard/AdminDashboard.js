import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import "./AdminDashboard.css";
import AdminDashboardLinks from "./AdminDashboardLinks";
import Appointments from "./Appointments";
import Description from "./Description";
import Employees from "./Employees";
import Services from "./Services";

// const API_DESCRIPTION_URL = "/api/company/description";

function AdminDashboard() {
    // const [descriptionData, setDescriptionData] = useState([]);
    // const [descriptionFormData, setDescriptionFormData] = useState(descriptionData.content);

    function getDescriptionData() {
        // fetch(API_DESCRIPTION_URL)
        //     .then(response => response.json())
        //     .then(data => setDescriptionData(data))
        //     .catch(err => console.error(err));
    }

    function patchDescriptionData(newContent) {
        // const options = {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         content: newContent
        //     })
        // };

        // fetch(API_DESCRIPTION_URL, options)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));
    }

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
