import Navbar from "./components/Navbar";
import Food from "./components/Food";
import { useState } from "react";
import "./css/main.css";
import FoodDetail from "./components/FoodDetail";
import Footer from "./components/Footer";

function App() {
  const API_KEY = "d360fd1cd8fd43c7928ff57f15633926";

  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("");
  const [foodName, setFoodName] = useState("");

  return (
    <div>
      <div className="main">
        <Navbar
          API_KEY={API_KEY}
          setFoodName={setFoodName}
          setFoodData={setFoodData}
        />
        {foodID == "" ? (
          <Food
            foodName={foodName}
            setFoodName={setFoodName}
            foodData={foodData}
            setFoodID={setFoodID}
          />
        ) : (
          <FoodDetail API_KEY={API_KEY} foodID={foodID} setFoodID={setFoodID} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
