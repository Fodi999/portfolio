import React from "react";


const Recipes: React.FC = () => {
  const recipeData = [
    {
      id: 1,
      title: "Суши с лососем",
      image: "/DSCF4649.jpg",
      description: "Свежий лосось, рис, водоросли и соевый соус.",
    },
    {
      id: 2,
      title: "Ролл Калифорния",
      image: "/DSCF4649.jpg",
      description: "Крабовые палочки, авокадо, огурец, рис и икра.",
    },
    {
      id: 3,
      title: "Тунец Нигири",
      image: "/DSCF4649.jpg",
      description: "Нежный тунец на шарике риса с васаби.",
    },
  ];

  return (
    <div className="recipes-container">
      <h2 className="recipes-title">Рецепты</h2>
      <p className="recipes-description">
        Здесь вы найдёте лучшие рецепты от шефа!
      </p>

      <div className="recipe-feed">
        {recipeData.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;



