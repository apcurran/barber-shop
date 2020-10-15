import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import "./EmployeesForm.css";
import { patchEmployee } from "../../../../store/actions/admin-employees-actions";

function EmployeesForm({ currentEmployeeData }) {
    const [updatedFirstName, setUpdatedFirstName] = useState(currentEmployeeData.first_name);
    const [updatedLastName, setUpdatedLastName] = useState(currentEmployeeData.last_name);
    const [updatedEmail, setUpdatedEmail] = useState(currentEmployeeData.email);
    const [updatedSkillLevel, setUpdatedSkillLevel] = useState(currentEmployeeData.skill_level);
    const [updatedAvatarUrl, setUpdatedAvatarUrl] = useState(currentEmployeeData.avatar_url);

    const dispatch = useDispatch();

    function handleEmployeeSubmit(event) {
        event.preventDefault();

        const employeeData = {
            employee_id: currentEmployeeData.employee_id,
            first_name: updatedFirstName,
            last_name: updatedLastName,
            email: updatedEmail,
            skill_level: updatedSkillLevel,
            avatar_url: updatedAvatarUrl
        };

        dispatch(patchEmployee(employeeData));
    }

    return (
        <form onSubmit={handleEmployeeSubmit} className="employee-form">
            <div className="employee-form__group">
                <label htmlFor="first-name" className="employee-form__label">First Name</label>
                <input type="text" className="employee-form__input" id="first-name" value={updatedFirstName} onChange={(event) => setUpdatedFirstName(event.target.value)} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="last-name" className="employee-form__label">Last Name</label>
                <input type="text" className="employee-form__input" id="last-name" value={updatedLastName} onChange={(event) => setUpdatedLastName(event.target.value)} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="email" className="employee-form__label">Email</label>
                <input type="email" className="employee-form__input" id="email" value={updatedEmail} onChange={(event) => setUpdatedEmail(event.target.value)} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="skill-level" className="employee-form__label">Skill Level</label>
                <input type="number" className="employee-form__input" id="skill-level" value={updatedSkillLevel} onChange={(event) => setUpdatedSkillLevel(event.target.value)} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="avatar-url" className="employee-form__label">Avatar URL</label>
                <input type="text" className="employee-form__input" id="avatar-url" value={updatedAvatarUrl} onChange={(event) => setUpdatedAvatarUrl(event.target.value)} />
            </div>
            <button type="submit" className="employee-form__submit">Update</button>
        </form>
    );
}

export default EmployeesForm;