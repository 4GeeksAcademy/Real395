import React from "react";
import { Card } from "./Card";
import "../css/Features.css";

export const Features = ({ cards }) => {
	return (
		<div className="Container features">
			<div className="row g-4 p-3 features-row">{
				cards.map((img, index) => {
					return (
						<div className="col-lg-3 col-md-6 col-12 feature-col">
							<Card key={index} url={img.url} title={img.title} subtitle={img.subtitle} buttonText={img.buttonText} buttonLink={img.buttonLink}  />
						</div>
					);
				})}
			</div>
		</div>
	)
}