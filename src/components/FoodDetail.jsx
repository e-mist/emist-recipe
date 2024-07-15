import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../css/foodDetail.module.css";
import FoodIngredients from "./FoodIngredients";
import FoodInstructions from "./FoodInstructions";
import FoodInfo from "./FoodInfo";

export default function FoodDetail({ foodID, setFoodID, API_KEY }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function foodIDHandle() {
    setFoodID("");
  }

  async function foodDetails() {
    await axios(
      `https://api.spoonacular.com/recipes/${foodID}/information?apiKey=${API_KEY}`
    )
      .then(async (res) => {
        setFood(await res.data);
        setIsLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    foodDetails();
  }, []);
  return (
    <div className={styles.food_details_container}>
      <div className={styles.main_info}>
        <div>
          <h2>{food.title}</h2>
          <img src={food.image} alt="" />
        </div>
        <div className={styles.food_info_container}>
          <FoodInfo food={food} isLoading={isLoading} />
        </div>
      </div>

      <br />
      <div className={styles.food_ingredients_container}>
        <FoodIngredients food={food} isLoading={isLoading} />
      </div>
      <div className={styles.food_instructions_container}>
        <FoodInstructions food={food} isLoading={isLoading} />
      </div>

      <button onClick={foodIDHandle} className={styles.backBtn}>
        Back
      </button>
    </div>
  );
}
