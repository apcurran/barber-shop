import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import "./EmployeesTable.css";
import { removeEmployee } from "../../../../store/actions/admin-employees-actions";

function EmployeesTable({ newCurrentEmployee, employeesArr, setSelectedEmployeeId, setIsEditing, updateCurrentEmployee }) {
    const dispatch = useDispatch();

    function handleAddEmployee() {
        setIsEditing(true);
        newCurrentEmployee(); // Create blank starting data
    }

    function handleDelete(id) {
        dispatch(removeEmployee(id));
    }

    function handleEditingUpdate(id) {
        setIsEditing(true);
        setSelectedEmployeeId(id);
        updateCurrentEmployee(id);
    }

    return (
        <div>
            <button onClick={handleAddEmployee} className="add-employee-btn">
                <svg className="plus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span className="add-employee-btn__span">Add Employee</span>
            </button>
            <table className="employees-table">
                <thead className="employees-table__head">
                    <tr>
                        <th className="employees-table__header">Name</th>
                        <th className="employees-table__header">Email</th>
                        <th className="employees-table__header">Skill Level</th>
                        <th className="employees-table__header">Action</th>
                    </tr>
                </thead>
                <tbody className="employees-table__body">
                    {employeesArr.map((employee) => (
                        <motion.tr
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={employee.employee_id}
                        >
                            <td className="employees-table__body__data">{employee.first_name} {employee.last_name}</td>
                            <td className="employees-table__body__data">{employee.email}</td>
                            <td className="employees-table__body__data skill-data">{employee.skill_level}</td>
                            <td className="employees-table__body__data"><button onClick={() => handleEditingUpdate(employee.employee_id)} className="employee-action">edit</button><button onClick={() => handleDelete(employee.employee_id)} className="employee-action">delete</button></td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeesTable;
