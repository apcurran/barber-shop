import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getServices } from "../../../store/actions/admin-services-actions";
import ServicesTable from "./services-table/ServicesTable";

function Services() {
    // Local state
    // Redux store
    const dispatch = useDispatch();
    const servicesArr = useSelector(state => state.services);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    return (
        <div>
            <ServicesTable
                servicesArr={servicesArr}
            />
            {/* {isEditing ? <ServicesModal isNewService={isNewService} setIsEditing={setIsEditing} currentServiceData={currentServiceData} /> : null} */}
        </div>
    );
}

export default Services;
