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
    sugarCubes.push('full'); // Full cube
  }

  // Add fractional cube (if any)
  if (fractionalCube > 0) {
    if (fractionalCube <= 0.25) sugarCubes.push('fractional-25');
    else if (fractionalCube <= 0.5) sugarCubes.push('fractional-50');
    else if (fractionalCube <= 0.75) sugarCubes.push('fractional-75');
    else sugarCubes.push('full');
  }

  return (
    <div className="visualization-area">
      {/* Render sugar cubes */}
      {sugarCubes.map((cube, index) => (
        <div
          key={index}
          className={`sugar-cube ${cube !== 'full' ? cube : ''}`} // Add fractional class if not full
          style={{
            width: '50px', // Fixed width for all cubes
            height: '50px', // Fixed height for all cubes
          }}
        />
      ))}
    </div>
  );
};

export default SugarCubeVisualizer;
