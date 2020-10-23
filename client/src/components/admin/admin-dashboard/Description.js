import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getAboutDescription, patchAboutDescription } from "../../../store/actions/admin-description-actions";

function Description() {
    // Redux
    const dispatch = useDispatch();
    const descTxt = useSelector(state => state.aboutDescription);
    // Local state
    const [updatedDescTxt, setUpdatedDescTxt] = useState("");

    // Update to new description text when data comes back from API.
    useEffect(() => {
        dispatch(getAboutDescription());
        setUpdatedDescTxt(descTxt);
    }, [descTxt, dispatch]);

    function handleChange(event) {
        setUpdatedDescTxt(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        dispatch(patchAboutDescription(updatedDescTxt));
    }

    return (
        <div className="admin-dashboard__description">
            <h2 className="admin-dashboard__subtitle">Edit "About" Description</h2>
            <form onSubmit={handleFormSubmit} className="admin-dashboard__form">
                <textarea name="description" id="description" className="admin-dashboard__form__textarea" value={updatedDescTxt} onChange={handleChange}></textarea>
                <div className="admin-dashboard__form__submit-btn-container">
                    <button type="submit" className="admin-dashboard__form__submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Description;
