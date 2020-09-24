/** @format */

import React from "react";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";
import Cook from "../Images/Cook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import Link from "react-bootstrap/Button";

export default function Navbar() {
	return (
		<>
			<Nav className="my-nav">
				<div>
					<img className="cook-image" src={Cook} alt="Cook" height="90px" />
				</div>
				<div className="app--title__container">
					<h1>My Cookbook</h1>
				</div>
				<div>
					<Search />
				</div>
				<div className="links__container">
					<Link 
					  href="https://github.com/Q118/react2cook"
					  className="github--link"
					>
						<FontAwesomeIcon icon={faCode} />{" "}
						<FontAwesomeIcon icon={faCodeBranch} />
					</Link>
				</div>
			</Nav>
		</>
	);
}
