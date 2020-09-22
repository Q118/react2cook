/** @format */

import React from "react";
import ResultCard from "./ResultCard";


const recipes = [localStorage.getItem("cookingWithReact.recipes")];

export default function ResultContainer() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResults, setSearchResults] = React.useState([]);
	const handleChange = (event) => {
        recipes.reduce((obj, item) => {
            obj[item.id] = item
            return obj;
        },{})
        
        setSearchTerm(event.target.value);
		console.log(recipes);
	};
	React.useEffect(() => {
		const results = recipes.filter((recipe) =>
			recipe.toLowerCase().includes(searchTerm)
		);
		setSearchResults(results);
	}, [searchTerm]);

	return (
		<div className="results">
			<input
				type="text"
				placeholder="Filter by Keyword"
				value={searchTerm}
				onChange={handleChange}
			/>
			{searchResults.length ? (
                searchResults.map(item =>
                    <ResultCard
                        key={item.id}
                        name={item.name}
                        cookTime={item.cookTime}
                        // description={item.description}
                        // image={item.image}
                        // link={item.link}
                    />
                )
            ) : (
                <p className="noResText">No Results to Display</p>
            )}
            </div>
    );
}
