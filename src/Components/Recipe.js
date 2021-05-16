import React from "react";
import "../Styles/Recipe.css";

const Recipe = ({ name, image, ingredients, cal }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-main">
        <img className="recipe-image" src={image} alt="recipe" />
        <div className="recipe-text-container">
          <h1 className="recipe-name">{name.split(" ").splice(0, 6).join(" ")}</h1>
          <h3 className="recipe-calories">Calories: {Math.round(cal)} KCal</h3>
        </div>
      </div>
      <ul className="recipe-ingredients">
        {ingredients.map((ingredient) => {
          return <li className="recipe-ingredient">» {ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recipe;
