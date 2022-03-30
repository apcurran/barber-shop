import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./BookAppointmentModal.css";
import { setAppointmentModalActive, bookAppointment } from "../../../store/actions/book-appointment-modal-actions";
import Modal from "../../modal/Modal";

function BookAppointmentModal() {
    // global store state
    const dispatch = useDispatch();
    // local component state
    const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            dispatch(setAppointmentModalActive(false)); // turn off
        }
    }

    function handleBookAppointment() {
        dispatch(bookAppointment());
        setIsAppointmentBooked(true);

        // modal closes automatically after 6 sec
        setTimeout(() => {
            dispatch(setAppointmentModalActive(false));
        }, 6000);
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
        <Modal handleBackdropClick={handleBackdropClick}>
            {appointmentSection}
        </Modal>
    );
}

export default BookAppointmentModal;
