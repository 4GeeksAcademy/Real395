import { NavLink } from "react-router-dom";
import "../css/FeatureShowcase.css";

export const FeatureShowcase = ({ title, subtitle, image, buttonText, buttonLink }) => {

  return (
    <div className="container featureShowcase">
      <div className="featureShowcase-content">
        <h1 className="featureShowcase-title"> {title}</h1>
        <p className="featureShowcase-subtitle">{subtitle}</p>
        <NavLink to={buttonLink} className="btn btn-primary">
          {buttonText}
        </NavLink>
      </div>
      <div className="featureShowcase-image">
      </div>
    </div>
  );
};