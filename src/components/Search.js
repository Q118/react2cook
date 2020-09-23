/** @format */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Search() {
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Click to Search For Recipes
		</Tooltip>
	);

	return (
		<>
			<Form inline>
				<div>
					<a
						variant="outline-success"
						className="home--search--button"
						href="./search">
						<OverlayTrigger
							placement="bottom"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip}>
							<Button>
								<FontAwesomeIcon icon={faSearch} />
								{/* Search  tooltip addd here */}
							</Button>
						</OverlayTrigger>
					</a>
				</div>
			</Form>
		</>
	);
}
