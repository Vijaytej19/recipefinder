import { useEffect } from "react";
import { useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientList from "./IngredientList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "11a4aa42677c4dc2bc20a7ad99d36a1f";
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img
          className={styles.recipeImage}
          src={food.image}
          alt="Recipe Image"
        />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            👪<strong>Serves{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 NonVegetarian"}
            </strong>
          </span>
        </div>

        <div>
          <strong>
            <span>$ {(food.pricePerServing / 100).toFixed(2)} Per Serving</span>
          </strong>
        </div>
        <h2>Ingredients</h2>
        <IngredientList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
