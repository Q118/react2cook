/** @format */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Search() {

  
	return (
		<>
			<Form inline>
        <div>
          <Button 
            variant="outline-success" 
            className="search--button"
          >
					<FontAwesomeIcon icon={faSearch} />
          {/* Search  tooltip addd here */}
				  </Button>
                </div>
			</Form>
		</>
	);
}
