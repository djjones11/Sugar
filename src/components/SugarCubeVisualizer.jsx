import React, { useState } from "react";
import { motion } from "framer-motion";

const SugarCubeVisualizer = () => {
  const [grams, setGrams] = useState(0);

  const cubes = Math.floor(grams / 4); // Assuming one sugar cube = 4 grams
  const remainder = grams % 4;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-white p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Sugar Cube Visualizer
      </h1>
      <p className="text-lg font-medium text-gray-600 mb-4">
        Enter sugar amount in grams:
      </p>
      <input
        type="number"
        value={grams}
        onChange={(e) => setGrams(parseFloat(e.target.value) || 0)}
        className="px-4 py-2 text-2xl font-medium rounded-lg shadow-md outline-none border border-teal-300 focus:ring-2 focus:ring-teal-500 transition duration-300"
        placeholder="e.g. 10"
      />

      <div className="pt-6 space-y-4 text-center">
        <p className="text-xl font-semibold text-gray-700">
          That's about <strong>{cubes}</strong> full sugar cube{cubes !== 1 && "s"}
          {remainder > 0 && ` and a partial cube (${remainder}g)`}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {Array.from({ length: cubes }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="w-12 h-12 bg-white border border-teal-300 rounded-lg shadow-xl"
            />
          ))}
          {remainder > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-12 h-12 bg-white border border-dashed border-teal-300 rounded-lg shadow-lg opacity-50"
              title={`${remainder}g sugar`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SugarCubeVisualizer; 
