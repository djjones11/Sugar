import React, { useState } from 'react';
import SugarCubeVisualizer from './components/SugarCubeVisualizer';

const App = () => {
  const [grams, setGrams] = useState(0);

  const handleInputChange = (event) => {
    let value = event.target.value;

    // Remove leading zeros
    value = value.replace(/^0+/, '');

    // Cap the value at 100
    value = Math.min(value || 0, 100); // Default to 0 if the input is empty

    setGrams(value);
  };

  // Calculate the number of sugar cubes (assuming 1 cube = 4 grams)
  const sugarCubes = grams / 4;

  // Convert decimal part to fractions
  const formatSugarCubes = (value) => {
    const whole = Math.floor(value);
    const decimal = value - whole;

    let fraction = '';
    if (decimal >= 0.75) {
      fraction = 'three quarters';
    } else if (decimal >= 0.5) {
      fraction = 'half';
    } else if (decimal >= 0.25) {
      fraction = 'a quarter';
    }

    return `${whole > 0 ? whole : ''}${fraction ? ` and ${fraction}` : ''}`.trim();
  };

  const formattedSugarCubes = formatSugarCubes(sugarCubes);

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary fw-bold">Sugar Cube Visualiser</h1>
        <p className="lead text-muted">
          Discover how much sugar is in your food, one cube at a time.
        </p>
      </header>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Input Section */}
          <div className="text-center mb-4">
            <label htmlFor="sugar-input" className="form-label fs-5 fw-semibold text-secondary">
              Enter sugar in grams (max 100g):
            </label>
            <input
              id="sugar-input"
              type="number"
              value={grams || ''}
              onChange={handleInputChange}
              placeholder="0"
              className="form-control text-center shadow-sm"
            />
          </div>
        </div>
      </div>

      {grams > 0 && (
        <div className="text-center mt-4">
          <p className="fs-4 text-secondary">
            That's {formattedSugarCubes} sugar cube{`${sugarCubes > 1 ? 's' : ''}`}!
          </p>
          <SugarCubeVisualizer grams={grams} />
        </div>
      )}
    </div>
  );
};

export default App;
