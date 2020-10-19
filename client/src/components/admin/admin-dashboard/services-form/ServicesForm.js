import React, { useState, useCallback } from 'react';
import { useDispatch } from "react-redux";

import { addService } from "../../../../store/actions/admin-services-actions";

function ServicesForm({ isNewService, currentServiceData, setIsEditing }) {
    const [updatedTitle, setUpdatedTitle] = useState(currentServiceData.title);
    const [updatedContent, setUpdatedContent] = useState(currentServiceData.content);
    const [updatedPrice, setUpdatedPrice] = useState(currentServiceData.price);
    const [updatedImgUrl, setUpdatedImgUrl] = useState(currentServiceData.img_url);

    const memSetUpdatedTitle = useCallback(
        (event) => setUpdatedTitle(event.target.value),
        []
    );
    const memSetUpdatedContent = useCallback(
        (event) => setUpdatedContent(event.target.value),
        []
    );
    const memSetUpdatedPrice = useCallback(
        (event) => setUpdatedPrice(event.target.value),
        []
    );
    const memSetUpdatedImgUrl = useCallback(
        (event) => setUpdatedImgUrl(event.target.value),
        []
    );

    const dispatch = useDispatch();

    function handleEmployeeSubmit(event) {
        event.preventDefault();

        if (isNewService) {
            // Create New Service
            const serviceData = {
                title: updatedTitle,
                content: updatedContent,
                price: updatedPrice,
                img_url: updatedImgUrl
            };
            console.log(serviceData);

            dispatch(addService(serviceData));
            setIsEditing(false); // Close modal after submitting data.

            return;
        }

        // Patch Employee
        const serviceData = {
            service_id: currentServiceData.service_id,
            title: updatedTitle,
            content: updatedContent,
            price: updatedPrice,
            img_url: updatedImgUrl
        };

        // dispatch(patchService(serviceData));
        setIsEditing(false); // Close modal after submitting data.
    }

    return (
        <form onSubmit={handleEmployeeSubmit} className="employee-form">
            <h2 className="modal-form__title">Service</h2>
            <div className="employee-form__group">
                <label htmlFor="title" className="employee-form__label">Title</label>
                <input type="text" className="employee-form__input" id="title" value={updatedTitle} onChange={memSetUpdatedTitle} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="content" className="employee-form__label">Content</label>
                <textarea className="employee-form__input" name="content" id="content" cols="30" rows="10" value={updatedContent} onChange={memSetUpdatedContent}></textarea>
            </div>
            <div className="employee-form__group">
                <label htmlFor="price" className="employee-form__label">Price</label>
                <input type="number" className="employee-form__input" id="price" value={updatedPrice} onChange={memSetUpdatedPrice} />
            </div>
            <div className="employee-form__group">
                <label htmlFor="img-url" className="employee-form__label">Image URL</label>
                <input type="text" className="employee-form__input" id="img-url" value={updatedImgUrl} onChange={memSetUpdatedImgUrl} />
            </div>
            <button type="submit" className="employee-form__submit">Submit</button>
        </form>
    );
}

export default ServicesForm;