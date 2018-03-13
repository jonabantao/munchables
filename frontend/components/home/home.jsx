import React from 'react';
import RecipeListContainer from '../recipe/recipe_list_container';

const Home = () => {
  return (
    <React.Fragment>
      <section className="hero-image">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <h1 className="hero-image__text">Let's Cook Something Tasty</h1>
      </section>
      <section className="main-container">
        <RecipeListContainer />
      </section>
    </React.Fragment>
  );
};

export default Home;