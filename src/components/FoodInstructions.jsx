import styles from "../css/foodInstructions.module.css";

export default function FoodInstructions({ food, isLoading }) {
  return (
    <>
      <h2>Instructions</h2>
      <ol className={styles.ol}>
        {isLoading == true ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li key={step.step}>{step.step}</li>
          ))
        )}
      </ol>
    </>
  );
}
