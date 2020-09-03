/** @format */

import React, { Component } from "react";

export default class Counter extends Component {
	//all code in here will be rendered into app component
	constructor(props) {
		super(props);

		//state variable with a count property
		this.state = {
			count: props.initialCount,
		};
	}

	render() {
		return (
			<div>
				<button onClick={() => this.changeCount(-1)}> - </button>
				<span>{this.state.count}</span>
				<button onClick={() => this.changeCount(1)}> + </button>
			</div>
		);
	}

	changeCount(amount) {
		//pass in first function that will return a new state
		this.setState((prevState) => {
			return { count: prevState.count + amount };
		});
	}
}
