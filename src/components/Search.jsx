import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "../css/search.module.css";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState(""); // later set this to default pizza

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  // const API_KEY = "f82d006a657347aa811b5aeabcb68176";
  // const API_KEY = "8245c04ff82c437297d3348da944eb91";
  const API_KEY = import.meta.env.VITE_API_KEY;

  //   useEffect(() => {
  //     function demo() {
  //       console.log("Demo function executed.");
  //     }
  //     demo();
  //   }, [query]);

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={Styles.searchContainer}>
      <input
        className={Styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}

export default Search;
