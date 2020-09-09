/** @format */

import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from '../App';

export default function RecipeList({ recipes }) {
	const { handleRecipeAdd } = useContext(RecipeContext)


	//loop through the recipes, return a recipe
	//... = take all the individual key value pairs of recipe and put them in as individual things
	return (
		<div className="recipe-list">
			<div>
				{recipes.map((recipe) => {
					return <Recipe 
							 key={recipe.id} {...recipe} />
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button 
				className="btn btn--primary" 
				onClick={handleRecipeAdd}>
					Add Recipe
				</button>
			</div>
		</div>
	);
}
