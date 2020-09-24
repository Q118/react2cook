/** @format */

import React from "react";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";
import Cook from "../Images/Cook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faCodeBranch,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

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
					<span data-tip data-for="github">
					<Link
						href="https://github.com/Q118/react2cook"
						className="github--link">
						<FontAwesomeIcon icon={faCode} />{" "}
						<FontAwesomeIcon icon={faCodeBranch} />
					</Link>
					</span>
					<ReactTooltip id="github"type="dark" effect="float" place="bottom">
					<span>View Source Code</span>
					</ReactTooltip>
					<span data-tip data-for="user">
					<Link href="https://github.com/Q118/react2cook" className="my--link">
						<FontAwesomeIcon icon={faUser} />
						{/* More from the Developer */}
					</Link>
					</span>
					<ReactTooltip id="user"type="dark" effect="float" place="bottom">
					<span>View Source Code</span>
					</ReactTooltip>
				</div>
			</Nav>
		</>
	);
}
