import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import NavBarContainer from './navbar/navbar_container';
import HomeComponent from './home/home';
import SessionFormContainer from './session/session_container';
import RecipeFormContainer from './recipe/recipe_form_container';
import RecipeItemDetailContainer from './recipe/recipe_item_detail_container';
import NotFoundComponent from './not_found';
import Footer from './footer/footer';

const App = () => (
  <React.Fragment>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/recipes/new" component={RecipeFormContainer} />
      <Route path="/recipes/:recipeId" component={RecipeItemDetailContainer} />
      <Route path="/recipes/:recipeId/edit" component={RecipeFormContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;