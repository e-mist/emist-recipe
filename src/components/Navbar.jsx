import styles from "../css/navbar.module.css";
import Search from "./Search";

export default function Navbar({ API_KEY, setFoodData, setFoodName }) {
  return (
    <nav>
      <div className={styles.header_text}>
        <h1>eMIST Recipe</h1>
        <img
          className={styles.logo}
          src="./src/assets/images/logo.png"
          alt=""
        />
      </div>
      <div className={styles.search}>
        <Search
          API_KEY={API_KEY}
          setFoodName={setFoodName}
          setFoodData={setFoodData}
        />
      </div>
    </nav>
  );
}
