import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../recipe_actions';
import * as ApiUtil from '../../util/recipe_util';

import { newRecipe } from '../../test_util/recipe_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('simple action creators', () => {
  test('receiveRecipe should create an action to receive a single recipe', () => {
    expect(actions.receiveRecipe(newRecipe)).toEqual({
      type: actions.RECEIVE_RECIPE,
      payload: newRecipe,
    });
  });
});

describe('async action creators', () => {
  test('fetchRecipe creates RECIPE_RECIPE after fetching Recipe', () => {
    const store = mockStore({ recipe: newRecipe });
    const expectedActions = [
      { type: actions.START_LOADING_RECIPES },
      { type: actions.RECEIVE_RECIPE, payload: newRecipe },
    ];

    ApiUtil.fetchRecipe = jest.fn(() => Promise.resolve(newRecipe));

    return store.dispatch(actions.requestRecipe()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
