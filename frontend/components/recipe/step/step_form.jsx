import React, { Component } from 'react';

class StepForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      steps: [],
    };

    this.sortSteps = this.sortSteps.bind(this);
    this.createNewStepLayout = this.createNewStepLayout.bind(this);
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


  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        
        <button
          className="recipe-form__add-step-button"
          onClick={this.handleAddStep}
        >
          Add Step
        </button>;
      </React.Fragment>
    );
  }
}

export default StepForm;