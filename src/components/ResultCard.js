/** @format */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import IngredientList from "./IngredientList";
import "../css/app.css";
import Card from "react-bootstrap/Card";
import Spongebob from "../Images/spongebob.gif"

function ResultCard(props) {
	const { name, servings, cookTime, instructions, ingredients } = props;

	return (
		<article className="uk-comment resultCard" key={uuidv4()}>
			<Card style={{ 
					margin: '4px',
					maxWidth: 'max-content',
					textAlign: 'center',
					backgroundColor: '#045c06',
					padding: '6px'
				  }}>
			<Card.Body>
				<Card.Title className="recipe__title">{name}</Card.Title>
				  <Card.Img variant="top" src={Spongebob} />
				  </Card.Body>
				  <Card.Link href="#">Card Link</Card.Link>
				
			</Card>
		</article>
	);
}

export default ResultCard;
