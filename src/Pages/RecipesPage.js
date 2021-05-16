import React, { useState, useEffect } from "react";
import Recipe from "../Components/Recipe";
import "../Styles/Recipe.css";

const RecipesPage = () => {
  //* Creating States
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("potato");

  //* fetching recipes on every search.
  useEffect(() => {
    getRecipes();
  }, [search]);

  //* setting authentication
  const APP_ID = "b40dd99a";
  const APP_KEY = "51f3a11437ed13254c43a691a3ce627b";
  const exampleReq = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //* Function to fetch recipes
  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //* Function to set the input value
  const inputSearch = (e) => {
    setInput(e.target.value);
  };

  //* function to implement search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={input}
          onChange={inputSearch}
          placeholder="search for a food item..."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            cal={recipe.recipe.calories}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
