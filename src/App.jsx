import AllRecipes from "./pages/AllRecipes";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import RecipeDetails from "./pages/RecipeDetails";
import { useState } from "react";

const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-ClassDemo";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <>
      <NavBar />
      <h1>Update Demo</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipes"
          element={
            <AllRecipes
              baseUrl={API_URL}
              recipeList={recipeList}
              setRecipeList={setRecipeList}
            />
          }
        />
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetails baseUrl={API_URL} setRecipeList={setRecipeList} />}
        />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </>
  );
}

export default App;
