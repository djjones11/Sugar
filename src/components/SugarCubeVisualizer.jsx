import React from "react";
import { motion } from "framer-motion";

const SugarCubeVisualizer = ({ grams }) => {
  const cubes = Math.round(grams / 4);

  return (
    <div className="flex flex-wrap gap-3 justify-center p-6 max-w-md">
      {[...Array(cubes)].map((_, i) => (
        <motion.div
          key={i}
          className="w-8 h-8 bg-white border border-gray-300 rounded-lg shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04 }}
        />
      ))}
    </div>
  );
};

export default SugarCubeVisualizer;