import "../css/ServicesHero.css";

export const ServicesHero = () => {
    return (
        <section className="services-hero container py-5">
            <div className="row align-items-center">
                {/* Columna izquierda */}
                <div className="col-lg-6">
                    <span className="section-tag">
                        ADMINISTRACIÓN PROFESIONAL DE EDIFICIOS
                    </span>
                    <h2 className="mt-3">
                        Administración que genera valor
                    </h2>
                    <div className="blue-line my-3"></div>
                    <p className="services-description"> Nos encargamos de la administración de tu edificio para que tú te enfoques en lo que realmente importa: tu comunidad y tu bienestar. </p>
                    <button className="btn btn-primary mt-4">
                        Conoce nuestros servicios
                    </button>
                </div>
                {/* Columna derecha */}
                <div className="col-lg-6 mt-5 mt-lg-0">
                    <div className="row g-4">
                        <div className="col-6">
                            <div className="benefit">
                                <i className="fa-solid fa-chart-line"></i>
                                <h6>Mayor eficiencia operativa</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="benefit">
                                <i className="fa-solid fa-coins"></i>
                                <h6>Optimización de recursos</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="benefit">
                                <i className="fa-solid fa-lightbulb"></i>
                                <h6>Mejores decisiones</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="benefit">
                                <i className="fa-solid fa-shield-halved"></i>
                                <h6>Transparencia</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};