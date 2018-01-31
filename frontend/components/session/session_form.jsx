import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    this.props.handleSession(this.state)
      .then(() => this.props.history.push('/'));
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
        type="password"
        placeholder="Confirm Password"
        value={this.state.password_confirmation}
        onChange={this.formUpdate('password_confirmation')}
        className="session__input"
      />;
    }
  }

  redirectSessionText() {
    return this.props.formType === "signup" ?
      (<p className="session__redirect-text">
        Already a member? &nbsp;
        <Link to="/login" className="session__redirect-text">Login!</Link>
      </p>) :
      (<p className="session__redirect-text">
        Looking to signup? &nbsp;
        <Link to="/signup" className="session__redirect-text">Signup here!
      </Link></p>);
  }

  render() {
    const submitValue = this.props.formType === "signup" ? "Sign Up" : "Login";

    return (
      <main className="session">
        <section className="session__container">
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
            <input type="submit" value={submitValue} className="session__submit" />
            {this.redirectSessionText()}
          </form>

        </section>
      </main>
    );
  }
}

export default sessionForm;