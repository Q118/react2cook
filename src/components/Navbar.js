/** @format */

import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Cook from '../Images/Cook.png'

export default function Navbar() {
	return (
		<>
			<Nav className="my-nav">
				<div>
                    <img
                      className="cook-image" 
                      src={Cook} 
                      alt="Cook"
                      height= "90px"
                    />
                </div>
				<div className="search--button__container">
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button 
                          variant="outline-success"
                          className="search--button"
                        >
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
					</Form>
				</div>
				<div>My Cookbook</div>
				<div>External Links</div>
			</Nav>
		</>
	);
}
