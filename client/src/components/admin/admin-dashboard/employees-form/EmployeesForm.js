import React, { useState, useCallback } from 'react';
import { useDispatch } from "react-redux";

import "./EmployeesForm.css";
import { addEmployee, patchEmployee } from "../../../../store/actions/admin-employees-actions";

function EmployeesForm({ isNewEmployee, currentEmployeeData, setIsEditing }) {
    const [updatedFirstName, setUpdatedFirstName] = useState(currentEmployeeData.first_name);
    const [updatedLastName, setUpdatedLastName] = useState(currentEmployeeData.last_name);
    const [updatedEmail, setUpdatedEmail] = useState(currentEmployeeData.email);
    const [updatedSkillLevel, setUpdatedSkillLevel] = useState(currentEmployeeData.skill_level);
    const [updatedAvatarUrl, setUpdatedAvatarUrl] = useState(currentEmployeeData.avatar_url);

    const memSetUpdatedFirstname = useCallback(
        (event) => setUpdatedFirstName(event.target.value),
        []
    );
    const memSetUpdatedLastName = useCallback(
        (event) => setUpdatedLastName(event.target.value),
        []
    );
    const memSetUpdatedEmail = useCallback(
        (event) => setUpdatedEmail(event.target.value),
        []
    );
    const memSetUpdatedSkillLevel = useCallback(
        (event) => setUpdatedSkillLevel(event.target.value),
        []
    );
    const memSetUpdatedAvatarUrl = useCallback(
        (event) => setUpdatedAvatarUrl(event.target.value),
        []
    );

    const dispatch = useDispatch();

    function handleEmployeeSubmit(event) {
        event.preventDefault();

        if (isNewEmployee) {
            // Create New Employee
            const employeeData = {
                first_name: updatedFirstName,
                last_name: updatedLastName,
                email: updatedEmail,
                skill_level: updatedSkillLevel,
                avatar_url: updatedAvatarUrl
            };

            dispatch(addEmployee(employeeData));
            setIsEditing(false); // Close modal after submitting data.

            return;
        }

        // Patch Employee
        const employeeData = {
            employee_id: currentEmployeeData.employee_id,
            first_name: updatedFirstName,
            last_name: updatedLastName,
            email: updatedEmail,
            skill_level: updatedSkillLevel,
            avatar_url: updatedAvatarUrl
        };

        dispatch(patchEmployee(employeeData));
        setIsEditing(false); // Close modal after submitting data.
    }

    return (
        <form onSubmit={handleEmployeeSubmit} className="employee-form">
            <h2 className="modal-form__title">Employee</h2>
            <div className="employee-form__group">
                <label htmlFor="first-name" className="employee-form__label">First Name</label>
                <input type="text" className="employee-form__input" id="first-name" value={updatedFirstName} onChange={memSetUpdatedFirstname} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="last-name" className="employee-form__label">Last Name</label>
                <input type="text" className="employee-form__input" id="last-name" value={updatedLastName} onChange={memSetUpdatedLastName} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="email" className="employee-form__label">Email</label>
                <input type="email" className="employee-form__input" id="email" value={updatedEmail} onChange={memSetUpdatedEmail} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="skill-level" className="employee-form__label">Skill Level</label>
                <input type="number" className="employee-form__input" id="skill-level" value={updatedSkillLevel} onChange={memSetUpdatedSkillLevel} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="avatar-url" className="employee-form__label">Avatar URL</label>
                <input type="text" className="employee-form__input" id="avatar-url" value={updatedAvatarUrl} onChange={memSetUpdatedAvatarUrl} />
            </div>
            <button type="submit" className="employee-form__submit">Submit</button>
        </form>
    );
}

export default EmployeesForm;