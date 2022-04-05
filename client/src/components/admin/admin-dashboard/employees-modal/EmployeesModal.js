import React from "react";


import "./EmployeesModal.css";
import EmployeesForm from "../employees-form/EmployeesForm";
import Modal from "../../../modal/Modal";

function EmployeesModal({ isNewEmployee, currentEmployeeData, setIsEditing }) {
    function handleBackdropClick(event) {
        if (event.target.classList.contains("backdrop")) {
            setIsEditing(false);
        }
    }

    function handleCloseBtnClick(event) {
        setIsEditing(false);
    }

    return (
        <Modal handleBackdropClick={handleBackdropClick} handleCloseBtnClick={handleCloseBtnClick}>
            <section className="employee-modal">
                <EmployeesForm isNewEmployee={isNewEmployee} currentEmployeeData={currentEmployeeData} setIsEditing={setIsEditing} />
            </section>
        </Modal>
    );
}

export default EmployeesModal;
