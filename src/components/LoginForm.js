import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      pw: ""
    };
  }

  handleSubmit(ev){
    ev.preventDefault();
  

  }

  handleUsername(ev){
    this.setState({
      username: ev.target.value
    })
  }

  handlePassword(ev){
    this.setState({
      pw: ev.target.value
    })
  }

  handleBadSubmit(ev){
    ev.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(this.state.username && this.state.pw) ? (this.handleSubmit.bind(this)) : this.handleBadSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername.bind(this)} />
          </label>
          <p>Username: {this.state.username}</p>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.pw} onChange={this.handlePassword.bind(this)} type="password" />
          </label>
          <p>Password: {this.state.pw}</p>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
