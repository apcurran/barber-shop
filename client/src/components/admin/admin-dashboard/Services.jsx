import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getServices } from "../../../store/actions/admin-services-actions";
import ServicesTable from "./services-table/ServicesTable";
import ServicesModal from "./services-modal/ServicesModal";

function Services() {
    // Local state
    const [isNewService, setIsNewService] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const [currentServiceData, setCurrentServiceData] = useState({});
    // Redux store
    const dispatch = useDispatch();
    const servicesArr = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    function updateCurrentService(id) {
        const currentService = servicesArr.filter(
            (service) => service.service_id === id,
        )[0];

        setCurrentServiceData(currentService);
    }

    function newCurrentService() {
        const newServiceBlank = {
            title: "",
            content: "",
            price: "",
            img_url: "",
        };

        setIsNewService(true);
        setCurrentServiceData(newServiceBlank);
    }

    return (
        <div>
            <ServicesTable
                newCurrentService={newCurrentService}
                servicesArr={servicesArr}
                setIsEditing={setIsEditing}
                setSelectedServiceId={setSelectedServiceId}
                updateCurrentService={updateCurrentService}
            />
            {isEditing ? (
                <ServicesModal
                    isNewService={isNewService}
                    setIsEditing={setIsEditing}
                    currentServiceData={currentServiceData}
                />
            ) : null}
        </div>
    );
}

export default Services;
