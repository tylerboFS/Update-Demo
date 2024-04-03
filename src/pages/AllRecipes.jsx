import { useEffect, useState } from "react";
import AddRecipe from "../components/AddRecipe";
import RecipeList from "../components/RecipeList";

const AllRecipes = ({ baseUrl, recipeList, setRecipeList }) => {
  

  const fetchAllRecipes = async () => {
    //fetching recipes from the API
    try {
      const response = await fetch(`${baseUrl}/recipes`);
      const result = await response.json();
      console.log(result);
      //updating the state which will trigger a re-render
      setRecipeList(result.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  return (
    <>
      <h2>Recipes</h2>
      <AddRecipe baseUrl={baseUrl} fetchAllRecipes={fetchAllRecipes} />
      <RecipeList baseUrl={baseUrl} setRecipeList={setRecipeList} recipeList={recipeList} fetchAllRecipes={fetchAllRecipes} />
    </>
  );
};

export default AllRecipes;
