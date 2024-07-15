export default function FoodInfo({ food, isLoading }) {
  return (
    <>
      <p>
        <span>Ready in minutes:</span> {food.readyInMinutes} 🕑
      </p>
      <p>
        <span>Serves:</span> {food.servings} 👨‍👩‍👦
      </p>
      <p>
        <span>Vegetarian:</span> {food.vegetarian ? "Yes 🥕" : "No 🥩"}
      </p>
      {isLoading == true ? (
        <p>Loading...</p>
      ) : (
        <p>
          Dish Type/s:&nbsp;
          {food.dishTypes.map((dish) => (
            <span key={dish}>[{dish}]&nbsp;</span>
          ))}
          🍽️
        </p>
      )}
    </>
  );
}
