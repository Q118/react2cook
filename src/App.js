/** @format */
import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from "react-router-dom";

import sampleRecipes from "./utils/sampleRecipes.json";
import RecipeList from "./components/RecipeList";
import Navbar from "./components/Navbar";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./components/RecipeEdit";
import SearchPage from "./pages/SearchPage";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
	//state to store the selected recipe
	const [selectedRecipeId, setSelectedRecipeId] = useState();
	const [recipes, setRecipes] = useState(sampleRecipes);


	//variable equal to finding out recipe from our recipes list
	//for each recipe, we just want to compare the recipe ID to the ID of our selected recipe
	const selectedRecipe = recipes.find(
		(recipe) => recipe.id === selectedRecipeId
	);

	//on load
	useEffect(() => {
		const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		//check if it exists yet
		if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
	}, []);
	//use effect takes a function to be called every single time component is re-rendered
	//if second array is empty- will happen on page load only

	//passing in recipes, saving every time the recipes change...
	// ** this should apply to everything except the search function
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
	}, [recipes]);

	function handleRecipeSelect(id) {
		setSelectedRecipeId(id);
	}
	function handleRecipeAdd() {
		const newRecipe = {
			id: uuidv4(),
			name: "",
			servings: 1,
			cookTime: "",
			instructions: "",
			ingredients: [{ id: uuidv4(), name: "", amount: "" }],
		};
		//make it so the new recipe automatically populates on the right side
		setSelectedRecipeId(newRecipe.id);
		//get all the recipes that are in our array right now
		//and add new recipe to end of it, create new array with it
		setRecipes([...recipes, newRecipe]);
	}
	//function to allow us to change a recipe
	//takes in id and new recipe to replace the old recipe with
	function handleRecipeChange(id, recipe) {
		//set up variable to = all the current recipes inside the array
		//we use copy so that it doesn't change the state of our original array
		const newRecipes = [...recipes];

		//get the index of whichever recipe that has the id of the one getting passed in
		const index = newRecipes.findIndex((r) => r.id === id);

		//this line will replace old recipe with new one
		newRecipes[index] = recipe;

		setRecipes(newRecipes);
	}

	function handleRecipeDelete(id) {
		//this line below-clear out the selected recipe id when we dont actually have a recipe that corresponds with that ID
		if (selectedRecipeId !== null && selectedRecipeId === id) {
			setSelectedRecipeId(undefined);
			//explicit in saying that we no longer have a selected recipe
		}

		//want to filter it to get all the recipes that don't have that id
		//and set those to our current recipes
		//essentially to remove the specific recipe
		setRecipes(recipes.filter((recipe) => recipe.id !== id));
	}


	//things in here can be accessed inside our ENTIRE application
	const RecipeContextValue = {
		//when key will be the same as value, in react can just specify once
		//wud have been "handleRecipeAdd: handleRecipeAdd"
		handleRecipeAdd,
		handleRecipeDelete,
		handleRecipeSelect,
		handleRecipeChange
	};

	return (
		<Router>
			<RecipeContext.Provider value={RecipeContextValue}>
				<div>
					<Switch>
						<Route exact path="/">
							<Navbar  />
							<RecipeList recipes={recipes} />
							{selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
							{/* This line above is saying, is there a selectedRecipe? if true then
					its going to evaluate the next thing after the "&&", then it will return it
					if the selectedRecipe is undefined it like short-circuits and doesn't return the second part
					its the same as doing a turnery and the thing after the : wud be null */}
						</Route>
						<Route path="/search">
							<SearchPage />
						</Route>
					</Switch>
				</div>
			</RecipeContext.Provider>
		</Router>
	);
}

export default App;
