import React from "react";
import Styles from "../css/foodItem.module.css";

function FoodItem({ food, setFoodId }) {
  return (
    <div className={Styles.itemContainer}>
      <img className={Styles.itemImgae} src={food.image} alt="" />
      <div className={Styles.itemContent}>
        <p className={Styles.itemName}>{food.title}</p>
      </div>

      <div className={Styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={Styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
