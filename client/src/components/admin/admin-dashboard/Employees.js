import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getEmployees } from "../../../store/actions/admin-employees-actions";
import EmployeesTable from "./employees-table/EmployeesTable";
import EmployeesModal from "./employees-modal/EmployeesModal";

function Employees() {
    // Local state
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
    // Redux store
    const dispatch = useDispatch();
    const employeesArr = useSelector(state => state.employees);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    return (
        <div>
            <EmployeesTable employeesArr={employeesArr} setSelectedEmployeeId={setSelectedEmployeeId} setIsEditing={setIsEditing} />
            {isEditing ? <EmployeesModal selectedEmployeeId={selectedEmployeeId} setSelectedEmployeeId={setSelectedEmployeeId} setIsEditing={setIsEditing} /> : null}
        </div>
    );
}

export default Employees;
