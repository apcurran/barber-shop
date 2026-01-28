import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
    setAppointmentModalActive,
    bookAppointment,
} from "../../../store/actions/book-appointment-modal-actions";
import Modal from "../../modal/Modal";

function BookAppointmentModal() {
    // global store state
    const dispatch = useDispatch();
    // local component state
    const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            dispatch(setAppointmentModalActive(false));
        }
    }

    function handleCloseBtnClick() {
        dispatch(setAppointmentModalActive(false));
    }

    function handleBookAppointment() {
        dispatch(bookAppointment());
        setIsAppointmentBooked(true);

        // modal closes automatically after 6 sec
        setTimeout(() => {
            dispatch(setAppointmentModalActive(false));
        }, 6000);
    }

    const appointmentBody = isAppointmentBooked ? (
        <h2 className="modal__title">
            Great, you have been checked-in! The wait estimation is 15 minutes.
        </h2>
    ) : (
        <>
            <h2 className="modal__title">
                Are You Ready to Book Your Appointment?
            </h2>
            <button
                onClick={handleBookAppointment}
                className="modal__confirm-btn"
            >
                Create Appointment
            </button>
        </>
    );

    return (
        <Modal
            handleBackdropClick={handleBackdropClick}
            handleCloseBtnClick={handleCloseBtnClick}
        >
            {appointmentBody}
        </Modal>
    );
}

export default BookAppointmentModal;
