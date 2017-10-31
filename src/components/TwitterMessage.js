import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      userIn: ""
    };
  }

  handleInputChange(ev){
    const newState = ev.target.value
    if (newState.length <= this.props.maxChars){
      this.setState({
        userIn: newState
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.userIn} onChange={this.handleInputChange.bind(this)} />
        <p>Characters Remaining: {this.props.maxChars - this.state.userIn.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
