/** @format */

import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { RecipeContext } from "../App";


export default function Search() {
  const { handleChange } = useContext(RecipeContext);
  
	return (
		<>
			<Form inline>
                <input
                  type="search" 
                  placeholder="Type to Filter" 
                  className="mr-sm-2"
                  id="search"
                  onChange={(e)=>handleChange(e)}
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
