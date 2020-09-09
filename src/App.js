/** @format */
import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes)
	function handleRecipeAdd() {
		const newRecipe = {
			id: uuidv4(),
			name: "New",
			servings: 1,
			cookTime: "1:00",
			instructions: "Instr.",
			ingredients: [
				{ id: uuidv4(), name: "Name", amount: "1 Tbs" }
			]
		}
		
		//get all the recipes that are in our array right now
		//and add new recipe to end of it, create new array with it
		setRecipes([...recipes, newRecipe]);
	}

	function handleRecipeDelete(id) {
		//want to filter it to get all the recipes that don't have that id
		//and set those to our current recipes
		//essentially to remove the specific recipe
		setRecipes(recipes.filter(recipe => recipe.id !== id))
	}

	return (
		<RecipeList 
		recipes={recipes} 
		handleRecipeAdd={handleRecipeAdd}
		handleRecipeDelete={handleRecipeDelete} 
		/>
	);
}

const sampleRecipes = [
	{
		id: 1,
		name: "Plain Tofu",
		servings: 3,
		cookTime: "1:45",
		instructions: "1. Put salt on tofu\n2. Put tofu in oven\n3. Eat tofu",
		ingredients: [
			{
				id: 1,
				name: "tofu ",
				amount: "2 pounds ",
			},
			{
				id: 2,
				name: "Salt ",
				amount: "1 tbs ",
			},
		],
	},
	{
		id: 2,
		name: "Plain Salmon",
		servings: 5,
		cookTime: "0:45",
		instructions:
			"1. Put garlic on salmon\n 2. Put salmon in oven\n 3. Eat salmon",
		ingredients: [
			{
				id: 1,
				name: "salmon ",
				amount: "3 pounds ",
			},
			{
				id: 2,
				name: "garlic ",
				amount: "2 tbs ",
			},
		],
	},
];

export default App;
