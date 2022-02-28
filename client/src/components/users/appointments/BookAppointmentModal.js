import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./BookAppointmentModal.css";
import { setAppointmentModalActive, bookAppointment } from "../../../store/actions/book-appointment-modal-actions";

function BookAppointmentModal() {
    const dispatch = useDispatch();
    const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            dispatch(setAppointmentModalActive(false)); // turn off
        }
    }

    function handleBookAppointment() {
        dispatch(bookAppointment());
        setIsAppointmentBooked(true);

        // modal closes automatically after 5 sec
        setTimeout(() => {
            dispatch(setAppointmentModalActive(false));
        }, 5000);
    }

    const appointmentSection = isAppointmentBooked ? (
        <section className="book-appointment-modal">
            <h2 className="book-appointment-modal__title">Great, you have been checked-in! The wait estimation is 15 minutes.</h2>
        </section>
    ) : (
        <section className="book-appointment-modal">
            <h2 className="book-appointment-modal__title">Are You Ready to Book Your Appointment?</h2>
            <button onClick={handleBookAppointment} className="book-appointment-modal__confirm-btn">Create Appointment</button>
        </section>
    );

    return (
        <div onClick={handleBackdropClick} className="backdrop">
            {appointmentSection}
        </div>
    );
}

export default BookAppointmentModal;
