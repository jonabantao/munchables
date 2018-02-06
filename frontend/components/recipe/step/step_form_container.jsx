import { connect } from 'react-redux';
import StepForm from './step_form';
import {
  requestAllSteps,
  createStep,
  updateStep,
  requestStep,
  removeStep,
} from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  state,
  steps: Object.values(state.entities.steps),
  recipeId: ownProps.recipeId
});

const mapDispatchToProps = dispatch => ({
  requestAllSteps: recipeId => dispatch(requestAllSteps(recipeId)),
  createStep: step => dispatch(createStep(step)),
  updateStep: step => dispatch(updateStep(step)),
  requestStep: stepId => dispatch(requestStep(stepId)),
  removeStep: stepId => dispatch(requestStep(stepId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepForm);