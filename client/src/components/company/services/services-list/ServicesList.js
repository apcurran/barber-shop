import React from 'react';

import "./ServicesList.css";

function ServicesList({ servicesArr }) {
    return (
        <main className="services-list-container">
            {servicesArr.map(service => (
                <div className="service-container">
                    <figure className="service__fig">
                        <img src={service.img_url} alt={service.title} className="service__fig__img" width="640" height="426" />
                    </figure>
                    <div className="service__info">
                        <h2 className="service__info__title">{service.title}</h2>
                        <span className="service__info__price">${service.price}</span>
                        <p className="service__info__desc">{service.content}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default ServicesList;
