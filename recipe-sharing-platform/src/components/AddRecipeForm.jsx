// src/components/AddRecipeForm.jsx
import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please list at least 2 ingredients';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log({
      title,
      ingredients: ingredients.split(',').map((i) => i.trim()),
      steps,
    });

    // Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Title */}
        <div className="md:grid md:grid-cols-4 md:gap-4">
          <label className="block font-medium mb-1 md:col-span-1">Recipe Title</label>
          <div className="md:col-span-3">
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <div className="md:grid md:grid-cols-4 md:gap-4">
          <label className="block font-medium mb-1 md:col-span-1">
            Ingredients (comma-separated)
          </label>
          <div className="md:col-span-3">
            <textarea
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="md:grid md:grid-cols-4 md:gap-4">
          <label className="block font-medium mb-1 md:col-span-1">
            Preparation Steps
          </label>
          <div className="md:col-span-3">
            <textarea
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
