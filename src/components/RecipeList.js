/** @format */

import React, { useContext, useState, useEffect } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "../App";


export default function RecipeList({ recipes }) {
	const { handleRecipeAdd } = useContext(RecipeContext);
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const results = recipes.filter(recipe =>
		  recipe.toString().toLowerCase().includes(searchTerm)
		);
		setSearchResults(results);
	  }, [searchTerm]);

	return (
		<div className="recipe-list">
			<div>
				{searchResults.map((recipe) => {
					return <Recipe key={recipe.id} {...recipe} />;
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button className="btn btn--primary" onClick={handleRecipeAdd}>
					Add Recipe
				</button>
			</div>
		</div>
	);
}
