/** @format */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import IngredientList from "./IngredientList";
import "../css/app.css";

function ResultCard(props) {
	const { name, servings, cookTime, instructions, ingredients } = props;

	return (
		<article className="uk-comment resultCard" key={uuidv4()}>
			<div className="recipe__row">
				<span className="recipe__label">Name: </span>
				<span className="recipe__value">{name}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Cook Time: </span>
				<span className="recipe__value">{cookTime}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Servings: </span>
				<span className="recipe__value">{servings}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Instructions: </span>
				<div className="recipe__value recipe__instructions recipe__value--indented">
					{instructions}
				</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Ingredients: </span>
				<div className="recipe__value recipe__value--indented">
					<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</article>
	);
}

export default ResultCard;
