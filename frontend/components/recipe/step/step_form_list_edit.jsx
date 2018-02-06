import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepFormListEdit extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      title: '',
      body: '',
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  componentDidMount() {
    this.props.requestStep(this.props.stepId);
  }

  componentWillReceiveProps({ step }) {
    let updatedState = {
      title: step.title,
      body: step.body,
    };
    
    this.setState(updatedState);
  }

  handleUpdate() {
    let updateState = Object.assign({}, this.state, { id: this.props.stepId });

    this.props.updateStep(updateState)
      .then(
        () => this.props.history.push(`/recipes/${this.props.recipeId}/edit`)
      );
  }

  update(propType) {
    return e => this.setState({ [propType]: e.target.value });
  }

  render() {
    return (
      <section className="step-edit">
        <section className="step-edit__container">
          <label>Step Title:<br />
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="step-edit__texttitle"
            />
          </label>
          <label>Step Body:<br />
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
              className="step-edit__textbody"
            />
          </label>
          <nav className="step-edit__nav">
            <Link 
              to={`/recipes/${this.props.recipeId}/edit`}
              className="step-edit__back-button"
            >
              Go Back
            </Link>
            <button 
              onClick={this.handleUpdate}
              className="step-edit__update-button"
            >
              Update Step
            </button>
          </nav>
        </section>
      </section>
    );
  }
}

export default StepFormListEdit;