import { NavLink } from "react-router-dom";
import "../css/Jumbotron.css";

export const Jumbotron = ({ title, subtitle, image, buttonText, buttonLink }) => {

  return (
    <div className="container jumbotron">
      <div className="jumbotron-content">
        <h1 className="jumbotron-title"> {title}</h1>
        <p className="jumbotron-subtitle">{subtitle}</p>
        <NavLink to={buttonLink} className="btn btn-primary">
          {buttonText}
        </NavLink>
      </div>
      <div className="jumbotron-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}