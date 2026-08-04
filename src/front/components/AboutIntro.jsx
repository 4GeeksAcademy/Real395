import aboutImage from "../assets/img/img-about.png";

export const AboutIntro = () => {

  return (
    <section className="container aboutintro">
      <div className="aboutintro-content">
        <h2 className="aboutintro-title">Quiénes Somos</h2>
        <div className="hero-blueline"></div>
        <div className="aboutintro-description">
          <p>
            Somos un equipo de profesionales comprometidos con brindar una
            gestión responsable, transparente y cercana, enfocada en el cuidado
            de los espacios donde las personas viven y construyen comunidad.
          </p>

          <p>
            Trabajamos con orden, responsabilidad y dedicación para mantener
            ambientes armoniosos, promoviendo una buena convivencia y una
            administración clara, eficiente y confiable.
          </p>

          <p>
            Nuestro compromiso es cuidar cada comunidad como si fuera propia,
            generando confianza a través de una gestión organizada, comunicación
            transparente y cuentas claras.
          </p>
        </div>
      </div>
      <div className="aboutintro-image">
        <img src={aboutImage} alt="Equipo profesional comprometido con una gestión responsable" loading="lazy" />
      </div>
    </section>
  )
}