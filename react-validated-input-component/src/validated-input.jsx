import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const password = this.state.password;
    let error = '';
    let icon = '';
    if (!password) {
      error = 'A password is required.';
      icon = 'fas fa-times';
    } else if (password.length < 8) {
      error = 'Your password is too short.';
      icon = 'fas fa-times';
    } else {
      error = '';
      icon = 'fas fa-check';
    }

    return (
      <div>
        <form>
          <label htmlFor="password">Password</label>
          <br></br>
          <input type="password" name="password" value={this.state.password} onChange={this.handlePassword}></input>
          <i className={icon}></i>
        </form>
        <p>{error}</p>
      </div>
    );
  }
}

export default ValidatedInput;
