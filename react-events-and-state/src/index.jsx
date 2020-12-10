import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <div>
        { isClicked
          ? <button>Thanks!</button>
          : <button onClick={this.handleClick}>Click Me!</button>
        }
      </div>
    );
  }
}

ReactDOM.render(<CustomButton />, document.querySelector('#root'));
