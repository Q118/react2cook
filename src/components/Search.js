/** @format */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

export default function Search() {
	return (
		<>
			<Form inline>
				<a 
					data-tip data-for="search"
					href="./search"
				>
				<Button className="home--search--button">
					<FontAwesomeIcon icon={faSearch} />
				</Button>
				</a>
				<ReactTooltip id="search" type="dark" effect="float" place="bottom">
					<span>Click to Search all Recipes</span>
				</ReactTooltip>
			</Form>
		</>
	);
}


