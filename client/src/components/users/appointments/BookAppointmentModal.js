import React from 'react';
import { useDispatch } from "react-redux";

import "./BookAppointmentModal.css";
import { setAppointmentModalActive, bookAppointment } from "../../../store/actions/book-appointment-modal-actions";

function BookAppointmentModal() {
    const dispatch = useDispatch();

    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            dispatch(setAppointmentModalActive(false)); // turn off
        }
    }

    function handleBookAppointment() {
        dispatch(bookAppointment());
        dispatch(setAppointmentModalActive(false));
    }

    return (
        <div onClick={handleBackdropClick} className="backdrop">
            <section className="book-appointment-modal">
                <h1 className="book-appointment-modal__title">Are You Ready to Book Your Appointment?</h1>
                <button onClick={handleBookAppointment} className="book-appointment-modal__confirm-btn">Create Appointment</button>
            </section>
        </div>
    );
}

export default BookAppointmentModal;
