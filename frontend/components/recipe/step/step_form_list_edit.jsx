import React, { Component } from 'react';

class StepFormListEdit extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.requestStep(this.props.stepId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        
      </div>
    );
  }
}

export default StepFormListEdit;