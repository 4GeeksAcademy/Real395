import { Link } from "react-router-dom";
import logo from "../assets/img/logo-real360.png";

export const Navbar = () => {
	return (
	<div className="container">
		<nav className="navbar navbar-expand-lg">
			<div className="container navbar-subcontainer">
				<Link className="navbar-brand d-flex align-items-center" to="/">
					<img src={logo} alt="REAL 360" height="30" />
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
						<li className="nav-item"><Link className="nav-link" to="/"> Inicio </Link></li>
						<li className="nav-item"><Link className="nav-link" to="/about"> Nosotros </Link></li>
						<li className="nav-item"><Link className="nav-link" to="/services"> Servicios </Link></li>
						<li className="nav-item"><Link className="nav-link" to="/contact"> Contáctanos </Link></li>
						<li className="nav-item"><Link className="nav-link" to="/blog"> Blog </Link></li>
					</ul>

					<Link to="/login">
						<button className="btn btn-login">
							<i className="fa-brands fa-expeditedssl fa-lg"></i>&nbsp;
							Inicia sesión
						</button>
					</Link>
				</div>
			</div>
		</nav>
	</div>
	);
};