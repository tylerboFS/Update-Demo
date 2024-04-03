import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import utils from "../utils/utils";

const RecipeDetails = ({ baseUrl, setRecipeList }) => {
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  const { recipeId } = useParams();

  const fetchSingleRecipe = async () => {
    //fetch a single recipe
    try {
      const response = await fetch(`${baseUrl}/recipes/${recipeId}`);
      const result = await response.json();
      console.log(result);
      setRecipe(result.data);
    } catch (err) {
      console.error(err);
    }
    //update the state
  };

  useEffect(() => {
    fetchSingleRecipe();
  }, []);

  //Given a recipe id, fetch detatils for the given recipe and display them here
  return (
    <>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <img src={recipe.imageUrl} />
      <br />
      <button onClick={() => {
        navigate("/recipes");
      }}>Back</button>
      <button onClick={async ()=> {
        //Delete this
        await utils.deleteRecipe(baseUrl, recipeId);
        //navigate back
        await utils.fetchAllRecipes(baseUrl, setRecipeList);
        navigate("/recipes");
      }}>Delete</button>
    </>
  );
};
export default RecipeDetails;
