import { useState } from "react";

const AddRecipe = ({ baseUrl, fetchAllRecipes }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          imageUrl : ""
        }),
      });
      const result = await response.json();
      console.log(result);

      if(result.success){
        alert('Recipe Added');
        await fetchAllRecipes();
      }
      else{
        alert("Something went wrong")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="Add Recipe" />
    </form>
  );
};

export default AddRecipe;
