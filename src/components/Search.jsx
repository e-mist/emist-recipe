import { useState, useEffect } from "react";
import styles from "../css/search.module.css";
import axios from "axios";

export default function Search({
  setFoodData,
  setFoodName,
  API_KEY,
  apiIndex,
  setApiIndex,
  apis,
  apiFunction,
}) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";

  const [query, setQuery] = useState("");

  async function searchHandle() {
    await axios(`${URL}?query=${query}&apiKey=${API_KEY}`)
      .then(async (res) => {
        setFoodData(await res.data.results);
      })
      .catch((err) => {
        if (err.code == "ERR_BAD_REQUEST") {
          apiFunction(apis[apiIndex]);
          setApiIndex(apiIndex + 1);
        }
      });

    setFoodName(query.charAt(0).toUpperCase() + query.slice(1).toLowerCase());

    setQuery("");
  }

  useEffect(() => {
    searchHandle();
  }, [API_KEY]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
      />
      <button onClick={searchHandle}>
        <i className={styles.searchBtn + " fa-solid fa-magnifying-glass"}></i>
      </button>
    </>
  );
}
