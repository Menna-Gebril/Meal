import React, { useEffect, useState } from 'react'
import classes from "./Home.module.scss"
import { Link, NavLink } from "react-router-dom";
import img1 from "../../assets/images/8rfd4q1764112993.jpg"
import axios from 'axios';
export default function Home() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterMeal, setFilterMeal] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  async function getFilterMeal(category) {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      console.log("filter", data.meals);
      setFilterMeal(data.meals)

    } catch (error) {
      console.log(error);
    }
  }
  async function getMeals() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      setMeals(data.meals)
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  }
  async function getCategories() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      console.log("categories", data.meals);
      setCategories(data.meals)
    } catch (error) {
      console.log(error);
    }
  }
  const displayMeals = activeCategory === "All" ? meals : filterMeal;
  useEffect(() => {
    if (activeCategory === "All") {
      getMeals();
    } else {
      getFilterMeal(activeCategory);
    }

  }, [activeCategory]);


  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>

      <section className={`${classes.Home}`}>
        <div className={`${classes.divideHome}`}>


          <div className={`${classes.menu}`}>
            <h1>Learn, Cook, Eat Your Food</h1>

            <form className={`${classes.formList}`}>

              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className={`${classes.categories}`} name="meals" id="meals">
                <option value="All">All</option>
                {
                  categories.map((category, index) => (
                    <option key={index}
                      value={category.strCategory}>{category.strCategory}</option>
                  ))
                }
              </select>
            </form>
            <div className={`${classes.list}`}>

              <div className={`${classes.btns}`}>
                <button type='button'
                  onClick={() => setActiveCategory("All")}
                  className={
                    activeCategory === "All"
                      ? classes.activeLink
                      : classes.navLink
                  }>All</button>
                {
                  categories.map((category, index) => (
                    <button type='button'
                      key={index}
                      onClick={() => setActiveCategory(category.strCategory)}
                      className={
                        activeCategory === category.strCategory
                          ? classes.activeLink
                          : classes.navLink
                      }>{category.strCategory}</button>
                  ))
                }
              </div>
            </div>
          </div>

          <div className={`${classes.products}`}>
            {
              displayMeals.map((meal) => (
                <div key={meal?.idMeal} className={`${classes.item}`}>
                  <div className='inner'>
                    <div>
                      <img src={meal?.strMealThumb} alt={meal?.strMeal} />
                    </div>
                    <div className={`${classes.caption}`}>
                      <h3>{meal?.strMeal.split(" ").slice(0, 2).join(" ")}</h3>
                      <h5>
                        <i className="fa-solid fa-earth-europe"></i>
                        {meal?.strCountry}
                      </h5>
                      <Link to={`/meal/${meal?.idMeal}`}>View Recipe</Link>
                    </div>
                  </div>
                </div>

              ))
            }



          </div>


        </div>
      </section>
    </>
  )
}
