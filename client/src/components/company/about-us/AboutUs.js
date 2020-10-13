import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./AboutUs.css";
import Hero from "./hero/Hero";
import ShopHours from "./shop-hours/ShopHours";
import ShopDescription from "./shop-description/ShopDescription";
import ShopStaff from './shop-staff/ShopStaff';
import { getEmployees } from "../../../store/actions/admin-employees-actions";

function AboutUs() {
    const dispatch = useDispatch();
    const employeesArr = useSelector(state => state.employees);

    useEffect(() => {
        dispatch(getEmployees());
    }, []);

    return (
        <div>
            <Hero />
            <ShopHours />
            <ShopDescription />
            <ShopStaff employeesArr={employeesArr} />
        </div>
    );
}

export default AboutUs;
