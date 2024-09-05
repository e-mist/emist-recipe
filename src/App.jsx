import Navbar from "./components/Navbar";
import Food from "./components/Food";
import { useEffect, useState } from "react";
import "./css/main.css";
import FoodDetail from "./components/FoodDetail";
import Footer from "./components/Footer";

function App() {
  const [API_KEY, SET_API_KEY] = useState("c3cfffee2d14443687f465437119be2f");
  const [apiIndex, setApiIndex] = useState(0);

  async function apiFunction(setApi) {
    await SET_API_KEY(setApi);
  }

  const apis = [
    "78116ea4290c445a85e031440721a4d3",
  ];


  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("");
  const [foodName, setFoodName] = useState("");

  return (
    <div>
      <div className="main_container">
        <div className="main">
          <Navbar
            API_KEY={API_KEY}
            apiIndex={apiIndex}
            setApiIndex={setApiIndex}
            apis={apis}
            apiFunction={apiFunction}
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
            <FoodDetail
              API_KEY={API_KEY}
              foodID={foodID}
              setFoodID={setFoodID}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
