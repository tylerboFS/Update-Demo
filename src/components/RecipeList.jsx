import { Link } from "react-router-dom";

const RecipeList = ({ recipeList, baseUrl, fetchAllRecipes }) => {
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/recipes/${id}`, {
        method: "DELETE",
      });
      console.log("RESPONSE", response);
      await fetchAllRecipes();
    } catch (err) {
      console.log(err);
    }
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
