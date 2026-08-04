import aboutImage from "../assets/img/img-about.png";

export const AboutIntro = () => {

  return (
    <section className="container aboutintro">
      <div className="aboutintro-content">
        <h2 className="aboutintro-title">Quiénes Somos</h2>
        <div className="hero-blueline"></div>
        <p className="aboutintro-description">
          Somos un equipo apasionado por la administración de edificios y condominios,
          comprometido con mejorar la forma en que se gestionan las comunidades.

          Combinamos experiencia, innovación y tecnología para desarrollar soluciones
          que simplifican los procesos y promueven una administración más eficiente y transparente.
        </p>
      </div>
      <div className="aboutintro-image">
        <img src={aboutImage} alt="Equipo especializado en administración y tecnología" />
      </div>
    </section>
  )
}