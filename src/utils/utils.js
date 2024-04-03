//Fetches all recipes
const utils = {
  fetchAllRecipes: async(url, setRecipeList) => {
    try {
      const response = await fetch(`${url}/recipes`);
      const result = await response.json();
      console.log(result);
      //updating the state which will trigger a re-render
      setRecipeList(result.data)
    } catch (err) {
      console.log(err);
    }

  },
  fetchSingleRecipe: async(url, setRecipe) => {

  },
  deleteRecipe: async (url, id) => {
    try {
      const response = await fetch(`${url}/recipes/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  },
  addRecipe: async(url, recipe) => {

  }


}

export default utils;