import React from 'react';

function Description() {
    return (
        <div className="admin-dashboard__description">
            <h2 className="admin-dashboard__subtitle">Edit "About" Description</h2>
            <form className="admin-dashboard__form">
                <textarea name="description" id="description" cols="100" rows="12" className="admin-dashboard__form__textarea"></textarea>
                <div className="admin-dashboard__form__submit-btn-container">
                    <button type="submit" className="admin-dashboard__form__submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Description;
