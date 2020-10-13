import React from 'react';

import "./AboutUs.css";
import Hero from "./hero/Hero";
import ShopHours from "./shop-hours/ShopHours";
import ShopDescription from "./shop-description/ShopDescription";

function AboutUs() {
    return (
        <>
            <Hero />
            <ShopHours />
            <ShopDescription />
        </>
    );
}

export default AboutUs;
