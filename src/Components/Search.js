import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css"
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "11a4aa42677c4dc2bc20a7ad99d36a1f";
export default function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("");
  //Syntax of useEffect Hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      // console.log(data.results);
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the recipe"
        className={styles.input}
      />
    </div>
  );
}
