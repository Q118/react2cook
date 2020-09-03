/** @format */

import React, { Component } from "react";
import { ThemeContext } from "../App";

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
			<ThemeContext.Consumer>
				{style => (
					<div>
						<button style={style}
						 onClick={() => this.changeCount(-1)}> - </button>
						<span>{this.state.count}</span>
						<button style={style}
						onClick={() => this.changeCount(1)}> + </button>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}

	changeCount(amount) {
		//pass in first function that will return a new state
		this.setState((prevState) => {
			return { count: prevState.count + amount };
		});
	}
}
