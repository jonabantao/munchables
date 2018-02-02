import React from 'react';

const RecipeList = (props) => {
  return (
    <nav className="recipe-list">
      <section className="recipe-list__heading">
        <i className="fas fa-utensils recipe-list__icon" />
        <h3 className="recipe-list__header-text">Recipes</h3>
      </section>
      <ul className="recipe-list__contents">
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/ipMeUor.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/7uQMDN2.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/ZNi7cee.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/DINvWzh.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/dIJgGKz.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
  
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/5Z7pxKd.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
  
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/fIPSAcy.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
  
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/3SmK4DK.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
  
        <li className="recipe-list__item">
          <section className="recipe-list__item-img-container">
            <img src="http://via.placeholder.com/325x250"
              className="recipe-list__item-placeholder"
              alt="recipe-item-img" />
            <img src="https://i.imgur.com/BDzrJyK.jpg"
              className="recipe-list__item-img"
              alt="recipe-item-img" />
          </section>
        </li>
  
      </ul>
    </nav>
  );
};

export default RecipeList;