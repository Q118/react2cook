/** @format */

import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from '../App';

export default function RecipeEdit({ recipe }) {

	const { handleRecipeChange } =  useContext(RecipeContext)

	//helper function for all the inputs in the edit
	//will pass in the changes we want to make
	function handleChange(changes) {
		//here we are overriding the name and recipe with the name from changes and 
		//we want to pass this to the handle recipe change function
		handleRecipeChange(recipe.id, { ...recipe, ...changes })

	}



	return (
		<div className="recipe-edit">
			<div className="recipe-edit__remove-button-container">
				<button className="btn recipe-edit__remove-button">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input
					type="name"
					name="name"
                    id="name"
					value={recipe.name}
					onInput={e => handleChange({ name: e.target.value })}
					className="recipe-edit__input"
				/>
				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input
					type="name"
					name="cookTime"
                    id="cookTime"
					value={recipe.cookTime}
					onInput={e => handleChange({ cookTime: e.target.value })}
					className="recipe-edit__input"
				/>
				<label htmlFor="servings" className="recipe-edit__label">
					Servings
				</label>
				<input
					type="number"
					min="1"
					name="servings"
                    id="servings"
					value={recipe.servings}
					onInput={e => handleChange({ servings: parseInt(e.target.value) || "" })}
					className="recipe-edit__input"
				/>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
                <textarea 
                    name="instructions"
                    className="recipe-edit__input" 
                    id="instructions">
                    {recipe.instructions} 
                </textarea>
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit 
                        key={ingredient.id} 
                        ingredient={ingredient} 
                    />
                ))}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn btn--primary">Add Ingredient</button>
			</div>
		</div>
	);
}
