import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({ recipes }) {
    //loop through the recipes, return a recipe
    //... = take all the individual key value pairs of recipe and put them in as individual things
    return (
    <div>
        {recipes.map(recipe => {
          return ( 
            <Recipe 
            key= {recipe.id}
            {...recipe} 
            /> 
          )
        })}
    </div> 
    )
}
