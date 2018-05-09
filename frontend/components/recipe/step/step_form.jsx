import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StepFormList from './step_form_list';

class StepForm extends Component {
  // Steps can possibly be out of order?
  static sortSteps(arr) {
    return Array.from(arr)
      .sort((step, nextStep) => step.order - nextStep.order);
  }

  static createNewStepLayout(nextOrder, recipeId) {
    return {
      title: '',
      body: '',
      order: nextOrder,
      recipe_id: recipeId,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      steps: [],
    };

    this.sortSteps = this.sortSteps.bind(this);
    this.createNewStepLayout = this.createNewStepLayout.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.displaySteps = this.displaySteps.bind(this);
  }

  // TODO: Refactor componentWillReceiveProps to another lifecycle
  componentWillReceiveProps(newProps) {
    let sorted = this.sortSteps(newProps.steps);
    this.setState({ steps: sorted });
  }

  handleAddStep(e) {
    e.preventDefault();

    const numOfSteps = this.state.steps;
    const recipeId = this.props.recipeId;
    // Default order if no steps created
    let nextOrder = 1;

    // If steps are present, add + 1 to order of last step.
    if (numOfSteps.length) {
      nextOrder = numOfSteps[numOfSteps.length - 1].order + 1;
    }

    this.props.createStep(this.createNewStepLayout(nextOrder, recipeId));
  }

  displaySteps() {
    if (this.state.steps.length) {
      let totalSteps = this.state.steps.map((step, idx) => (
        <StepFormList
          key={step.id}
          step={step}
          recipeId={this.props.recipeId}
          removeStep={this.props.removeStep}
          stepNum={idx + 1}
        />
      ));

      return (
        <ul className="step-container">
          {totalSteps}
        </ul>
      );
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
        {this.displaySteps()}
        <button
          className="step__add-step-button"
          onClick={this.handleAddStep}
        >
          Add Step
        </button>
      </React.Fragment>
    );
  }
}

export default StepForm;