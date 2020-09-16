/** @format */

import React from "react";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Search({ handleSearchChange }) {
    
	return (
		<>
			<Form inline>
                <input
                  type="search" 
                  placeholder="Keyword Search" 
                  className="mr-sm-2"
                  id="search"
                  aria-label="Search"
                  onChange={e => handleSearchChange(e)}
                />
                <div className="search--button__container">
          <Button 
            variant="outline-success" 
            className="search--button"
          >
					<FontAwesomeIcon icon={faSearch} />
				  </Button>
                </div>
			</Form>
		</>
	);
}
