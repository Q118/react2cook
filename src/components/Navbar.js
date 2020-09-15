/** @format */

import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Navbar() {
	return (
		<>
			<Nav className="my-nav">
				<div>Image/Logo</div>
				<div>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</div>
				<div>My Cookbook</div>
				<div>External Links</div>
			</Nav>
		</>
	);
}
