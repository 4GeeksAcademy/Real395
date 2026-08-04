

export const AboutPurpose = () => {

  return (
    <section className="container aboutpurpose">
      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col">
          <div className="card h-100">

            <div className="card-body">
              <i class="fa-solid fa-bullseye"></i>              
              <h5 className="card-title">Nuestra Misión</h5>
              <p className="card-text">
                Facilitar la gestión administrativa de edificios y condominios
                mediante soluciones digitales que optimicen procesos,
                mejoren la comunicación y generen mayor transparencia.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">

            <div className="card-body">
              <i class="fa-solid fa-eye"></i>
              {/*<i class="fa-regular fa-eye"></i>*/}
              <h5 className="card-title">Nuestra Visión</h5>
              <p className="card-text">
                Ser una solución referente en la administración inteligente
                de comunidades, conectando personas y tecnología para una
                gestión más eficiente.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">

            <div className="card-body">
              <i class="fa-solid fa-gem"></i>
              {/*<i class="fa-regular fa-gem"></i>*/ }
              <h5 className="card-title">Nuestra Valores</h5>
              <p className="card-text">
                Innovación, transparencia y compromiso guían nuestro trabajo
                para crear soluciones que aporten valor a administradores
                y residentes.
              </p>
            </div>
          </div>
        </div>

      </div >
    </section >
  )
}