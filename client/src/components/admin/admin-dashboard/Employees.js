import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEmployees } from "../../../store/actions/admin-employees-actions";
import EmployeesTable from "./employees-table/EmployeesTable";
import EmployeesModal from "./employees-modal/EmployeesModal";

function Employees() {
    // Local state
    const [isNewEmployee, setIsNewEmployee] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [currentEmployeeData, setCurrentEmployeeData] = useState({});
    // Redux store
    const dispatch = useDispatch();
    const employeesArr = useSelector((state) => state.employees);
    
    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);
    
    function updateCurrentEmployee(id) {
        const currentEmployee = employeesArr.filter((employee) => employee.employee_id === id)[0];

        setCurrentEmployeeData(currentEmployee);
    }

    function newCurrentEmployee() {
        const newEmployeeBlank = {
            first_name: "",
            last_name: "",
            email: "",
            skill_level: "",
            avatar_url: ""
        };

        setIsNewEmployee(true);
        setCurrentEmployeeData(newEmployeeBlank);
    }

    return (
        <div>
            <EmployeesTable
                newCurrentEmployee={newCurrentEmployee}
                employeesArr={employeesArr}
                setIsEditing={setIsEditing}
                setSelectedEmployeeId={setSelectedEmployeeId}
                updateCurrentEmployee={updateCurrentEmployee}
            />
            {isEditing ? <EmployeesModal isNewEmployee={isNewEmployee} setIsEditing={setIsEditing} currentEmployeeData={currentEmployeeData} /> : null}
        </div>
    );
}

export default Employees;
