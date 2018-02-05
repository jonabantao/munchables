import * as APIUtil from '../util/recipe_util';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
export const RESET_RECIPE_ERRORS = "RESET_RECIPE_ERRORS";

const receiveAllRecipes = payload => ({
  type: RECEIVE_ALL_RECIPES,
  payload
});

const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload
});

export const requestAllRecipes = () => dispatch => (
  APIUtil.fetchRecipes()
    .then(allFetchedPayloads => dispatch(receiveAllRecipes(allFetchedPayloads)))
);

export const requestReceipe = id => dispatch => (
  APIUtil.fetchRecipe(id)
    .then(fetchedPayload => dispatch(receiveRecipe(fetchedPayload)))
);

export const createRecipe = recipe => dispatch => (
  APIUtil.createRecipe(recipe)
    .then(newRecipe => {
      dispatch(receiveRecipe(newRecipe));
      return newRecipe;
    })
);

export const updateRecipe = recipe => dispatch => (
  APIUtil.updateRecipe(recipe)
    .then(updatedRecipe => dispatch(receiveRecipe(updatedRecipe)))  
);