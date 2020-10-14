import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getEmployees } from "../../../store/actions/admin-employees-actions";
import EmployeesTable from "./employees-table/EmployeesTable";

function Employees() {
    const dispatch = useDispatch();
    const employeesArr = useSelector(state => state.employees);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    return (
        <EmployeesTable employeesArr={employeesArr} />
    );
}

export default Employees;
