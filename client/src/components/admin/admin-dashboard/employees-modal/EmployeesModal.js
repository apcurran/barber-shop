import React from 'react';
import { motion } from "framer-motion";

import "./EmployeesModal.css";

function EmployeesModal({ selectedEmployeeId, setSelectedEmployeeId, setIsEditing }) {

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
                Employee Editing Modal
            </section>
        </motion.div>
    );
}

export default EmployeesModal;
