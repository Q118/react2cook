/** @format */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/app.css";
import Card from "react-bootstrap/Card";
import Spongebob from "../Images/spongebob.gif";
import IngredientList from "./IngredientList";

function ResultCard(props) {
	const { name, ingredients } = props;

	return (
		<article className="uk-comment resultCard" key={uuidv4()}>
			<Card
				style={{
					margin: "4px",
					maxWidth: "max-content",
					textAlign: "center",
					backgroundColor: "#045c06",
					padding: "6px",
					borderRadius: "6px",
				}}>
				<Card.Body>
					<Card.Title className="recipe__title">{name}</Card.Title>
					<Card.Img variant="top" src={Spongebob} />
					<Card.Text className="">
						<span className="recipe__label recipe__label-ing">
							Ingredients:{" "}
						</span>
						<span className="recipe__value recipe__value--indented">
							<IngredientList ingredients={ingredients} />
						</span>
					</Card.Text>
				</Card.Body>
				<span className="wiki--container">
					<Card.Link>
						<a 
							href={`https://en.wikipedia.org/wiki/${ingredients[0].name}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							More Recipes Like This
						</a>
					</Card.Link>
				</span>
			</Card>
		</article>
	);
}

export default ResultCard;
