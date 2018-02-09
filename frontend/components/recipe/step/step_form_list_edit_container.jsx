import { connect } from 'react-redux';
import {
  updateStep,
  requestStep
} from '../../../actions/step_actions';
import StepFormListEdit from './step_form_list_edit';

const mapStateToProps = (state, ownProps) => {
  return {
    stepId: ownProps.match.params.stepId,
    recipeId: ownProps.match.params.recipeId,
    step: state.entities.steps[ownProps.match.params.stepId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateStep: step => dispatch(updateStep(step)),
  requestStep: stepId => dispatch(requestStep(stepId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepFormListEdit);