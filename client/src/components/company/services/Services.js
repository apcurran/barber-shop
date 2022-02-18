import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Services.css";
import { getServices } from "../../../store/actions/admin-services-actions";
import ServicesList from "./services-list/ServicesList";

function Services() {
    const dispatch = useDispatch();
    const servicesArr = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    return (
        <div className="services-page-container">
            <h1 className="services-page__title">Our Services</h1>
            <ServicesList servicesArr={servicesArr} />
        </div>
    );
}

export default Services;
