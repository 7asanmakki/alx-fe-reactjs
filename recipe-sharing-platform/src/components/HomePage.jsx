import { useEffect, useState } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data from JSON
    setRecipes(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Recipe Sharing Platform</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
