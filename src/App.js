import React, { useState } from 'react';
import SugarCubeVisualizer from './components/SugarCubeVisualizer';

const App = () => {
  const [grams, setGrams] = useState(0);

  const handleInputChange = (event) => {
    setGrams(event.target.value); // Update grams with input value
  };

  return (
    <div className="container mx-auto p-4">
      <header className="header">
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-4">
          Sugar Cube Visualizer
        </h1>
        <p className="text-center text-lg text-gray-600">
          Discover how much sugar is in your food, one cube at a time.
        </p>
      </header>

      {/* Heading only once here */}
      <h1 className="text-4xl font-semibold text-center text-green-600 mb-6">
        How many sugar cubes are in my food?
      </h1>

      {/* User Input Section */}
      <div className="text-center mb-6">
        <label
          htmlFor="sugar-input"          className="block text-xl font-medium text-gray-700 mb-2"
        >
          Enter sugar in grams:
        </label>
        <input
          id="sugar-input"
          type="number"
          value={grams}
          onChange={handleInputChange}
          placeholder="Enter grams of sugar"
          className="border border-gray-300 rounded-full p-4 w-72 text-center shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-300 placeholder-gray-400"
        />
      </div>

      {/* Render the SugarCubeVisualizer with the grams value passed */}
      {grams > 0 && <SugarCubeVisualizer grams={grams} />}

      <footer className="footer">
        <p className="text-center text-sm text-gray-500">
          © 2025 Sugar Cube Visualizer. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
