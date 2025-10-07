import React from "react";
import FoodItem from "./FoodItem";

function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
