import { connect } from 'react-redux';
import StepForm from './step_form';
import {
  requestAllSteps
} from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  state,
  steps: Object.values(state.entities.steps),
  recipeId: ownProps.recipeId
});

const mapDispatchToProps = dispatch => ({
  requestAllSteps: recipeId => dispatch(requestAllSteps(recipeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepForm);