/** @format */

import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";
import Cook from "../Images/Cook.png";
import { RecipeContext } from "../App";


export default function Navbar({ searchTerm }) {
	const { handleChange } = useContext(RecipeContext);
	return (
		<>
			<Nav className="my-nav">
				<div>
					<img className="cook-image" src={Cook} alt="Cook" height="90px" />
				</div>
				<div>
					<Search 
					handleChange={handleChange} 
					value={searchTerm}
					/>
				</div>
				<div>My Cookbook</div>
				<div>External Links</div>
			</Nav>
		</>
	);
}
