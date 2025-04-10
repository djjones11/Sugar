import React from 'react';

const SugarCubeVisualizer = ({ grams }) => {
  // Calculate the number of whole cubes
  const wholeCubes = Math.floor(grams / 4);
  
  // Calculate fractional cube
  const fractionalCube = (grams % 4) / 4;

  // Create an array of sugar cubes to render
  const sugarCubes = [];

  // Add whole cubes
  for (let i = 0; i < wholeCubes; i++) {
    sugarCubes.push(1); // Full cube
  }

  // Add fractional cube (if any)
  if (fractionalCube > 0) {
    sugarCubes.push(fractionalCube); // Partial cube
  }

  return (
    <div className="flex justify-center items-center">
      {/* Render sugar cubes */}
      {sugarCubes.map((cube, index) => (
        <div
          key={index}
          className="sugar-cube"
          style={{
            width: cube === 1 ? '50px' : `${50 * cube}px`, // Adjust size for fractional cubes
            height: '50px',
            backgroundColor: cube === 1 ? 'green' : 'orange',
            margin: '5px',
            borderRadius: '5px',
          }}
        />
      ))}
    </div>
  );
};

export default SugarCubeVisualizer;
