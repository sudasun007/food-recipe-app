import React, { useEffect, useState } from "react";
import Styles from "../css/foodDetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  // const API_KEY = "f82d006a657347aa811b5aeabcb68176";
  // const API_KEY = "8245c04ff82c437297d3348da944eb91";
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={Styles.recipeCard}>
        <h1 className={Styles.recipeName}>{food.title}</h1>
        <img className={Styles.recipeImage} src={food.image} alt="" />
        <div className={Styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>🍽️Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              {(food.pricePerServing / 100).toFixed(2)} per Serving
            </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={Styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((Step) => (
                <li>{Step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
