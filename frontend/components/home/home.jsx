import React from 'react';
import RecipeListContainer from '../recipe/recipe_list_container';

const Home = () => {
  return (
    <React.Fragment>
      <section className="hero-image">

      </section>
      <section className="main-container">
        <RecipeListContainer />
      </section>
    </React.Fragment>
  );
};

export default Home;