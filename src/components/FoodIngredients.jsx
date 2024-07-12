import styles from "../css/foodIngredients.module.css";

export default function FoodIngredients({ food, isLoading }) {
  return (
    <>
      <h2>Ingredients</h2>
      {isLoading == true ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.card_container}>
          {food.extendedIngredients.map((ingredients) => (
            <div className={styles.ingredients_card} key={ingredients.name}>
              <p className={styles.name}>{ingredients.name}</p>
              <img
                className={styles.ingredients_img}
                src={
                  `https://img.spoonacular.com/ingredients_100x100/` +
                  ingredients.image
                }
                alt=""
              />
              <p>
                {ingredients.amount}{" "}
                {ingredients.unit == "" ? "pc/s" : ingredients.unit}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
