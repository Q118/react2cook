/** @format */

import React, { Component } from "react";

export default class Counter extends Component {
	//all code in here will be rendered into app component
	render() {
		return (
			<div>
				<button className="btn"> - </button>
		<span>{this.props.initialCount}</span>
				<button> + </button>
			</div>
		);
	}
}
