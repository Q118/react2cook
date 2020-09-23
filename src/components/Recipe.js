/** @format */

import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

export default function Recipe(props) {
	const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

	const { id, name, cookTime, servings, instructions, ingredients } = props;

	return (
		<div className="recipe">
			<div className="recipe__header">
			<h3 className="recipe__title">{name}</h3>
				<div className="button--container">
					<span data-tip data-for="edit">
						<button
							className="btn btn--primary mr-1"
							onClick={() => handleRecipeSelect(id)}>
							<FontAwesomeIcon icon={faEdit} />
						</button>
					</span>
					<ReactTooltip id="edit" type="dark" effect="float" place="bottom">
						<span>Click to Edit</span>
					</ReactTooltip>
					<span data-tip data-for="delete">
						<button
							className="btn btn--danger"
							onClick={() => handleRecipeDelete(id)}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</span>
					<ReactTooltip id="delete" type="dark" effect="float" place="bottom">
						<span>Click to Delete</span>
					</ReactTooltip>
				</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label recipe__label-ct">Cook Time: </span>
				<span className="recipe__value">{cookTime}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label recipe__label-sg">Servings: </span>
				<span className="recipe__value">{servings}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label recipe__label-ins">Instructions: </span>
				<div className="recipe__value recipe__instructions recipe__value--indented">
					<span className="just-i">{instructions}</span>
				</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label recipe__label-ing">Ingredients: </span>
				<div className="recipe__value recipe__value--indented">
				<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</div>
	);
}
