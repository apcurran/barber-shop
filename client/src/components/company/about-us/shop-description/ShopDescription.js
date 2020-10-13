import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import "./ShopDescription.css";

function ShopDescription() {
    const descStr = useSelector(state => state.adminDescription);

    return (
        <section className="shop-description">
            <h2 className="shop-description__title">Our Story</h2>
            <p className="shop-description__txt">{descStr}</p>
        </section>
    );
}

export default ShopDescription;
