

export const AboutPurpose = () => {

  return (
    <section className="container aboutpurpose">
      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col">
          <div className="card h-100">

            <div className="card-body">

              <div className="aboutpurpose-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>

              <h5 className="card-title">Nuestra Misión</h5>
              <p className="card-text ">
                Brindar una gestión integral, transparente y eficiente que
                contribuya al bienestar de las comunidades, cuidando cada
                espacio y fortaleciendo la confianza entre sus miembros.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 aboutpurpose-card">

            <div className="card-body">
              <div className="aboutpurpose-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h5 className="card-title">Nuestra Visión</h5>
              <p className="card-text ">
                Ser una empresa referente en la gestión de comunidades,
                reconocida por su compromiso, responsabilidad y capacidad para
                crear espacios ordenados, seguros y armoniosos.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">

            <div className="card-body">
              <div className="aboutpurpose-icon">
                <i className="fa-solid fa-gem"></i>
              </div>
              <h5 className="card-title">Nuestra Valores</h5>
              <div className="aboutpurpose-values">

                <span>Transparencia</span>
                <span>Compromiso</span>
                <span>Eficiencia</span>
                <span>Colaboración</span>
                <span>Mejora Continua</span>

              </div>
            </div>
          </div>
        </div>

      </div >
    </section >
  )
}