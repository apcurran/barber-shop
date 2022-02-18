import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./AboutUs.css";
import Hero from "./hero/Hero";
import ShopHours from "./shop-hours/ShopHours";
import ShopDescription from "./shop-description/ShopDescription";
import ShopStaff from "./shop-staff/ShopStaff";
import { getAboutDescription } from "../../../store/actions/admin-description-actions";
import { getEmployees } from "../../../store/actions/admin-employees-actions";

function AboutUs() {
    const dispatch = useDispatch();
    const employeesArr = useSelector((state) => state.employees);
    const aboutDesc = useSelector((state) => state.aboutDescription);

    useEffect(() => {
        dispatch(getEmployees());
        dispatch(getAboutDescription());
    }, [dispatch]);

    return (
        <div>
            <Hero />
            <ShopHours />
            <ShopDescription aboutDesc={aboutDesc} />
            <ShopStaff employeesArr={employeesArr} />
        </div>
    );
}

export default AboutUs;
