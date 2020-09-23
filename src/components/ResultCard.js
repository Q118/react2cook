/** @format */

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ResultCard(props) {
	const { name, cookTime } = props;

	// const [recipe] = useState({
	//     name: name,
	//     cookTime: cookTime
	// });

	return (
		<article className="uk-comment resultCard" key={uuidv4()}>
			<div
				className="uk-comment-header uk-grid-medium uk-flex-middle topInfo"
				uk-grid="true">
				<div className="uk-width-auto">
					<p>Cook Time: {name}</p>
				</div>
				<div className="uk-width-expand">
					<h4 className="uk-comment-title uk-margin-remove">Name{name}</h4>
				</div>
			</div>
			<div className="uk-comment-body">
				<p>{cookTime}</p>
			</div>
		</article>
	);
}

export default ResultCard;
