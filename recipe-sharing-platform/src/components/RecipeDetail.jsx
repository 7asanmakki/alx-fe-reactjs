import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((r) => r.id.toString() === id);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-red-500">
        <h2 className="text-2xl font-bold">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4 text-gray-800">{recipe.title}</h1>
      <p className="mt-2 text-gray-600">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mt-6 text-gray-700">Instructions</h2>
      <p className="mt-2 text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
