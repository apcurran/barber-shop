import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import openSocket from "socket.io-client";

import { getAppointments } from "../../../store/actions/admin-appointments-actions";
import AppointmentsList from "./appointments-list/AppointmentsList";

function Appointments() {
    const dispatch = useDispatch();
    const appointmentsArr = useSelector(state => state.appointments);

    useEffect(() => {
        dispatch(getAppointments());
        openSocket("http://localhost:5000");
    }, [dispatch]);

    return (
        <div className="admin-appointments">
            <h1 className="admin-appointments__title">Appointments</h1>
            <AppointmentsList appointmentsArr={appointmentsArr} />
        </div>
    );
}

export default Appointments;
