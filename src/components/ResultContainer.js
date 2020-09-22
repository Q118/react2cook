import React from 'react';
import Recipe from './Recipe';
import ReactDOM from "react-dom";


const recipes = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];

export default function ResultContainer() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    React.useEffect(() => {
       const results = recipes.filter(recipe =>
         recipe.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);
   
     return (
       <div className="results">
         <input
           type="text"
           placeholder="Filter by Keyword"
           value={searchTerm}
           onChange={handleChange}
         />
         <ul>
            {searchResults.map(item => (
             <li>{item}</li>
           ))}
         </ul>
       </div>
     );
}