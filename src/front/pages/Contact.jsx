import PhoneInput from "react-phone-number-input";
import "../css/Contact.css"

/*import contactBackground from "../assets/img/contact-background.png";*/
import contactImg from "../assets/img/contact-img-4.png";


export const Contact = () => {

    return (
        <div className="row row-contact" >
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center col-contact-card">
                <div className="contact-form">
                    <h2 className="mb-4 fw-bold">
                        Contáctanos
                    </h2>
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Nombres y Apellidos</label>
                            <input name="fullName" type="text" className="form-control" required />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-7">
                                <label className="form-label">Whatsapp</label>
                                <PhoneInput name="phone" international defaultCountry="PE" placeholder="987 654 321" />
                            </div>
                            <div className="col-md-5">
                                <label className="form-label">Correo</label>
                                <input name="email" type="email"  className="form-control email-input"  required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Motivo de contacto </label>
                            <select name="subject" className="form-select">
                                <option value=""> Seleccione una opción </option>
                                <option> Deseo contratar el servicio de administración </option>
                                <option> Deseo adquirir la Plataforma Real 360 </option>
                                <option> Deseo evalúen una solución para mi edificio </option>
                                <option> Deseo mayor información </option>
                                <option> Otro </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            {/*<label className="form-label">Mensaje</label>*/}
                            <textarea name="message" className="form-control" placeholder="Escribe tu mensaje aquí" style={{ height: "100px" }} ></textarea>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" id="acceptPrivacy" />
                            <label className="form-check-label" htmlFor="acceptPrivacy" > Acepto el tratamiento de mis datos personales. </label>
                        </div>
                        <button type="submit" className="btn btn-primary" > Enviar </button>
                    </form>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex flex-column col-contact-img" style={{ backgroundImage: `url(${contactImg})` }}  >

            </div>
        </div>
    );
};