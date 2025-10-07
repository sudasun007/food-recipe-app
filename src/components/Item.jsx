import React from "react";
import Styles from "../css/item.module.css";

function Item({ item }) {
  return (
    <div>
      <div className={Styles.itemContainer}>
        <div className={Styles.imageContainer}>
          <img
            className={Styles.image}
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
            alt=""
          ></img>
        </div>
        <div className={Styles.nameContainer}>
          <div className={Styles.name}>{item.name}</div>
          <div className={Styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
