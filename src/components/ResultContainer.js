/** @format */

import React from "react";
import ResultCard from "./ResultCard";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";

const recipes = JSON.parse(localStorage.getItem("cookingWithReact.recipes"));

export default function ResultContainer() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResults, setSearchResults] = React.useState([]);
	const handleChange = (event) => {
		recipes.reduce((obj, item) => {
			obj[item.id] = item;
			return obj;
		}, {});

		setSearchTerm(event.target.value);
		console.log(recipes);
	};
	React.useEffect(() => {
		const results = recipes.filter((recipe) =>
			recipe.name.toLowerCase().includes(searchTerm)
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
				searchResults.map((item) => (
					<ResultCard
						key={uuidv4()}
						name={item.name}
						cookTime={item.cookTime}
						// description={item.description}
						// image={item.image}
						// link={item.link}
					/>
				))
			) : (
				<p className="noResText">No Results to Display</p>
			)}
			<div>
				<a variant="outline-success" className="search--button" href="/">
					<Button>Back to CookBook</Button>
				</a>
			</div>
		</div>
	);
}
