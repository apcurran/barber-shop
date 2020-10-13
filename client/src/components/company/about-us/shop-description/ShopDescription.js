import React from 'react';
import { useSelector } from "react-redux";

import "./ShopDescription.css";
import BarberPole from "../../../../assets/images/barber-pole-opt.jpg";

function ShopDescription() {
    const descStr = useSelector(state => state.adminDescription);

    return (
        <section className="shop-description">
            <div className="shop-description--left">
                <h2 className="shop-description__title">Our Story</h2>
                <p className="shop-description__txt">{descStr}</p>
            </div>
            <figure className="shop-description--right">
                <img className="shop-description__img" src={BarberPole} alt="Striped barber pole on the front of a barber's shop." width="640" height="960" />
            </figure>
        </section>
    );
}

export default ShopDescription;
