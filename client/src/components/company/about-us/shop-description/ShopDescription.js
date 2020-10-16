import React from 'react';

import "./ShopDescription.css";
import BarberPole from "../../../../assets/images/barber-pole-opt.jpg";

function ShopDescription({ aboutDesc }) {
    return (
        <section className="shop-description">
            <div className="shop-description--left">
                <h2 className="shop-description__title">Our Story</h2>
                <p className="shop-description__txt">{aboutDesc}</p>
            </div>
            <figure className="shop-description--right">
                <img className="shop-description__img" src={BarberPole} alt="Striped barber pole on the front of a barber's shop." width="640" height="960" />
            </figure>
        </section>
    );
}

export default ShopDescription;
