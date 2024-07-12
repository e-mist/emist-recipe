import { useState, useEffect } from "react";
import styles from "../css/search.module.css";
import axios from "axios";

export default function Search({ setFoodData, setFoodName, API_KEY }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";

  const [query, setQuery] = useState("");

  async function searchHandle() {
    await axios(`${URL}?query=${query}&apiKey=${API_KEY}`)
      .then(async (res) => {
        setFoodData(await res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    setFoodName(query.charAt(0).toUpperCase() + query.slice(1).toLowerCase());

    setQuery("");
  }

  useEffect(() => {
    searchHandle();
  }, []);
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
      />
      <button onClick={searchHandle}>
        <img
          className={styles.searchBtn}
          src="./src/assets/images/search.png"
          alt=""
        />
      </button>
    </>
  );
}
