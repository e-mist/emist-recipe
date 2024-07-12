import { useState, useEffect } from "react";
import axios from "axios";

export default function Data() {
  const [data, setData] = useState([]);

  const loadData = () => {
    axios(
      `https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${apiKey}`
    )
      .then(async (res) => {
        setData(await res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);
  return (
    <div>
      {data.map((recipe) => (
        <h1 key={recipe.title}>
          <img src={recipe.image} alt="" />
        </h1>
      ))}
    </div>
  );
}
