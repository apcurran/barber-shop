import React from 'react';
import { motion } from "framer-motion";

import "./EmployeesModal.css";
import EmployeesForm from "../employees-form/EmployeesForm";

function EmployeesModal({ currentEmployeeData, setIsEditing }) {
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
                <EmployeesForm currentEmployeeData={currentEmployeeData} setIsEditing={setIsEditing} />
            </section>
        </motion.div>
    );
}

export default EmployeesModal;
