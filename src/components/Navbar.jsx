import styles from "../css/navbar.module.css";
import Search from "./Search";

export default function Navbar({
  API_KEY,
  setFoodData,
  setFoodName,
  apiIndex,
  setApiIndex,
  apis,
  apiFunction,
}) {
  return (
    <nav>
      <div className={styles.header_text}>
        <h1>eMIST Recipe</h1>
      </div>
      <div className={styles.search}>
        <Search
          API_KEY={API_KEY}
          apiIndex={apiIndex}
          setApiIndex={setApiIndex}
          apis={apis}
          apiFunction={apiFunction}
          setFoodName={setFoodName}
          setFoodData={setFoodData}
        />
      </div>
    </nav>
  );
}
