import React from "react"
import { ServicesIntro } from "../components/ServicesIntro"
import { ServicesCarousel } from "../components/ServicesCarousel";
import "../css/Services.css";

export const Services = () => {

    return (
        <>
            <ServicesIntro />
            <ServicesCarousel />
        </>
    )
}