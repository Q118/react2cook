/** @format */

import React from "react";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";
import Cook from "../Images/Cook.png";


export default function Navbar() {

	return (
		<>
			<Nav className="my-nav">
				<div>
					<img className="cook-image" src={Cook} alt="Cook" height="90px" />
				</div>
				<div>
					<Search />
				</div>
				<div className="app--title__container">
					<h1>My Cookbook</h1>
				</div>
				<div>
					External Links
				</div>
			</Nav>
		</>
	);
}
