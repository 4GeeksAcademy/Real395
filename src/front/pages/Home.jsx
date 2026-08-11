import { ServicesHero } from "../components/ServicesHero.jsx";
import "../css/Home.css";

import serviceHero1 from "../assets/img/b1-gestion-eficiente.png";
import serviceHero2 from "../assets/img/contratacion-personal-1.png";
import serviceHero3 from "../assets/img/b3-cuidamos-tu-propiedad.png";
import serviceHero4 from "../assets/img/b4-comunicacion-constante.jpg";


export const Home = () => {

	const servicesCards = [
		{ url: serviceHero1, title: "Gestión Financiera", subtitle: "Gestionamos de forma eficiente tus cuotas, ingresos y gastos con reportes claros y transparentes.", buttonText: "Conoce nuestros servicios", buttonLink: "/services" },
		{ url: serviceHero2, title: "Gestión del Personal", subtitle: "Contamos con personal capacitado y orientado al servicio asegurando el bienestar del edificio.", buttonText: "Conoce nuestros servicios", buttonLink: "/services" },
		{ url: serviceHero3, title: "Mantenimientos", subtitle: "Realizamos los mantenimientos para que tu propiedad siempre esté en óptimas condiciones.", buttonText: "Conoce nuestros servicios", buttonLink: "/services" },
		{ url: serviceHero4, title: "Comunicados", subtitle: "Mantenemos informados a los residentes con avisos claros y oportunos.", buttonText: "Conoce nuestros servicios", buttonLink: "/services" }
	];

	return (
		<>
			<ServicesHero cards={servicesCards} />
		</>
	)
}; 