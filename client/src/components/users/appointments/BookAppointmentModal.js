import React from 'react';
import { useDispatch } from "react-redux";

import "./BookAppointmentModal.css";
import { setAppointmentModalActive } from "../../../store/actions/book-appointment-modal-actions";

function BookAppointmentModal() {
    const dispatch = useDispatch();

    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            dispatch(setAppointmentModalActive(false)); // turn off
        }
    }

    return (
        <div onClick={handleBackdropClick} className="backdrop">
            <main className="book-appointment-modal">
                <h1 className="book-appointment__title">Book Appointment</h1>
            </main>
        </div>
    );
}

export default BookAppointmentModal;
