import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const API_DESCRIPTION_URL = "/api/company/description";

function Description() {
    const descTxt = useSelector(state => state.admin); 

    const [descriptionData, setDescriptionData] = useState([]);

    // useEffect(() => {
    //     getDescriptionData();
    // }, []);

    // async function getDescriptionData() {
    //     try {
    //         const response = await fetch(API_DESCRIPTION_URL);
    //         const data = await response.json();
    //         const descriptionTxt = data.content;

    //         console.log(descriptionTxt);
    //         setDescriptionData(descriptionTxt);
            
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    function handleChange(event) {
        setDescriptionData(event.target.value);
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        try {
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: descriptionData
                })
            };
    
            const response = await fetch(API_DESCRIPTION_URL, options);
            const data = await response.json();
            console.log(data);
            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="admin-dashboard__description">
            <h2 className="admin-dashboard__subtitle">Edit "About" Description</h2>
            <form onSubmit={handleFormSubmit} className="admin-dashboard__form">
                <textarea name="description" id="description" cols="100" rows="12" className="admin-dashboard__form__textarea" value={descTxt} onChange={handleChange}></textarea>
                <div className="admin-dashboard__form__submit-btn-container">
                    <button type="submit" className="admin-dashboard__form__submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Description;
