import React from 'react';

function Description() {
    return (
        <div className="admin-dashboard__description">
            <h2 className="admin-dashboard__subtitle">About Description</h2>
            <form className="admin-dashboard__form">
                <textarea name="description" id="description" cols="100" rows="10" className="admin-dashboard__form__textarea"></textarea>
            </form>
        </div>
    );
}

export default Description;
