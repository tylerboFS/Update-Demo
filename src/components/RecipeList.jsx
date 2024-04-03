import { Link } from "react-router-dom";
import utils from "../utils/utils";

const RecipeList = ({ recipeList, baseUrl, fetchAllRecipes, setRecipeList }) => {
  const deleteHandler = async (id) => {
    await utils.deleteRecipe(baseUrl, id);
    await utils.fetchAllRecipes(baseUrl, setRecipeList)
  };

  return (
    <>
      <h3>List of Recipes</h3>
      {recipeList.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <p>{recipe.name}</p>
            </Link>
            <button onClick={() => deleteHandler(recipe.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default RecipeList;
