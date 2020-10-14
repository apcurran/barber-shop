import React from 'react';
import { useDispatch } from "react-redux";

import "./EmployeesTable.css";
import { removeEmployee } from "../../../../store/actions/admin-employees-actions";

function EmployeesTable({ employeesArr }) {
    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(removeEmployee(id));
    }

    return (
        <div>
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
                    {employeesArr.map(employee => (
                        <tr key={employee.employee_id}>
                            <td className="employees-table__body__data">{employee.first_name} {employee.last_name}</td>
                            <td className="employees-table__body__data">{employee.email}</td>
                            <td className="employees-table__body__data skill-data">{employee.skill_level}</td>
                            <td className="employees-table__body__data"><button className="employee-action">edit</button><button onClick={() => handleDelete(employee.employee_id)} className="employee-action">delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeesTable
