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

const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});

const resetRecipeErrors = () => ({
  type: RESET_RECIPE_ERRORS,
});

export const requestAllRecipes = () => dispatch => (
  APIUtil.fetchRecipes()
    .then(allFetchedPayloads => dispatch(receiveAllRecipes(allFetchedPayloads)),
          err => dispatch(receiveRecipeErrors(err.responseJSON)))
);

export const requestRecipe = id => dispatch => (
  APIUtil.fetchRecipe(id)
    .then(fetchedPayload => dispatch(receiveRecipe(fetchedPayload)))
);

export const createRecipe = recipe => dispatch => (
  APIUtil.createRecipe(recipe)
    .then(newRecipe => {
      dispatch(receiveRecipe(newRecipe));
      return newRecipe;
    },
    err => dispatch(receiveRecipeErrors(err.responseJSON))
  )
);

export const updateRecipe = recipe => dispatch => (
  APIUtil.updateRecipe(recipe)
    .then(updatedRecipe => dispatch(receiveRecipe(updatedRecipe)),
          err => dispatch(receiveRecipeErrors(err.responseJSON)))  
);