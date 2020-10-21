import React from 'react';
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { format, parseISO } from "date-fns";

import "./AppointmentsList.css";
import { removeAppointment } from "../../../../store/actions/admin-appointments-actions";

function AppointmentsList({ appointmentsArr }) {
    const dispatch = useDispatch();
    
    function formatDate(currAppointment) {
        return format(parseISO(currAppointment.created_at), "hh:mm aa MMMM dd, yyyy");
    }

    function handleAppointmentDelete(id) {
        dispatch(removeAppointment(id));
    }

    return (
        <main className="appointments-list">
            {appointmentsArr.map(appointment => (
                <motion.article
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="appointments-list__card"
                >
                    <div className="appointments-list__card__icon-container">
                        <svg className="info-circle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="appointments-list__card__info-group-wrapper">
                        <div className="appointments-list__card__info-container">
                            <h3 className="appointments-list__card__info__title">Customer Name</h3>
                            <p className="appointments-list__card__info__value">{appointment.first_name} {appointment.last_name}</p>
                        </div>
                        <div className="appointments-list__card__info-container">
                            <h3 className="appointments-list__card__info__title">Phone Number</h3>
                            <p className="appointments-list__card__info__value">{appointment.phone_number}</p>
                        </div>
                        <div className="appointments-list__card__info-container">
                            <h3 className="appointments-list__card__info__title">Check-In Time</h3>
                            <p className="appointments-list__card__info__value">{formatDate(appointment)}</p>
                        </div>
                    </div>
                    <button onClick={() => handleAppointmentDelete(appointment.appointment_id)} className="appointments-list__card__delete-btn">Done</button>
                </motion.article>
            ))}
        </main>
    );
}

export default AppointmentsList;
