import * as APIUtil from '../util/step_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const DELETE_STEP = 'DELETE_STEP';
export const RECEIVE_STEP_ERRORS = 'RECEIVE_STEP_ERRORS';
export const RESET_STEP_ERRORS = 'RESET_STEP_ERRORS';

const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

const receiveSteps = () => {

};