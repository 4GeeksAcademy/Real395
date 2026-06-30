import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Jumbotron } from "../components/Jumbotron.jsx";
import { Features } from "../components/Features.jsx";
import { Card } from "../components/Card.jsx";
import imageServices1 from "../assets/img/sistema-real360.png";
import imageServices2 from "../assets/img/banner-blue.png";

export const Services = () => {

     const serviceCards = [
            {url:"https://images.pexels.com/photos/20545013/pexels-photo-20545013.jpeg",title:"Gestionar tu Edificio", subtitle: "Optimiza la administración de tu edificio y mejora la experiencia de los residentes.."},
            {url:"https://images.pexels.com/photos/7714698/pexels-photo-7714698.jpeg",title:"Contratar Personal", subtitle: "Encuentra y contrata personal confiable para tu edificio de forma rápida y segura."},
            {url:"https://images.pexels.com/photos/19789841/pexels-photo-19789841.jpeg",title:"Acceder a Mantenimientos", subtitle: "Accede a servicios de mantenimiento especializados para mantener tu edificio en óptimas condiciones.."},
            {url:"https://images.pexels.com/photos/8470837/pexels-photo-8470837.jpeg",title:"Publicar tu Inmueble", subtitle: "Publica tu inmueble y encuentra compradores o inquilinos de forma más rápida y eficiente.."}
            ];

    return (
        <>
            <Jumbotron
                title="Nuestros Servicios"
                subtitle="Conoce todas las servicios que ofrecemos..."
                image={imageServices1}
                buttonText="Ver servicios"
                buttonLink="/contact"
            />
            <Features cards={serviceCards}/>
        </>
    )
}; 