import React, { useState } from "react";
import SugarCubeVisualizer from "./components/SugarCubeVisualizer";

function App() {
  const [sugarGrams, setSugarGrams] = useState("");
  const grams = parseFloat(sugarGrams) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 flex flex-col items-center justify-center text-gray-800 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Sugar Cube Visualizer</h1>
        <p className="mb-6 text-sm text-gray-500">1 sugar cube = ~4 grams</p>

        <input
          type="number"
          min="0"
          value={sugarGrams}
          onChange={(e) => setSugarGrams(e.target.value)}
          placeholder="Enter sugar in grams"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <p className="mt-4 font-medium">
          That’s about <span className="text-pink-500">{Math.round(grams / 4)}</span> sugar cube(s)
        </p>
      </div>

      <SugarCubeVisualizer grams={grams} />
    </div>
  );
}

export default App;