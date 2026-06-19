import React, { useEffect, useState } from 'react'
import classes from "./MealDetails.module.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function MealDetails() {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState({});
  async function getMealDetails() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(data.meals[0]);
      setMealDetails(data.meals[0])
    } catch (error) {
      console.log("error", error);
    }
  }
  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (mealDetails[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: mealDetails[`strIngredient${i}`],
        measure: mealDetails[`strMeasure${i}`],
      });
    }
  }

  useEffect(() => {
    getMealDetails()
  }, [id])

  return (
    <>
      <section className={`${classes.MealDetails}`}>
        <div className={`${classes.showDetails}`}>
          <h1>{mealDetails.strMeal}</h1>
          <div className={`${classes.details}`}>

            <div className={`${classes.mealPhoto}`}>
              <img src={mealDetails.strMealThumb} alt="" />
              <div className={`${classes.links}`}>
                <a className={`${classes.youtube}`}
                  href={mealDetails.strYoutube} target='_blank'>Youtube</a>
                <a className={`${classes.source}`} href={mealDetails.strSource} target='_blank'>Source</a>
              </div>
            </div>

           
            <div className={`${classes.ingredients}`}>
              <h2>Ingredients</h2>
              <table>
                <tbody>
                  {ingredients.map((item, index) => (
                    <tr key={index} className={classes.items}>
                      <td>{item.ingredient}</td>
                      <td>{item.measure}</td>
                    </tr>
                  ))}
                </tbody>


              </table>


               <div className={`${classes.cap}`}>
              <p>{mealDetails.strInstructions}</p>
            </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}
