import * as APIUtil from '../util/step_util';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const DELETE_STEP = 'DELETE_STEP';
export const RECEIVE_STEP_ERRORS = 'RECEIVE_STEP_ERRORS';
export const RESET_STEP_ERRORS = 'RESET_STEP_ERRORS';

const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

const deleteStep = stepId => ({
  type: DELETE_STEP,
  stepId
});

const receiveStepErrors = errors => ({
  type: RECEIVE_STEP_ERRORS,
  errors
});

export const requestAllSteps = recipeId => dispatch => (
  APIUtil.fetchSteps(recipeId)
    .then(allRecipeSteps => dispatch(receiveSteps(allRecipeSteps)))
);

export const requestStep = stepId => dispatch => (
  APIUtil.fetchStep(stepId)
    .then(fetchedStep => dispatch(receiveStep(fetchedStep)))
);

export const createStep = step => dispatch => (
  APIUtil.createStep(step)
    .then(newStep => dispatch(receiveStep(newStep)))
);

export const updateStep = step => dispatch => (
  APIUtil.updateStep(step)
    .then(
      updatedStep => dispatch(receiveStep(updatedStep)),
      err => dispatch(receiveStepErrors(err))
    )
);

export const removeStep = stepId => dispatch => (
  APIUtil.deleteStep(stepId) 
    .then(() => dispatch(deleteStep(stepId)))
);