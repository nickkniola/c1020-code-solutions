import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword() {
    this.setState({
      password: this.state.password
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="password">Password</label>
          <br></br>
          <input type="password" name="password" onChange={this.handlePassword}></input>
        </form>
        <p>A password is required</p>
      </div>
    );
  }
}

export default ValidatedInput;
