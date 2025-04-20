import React, { useState } from 'react';
import foodLibrary from '../data/foodLibrary.json';

const FoodSelector = ({ onAddFood }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <div className="food-selector">
      <h3>Select a Food/Drink</h3>
      <div className="categories">
        {Object.keys(foodLibrary).map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <div className="food-category">
          <h4>{activeCategory}</h4>
          <div className="food-icons">
            {foodLibrary[activeCategory].map((food) => (
              <div key={food.name} className="food-item">
                <button
                  className="food-icon-btn"
                  onClick={() => onAddFood(food)}
                  title={`${food.name} (${food.sugar}g sugar)`}
                >
                  <span className="food-icon">{food.icon}</span>
                </button>
                <p className="food-name">{food.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodSelector;