/** @format */

import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "../App";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRing } from "@fortawesome/free-solid-svg-icons";

export default function RecipeList({ recipes }) {
	const { handleRecipeAdd } = useContext(RecipeContext);

	return (
		<div className="recipe-list">
			<div>
				{recipes.map((recipe) => {
					return <Recipe key={recipe.id} {...recipe} />;
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<span data-tip data-for="add-new">
					<button className="btn btn--primary" onClick={handleRecipeAdd}>
					<FontAwesomeIcon icon={faPlus} /> {" "}
					<FontAwesomeIcon icon={faRing} />
					</button>
				</span>
				<ReactTooltip id="add-new" type="dark" effect="float" place="top">
					<span>Click to Add a New Recipe.</span>
				</ReactTooltip>
			</div>
		</div>
	);
}
