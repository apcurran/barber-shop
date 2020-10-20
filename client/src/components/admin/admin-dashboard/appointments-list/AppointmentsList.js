import React from 'react';

import "./AppointmentsList.css";

function AppointmentsList({ appointmentsArr }) {
    return (
        <main className="appointments-list">
            {appointmentsArr.map(appointment => (
                <article className="appointments-list__appointment">
                    <div className="appointments-list__icon-container">
                        <svg className="info-circle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="appointments-list__info-group-wrapper">
                        <div className="appointments-list__info-container">
                            <h3 className="appointments-list__info__title">Customer Name</h3>
                            <p className="appointments-list__info__value">{appointment.first_name} {appointment.last_name}</p>
                        </div>
                        <div className="appointments-list__info-container">
                            <h3 className="appointments-list__info__title">Phone Number</h3>
                            <p className="appointments-list__info__value">{appointment.phone_number}</p>
                        </div>
                        <div className="appointments-list__info-container">
                            <h3 className="appointments-list__info__title">Check-In Time</h3>
                            <p className="appointments-list__info__value">{appointment.created_at}</p>
                        </div>
                    </div>
                    <button className="appointments-list__delete-btn">Done</button>
                </article>
            ))}
        </main>
    );
}

export default AppointmentsList;
