import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      steps: [],
    };

    this.sortSteps = this.sortSteps.bind(this);
    this.createNewStepLayout = this.createNewStepLayout.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
  }

  componentDidMount() {
    this.props.requestAllSteps(this.props.recipeId);
  }

  componentWillReceiveProps(newProps) {
    let sorted = this.sortSteps(newProps.steps);
    this.setState({ steps: sorted });
  }

  // Steps can possibly be out of order
  sortSteps(arr) {
    let tempSteps = Array.from(arr);
    return tempSteps.sort((step, nextStep) => step.order - nextStep.order);
  }

  createNewStepLayout(nextOrder, recipeId) {
    return {
      title: '',
      body: '',
      order: nextOrder,
      recipe_id: recipeId,
    };
  }

  handleAddStep(e) {
    e.preventDefault();

    const nextOrder = this.props.steps.length + 1;
    const recipeId = this.props.recipeId;

    this.props.createStep(this.createNewStepLayout(nextOrder, recipeId));
  }

  displaySteps() {
    if (this.state.steps.length) {
      return this.state.steps.map(step => (
        <section key={step.id} className="step__form-list">
          <h4>
            <Link to={`/recipe/${this.props.recipeId}/steps/${step.id}`}
              className="step__form-step-title"
            >
              Step #{step.order}: {step.title ? step.title : "(Click to Edit)"}
            </Link>
          </h4>
          <div className="step__form-actions">
            <button className="step__form-action-button">Edit</button>
            <button className="step__form-action-button">Delete</button>
          </div>
        </section>
      ));
    } else {
      return null;
    }
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
        </button>;
      </React.Fragment>
    );
  }
}

export default StepForm;