import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getAppointments } from "../../../store/actions/admin-appointments-actions";
import AppointmentsList from "./appointments-list/AppointmentsList";

function Appointments() {
    const dispatch = useDispatch();
    
    // dispatch(getAppointments());

    useEffect(() => {
        dispatch(getAppointments());
    }, [dispatch]);

    return (
        <div>
            <h1>Appointments</h1>
            <AppointmentsList />
        </div>
    );
}

export default Appointments;
