import { connect } from 'react-redux';
import StepForm from './step_form';
import {
  requestAllSteps,
  createStep,
  removeStep,
} from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  state,
  steps: Object.values(ownProps.steps),
  recipeId: ownProps.recipeId,
});

const mapDispatchToProps = dispatch => ({
  requestAllSteps: recipeId => dispatch(requestAllSteps(recipeId)),
  createStep: step => dispatch(createStep(step)),
  removeStep: stepId => dispatch(removeStep(stepId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepForm);
