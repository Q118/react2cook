/** @format */
import React from "react";
import RecipeList from './components/RecipeList';
import './css/app.css'


function App() {
	
	return (

		<RecipeList recipes={sampleRecipes}/>

	);
}


const sampleRecipes = [ 
	{
		id: 1,
		name: "Plain Tofu",
		servings: 3,
		cookTime: "1:45",
		instructions: "1. Put salt on tofu\n 2. Put tofu in oven\n 3. Eat tofu", 
		ingredients: [
			{
				id: 1,
				name: 'tofu ',
				amount: "2 pounds "
			},
			{
				id: 2,
				name: 'Salt ',
				amount: "1 tbs "
			},
		]
	},
	{
		id: 2,
		name: "Plain Salmon",
		servings: 5,
		cookTime: "0:45",
		instructions: "1. Put garlic on salmon\n 2. Put salmon in oven\n 3. Eat salmon", 
		ingredients: [
			{
				id: 1,
				name: 'salmon ',
				amount: "3 pounds "
			},
			{
				id: 2,
				name: 'garlic ',
				amount: "2 tbs "
			},
		]
	},
	
]


export default App;
