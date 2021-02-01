import axios from "axios";
import React, { useEffect, useState } from "react";
import { Food, SelecioneCategory } from "../../types/food";

const Foods = () => {
  const [food, setFood] = useState<Food[]>();
  const [categories, setCategories] = useState<string>();
  const [meals, setMeals] = useState<SelecioneCategory[]>();
  
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => setFood(response.data.categories));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
      .then((response) => setMeals(response.data.meals));
  }, [categories]);
  useEffect(() => {
    if (categories !== undefined){
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categories}`)
      .then((response) => setMeals(response.data.meals));
  }
  }, [categories]);


  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." onChange={(e) => setCategories(e?.target.value)}/>
      </p>

      <ul>
        {food?.map((item: Food) => (
          <li  onClick={() => setCategories(item.strCategory)} >
            {item.strCategory}
          </li>
        ))}
      </ul>

      <h2>
        Tipo selecionado: <strong>Batata (mudar isso hein)</strong>
      </h2>

      <div className="food-container">
        {meals?.map((item: SelecioneCategory) => (
          <div className="food-item" key={item.idMeal}>
            <img src={item.strMealThumb}  alt={item.strMeal} />
            <p>{item.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
