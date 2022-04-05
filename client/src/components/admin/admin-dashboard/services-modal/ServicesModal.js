import React from "react";

import ServicesForm from "../services-form/ServicesForm";
import Modal from "../../../modal/Modal";

function ServicesModal({ isNewService, currentServiceData, setIsEditing }) {
    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            setIsEditing(false);
        }
    }

    function handleCloseBtnClick() {
        setIsEditing(false);
    }

    return (
        <Modal handleBackdropClick={handleBackdropClick} handleCloseBtnClick={handleCloseBtnClick}>
            <section className="employee-modal">
                <ServicesForm
                    isNewService={isNewService}
                    currentServiceData={currentServiceData}
                    setIsEditing={setIsEditing}
                />
            </section>
        </Modal>
    );
}

export default ServicesModal;
