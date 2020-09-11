/** @format */
import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./components/RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';


function App() {
	//state to store the selected recipe
	const[selectedRecipeId, setSelectedRecipeId] = useState()
	
	const [recipes, setRecipes] = useState(sampleRecipes)

	//variable equal to finding out recipe from our recipes list
	//for each recipe, we just want to compare the recipe ID to the ID of our selected recipe 
	const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)


//load 
useEffect(() => {
	const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
	//check if it exists yet
	//if its not null, there is info there, so set recipes to that info
	if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))

}, [])

	//use effect takes a function to be called every single time component is re-rendered
	//pass it secondly an array of all the different dependencies
			//that you want it to depend on
	//if its empty- will happen on page load only
		//passing in recipes, saying every time the recipes change...
		useEffect(() => {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
		}, [recipes])

	const RecipeContextValue = {
		//when key will be the same as value, in react can just specify once
			//wud have been "handleRecipeAdd: handleRecipeAdd"
		handleRecipeAdd,
		handleRecipeDelete,
		handleRecipeSelect
	}

function handleRecipeSelect(id) {
	setSelectedRecipeId(id)
}

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
		<RecipeContext.Provider value={RecipeContextValue}>
			<RecipeList recipes={recipes} />
			{selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
			{/* This line above is saying, is there a selectedRecipe? if true then
			its going to evaluate the next thing after the "&&", then it will return it
			if the selectedRecipe is undefined it like short-circuits and doesn't return the second part */}
		</RecipeContext.Provider>
	
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
