import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Jumbotron } from "../components/Jumbotron.jsx";
import { Features } from "../components/Features.jsx";
import { FeatureShowcase } from "../components/FeatureShowcase.jsx";
import { useNavigate } from "react-router-dom";

import imageHome1 from "../assets/img/sistema-real360.png";
import imageHome2 from "../assets/img/img-services-1.png";
import beneficio1 from "../assets/img/b1-gestion-eficiente.png";
import beneficio2 from "../assets/img/b2-morosidad-controlada.png";
import beneficio3 from "../assets/img/b3-cuidamos-tu-propiedad.png";
import beneficio4 from "../assets/img/b4-comunicacion-constante.jpg";
import { ServicesHero } from "../components/ServicesHero.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const featuresCards = [
		{ url: beneficio1, title: "Gestión Transparente", subtitle: "Gestionamos de manera eficiente tus cuotas, ingresos y gastos, con reportes claros y transparentes para una mejor toma de decisiones.", buttonText:"Conoce nuestros servicios",buttonLink:"/services" },
		{ url: beneficio2, title: "Control de morosidad", subtitle: "Contribuimos a reducir la morosidad del edificio implementando alertas oportunas y un seguimiento preciso de los pagos pendientes.", buttonText:"Conoce nuestros servicios",buttonLink:"/services" },
		{ url: beneficio3, title: "Cuidado de tu Propiedad", subtitle: "Realizamos los mantenimientos oportunos y aseguramos que tu propiedad siempre esté limpia, operativa y presentable.", buttonText:"Conoce nuestros servicios",buttonLink:"/services" },
		{ url: beneficio4, title: "Comunicación Oportuna", subtitle: "Mantenemos a todos los residentes informados y siempre comunicados con avisos claros, oportunos y constantes.", buttonText:"Conoce nuestros servicios",buttonLink:"/services" }
	];

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		<>
			<Jumbotron
				title="Administra tu Edificio con Real360"
				subtitle="La plataforma tecnológica diseñada para administradores y residentes, que automatiza y centraliza la administración de tu edificio, permitiéndote dedicar más tiempo a la toma de decisiones y lograr una gestión eficiente y transparente."
				image={imageHome1}
				buttonText="Solicita tu demo"
				buttonLink="/contact"
			/>
			<ServicesHero />
			{/*<FeatureShowcase
				title="Servicio de Administración de Edificios"
				subtitle="Nos encargamos de la administración de tu edificio para que tú te enfoques en lo que realmente importa: tu comunidad y tu bienestar."
				buttonText="Conoce nuestros servicios"
				buttonLink="/services"
			/>*/}
			<Features cards={featuresCards} />

		</>
	)
}; 