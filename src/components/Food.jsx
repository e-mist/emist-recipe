import { useState } from "react";
import styles from "../css/food.module.css";

export default function Food({ foodName, setFoodName, foodData, setFoodID }) {
  function viewHandle(e) {
    setFoodID(e.target.value);
  }

  return (
    <div className={styles.food_container}>
      {foodName != "" ? setFoodName(foodName) : ""}
      {foodName == "" ? (
        <h2>All Time Best Food's</h2>
      ) : (
        <h2>{"search: " + foodName}</h2>
      )}

      <div className={styles.food_main}>
        {foodData.length == 0 ? (
          <h4>Food Not Found</h4>
        ) : (
          foodData.map((food) => (
            <div className={styles.food_card} key={food.title}>
              <h4>{food.title}</h4>
              <img src={food.image} alt="" />
              <button
                value={food.id}
                className={styles.viewBtn}
                onClick={(e) => viewHandle(e)}
              >
                View
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
