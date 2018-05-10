import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionErrors from './session_errors';

class sessionForm extends Component {
  static renderErrorContainer(errors) {
    return <SessionErrors errors={errors} />;
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      password_confirmation: '',
    };

    this.displayGuestButton = this.displayGuestButton.bind(this);
  }

  // TODO: Refactor Will Receive Props
  componentWillReceiveProps() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
    this.resetForm();
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.handleSession(this.state)
      .then(
        () => this.props.history.push('/'),
        this.resetForm(),
      );
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.loginGuest();
  }

  formUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      email: '',
      password_confirmation: '',
    });
  }

  emailInput() {
    if (this.props.formType === 'signup') {
      return (
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.formUpdate('email')}
          className="session__input"
        />
      );
    }

    return null;
  }

  confirmPasswordInput() {
    if (this.props.formType === 'signup') {
      return (
        <input
          type="password"
          placeholder="Confirm Password"
          value={this.state.password_confirmation}
          onChange={this.formUpdate('password_confirmation')}
          className="session__input"
        />
      );
    }

    return null;
  }

  redirectSessionText() {
    const currentPath = this.props.history.location.pathname;
    const login = currentPath === '/login';
    const signup = currentPath === '/signup';

    return this.props.formType === 'signup' ?
      (
        <p className="session__redirect-text">
          Already a member? &nbsp;
          <Link
            to="/login"
            replace={login}
            className="session__redirect-text session__redirect-text--underline"
          >
            Login!
          </Link>
        </p>
      ) : (
        <p className="session__redirect-text">
          Looking to sign up? &nbsp;
          <Link
            to="/signup"
            replace={signup}
            className="session__redirect-text session__redirect-text--underline"
          >
            Sign Up here!
          </Link>
        </p>
      );
  }

  displayGuestButton() {
    if (this.props.formType !== 'signup') {
      return (
        <button
          onClick={e => this.handleGuest(e)}
          className="session__button session__button--orange"
        >
          Guest User
        </button>
      );
    }

    return null;
  }

  render() {
    const submitValue = this.props.formType === 'signup' ? 'Sign Up' : 'Login';
    const { errors } = this.props;

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
            {errors.length ? this.constructor.renderErrorContainer(errors) : null}
            <input
              type="submit"
              value={submitValue}
              className="session__button session__button--red"
            />
            {this.redirectSessionText()}
            {this.displayGuestButton()}
          </form>
        </section>
      </main>
    );
  }
}

export default sessionForm;
