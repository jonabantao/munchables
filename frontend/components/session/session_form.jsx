import React, { Component } from 'react';

class sessionForm extends Component {
  constructor(props) {
    super(props);
    
    let formBody = {
      username: '',
      password: '',
    };

    if (this.props.formType === "signup") {
      formBody.email = '';
      formBody.password_confirmation = '';
    }
    
    this.state = formBody;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('test');
    this.props.handleSession(this.state);
  }

  formUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  emailInput() {
    if (this.props.formType === "signup") {
      return <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.formUpdate('email')}
                className="session__input"
              />;
    }
  }
  
  confirmPasswordInput() {
    if (this.props.formType === "signup") {
      return <input
              type="text"
              placeholder="Confirm Password"
              value={this.state.password_confirmation}
              onChange={this.formUpdate('password_confirmation')}
              className="session__input"
            />;
    }
  }

  render() {
    const submitValue = this.props.formType === "signup" ? "Sign Up" : "Login";
    const emailInput = () => {

    };
    
    return (
      <section className="session">
        <form onSubmit={e => this.handleSubmit(e)} className="session__form">
          <input 
            type="text"
            placeholder="Username" 
            value={this.state.username}
            onChange={this.formUpdate('username')}
            className="session__input"
          />
          {this.emailInput()}
          <input 
            type="password"
            placeholder="Password" 
            value={this.state.password}
            onChange={this.formUpdate('password')}
            className="session__input"
          />
          {this.confirmPasswordInput()}
          <input type="submit" value={submitValue} />
        </form>
      </section>
    );
  }
}

export default sessionForm;