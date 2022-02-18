import React from "react";
import { motion } from "framer-motion";

import ServicesForm from "../services-form/ServicesForm";

function ServicesModal({ isNewService, currentServiceData, setIsEditing }) {
    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            setIsEditing(false);
        }
    }

    return (
        <motion.div
            className="backdrop"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <section className="employee-modal">
                <ServicesForm
                    isNewService={isNewService}
                    currentServiceData={currentServiceData}
                    setIsEditing={setIsEditing}
                />
            </section>
        </motion.div>
    );
}

export default ServicesModal;
