import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0
    };
    this.incrementClick = this.incrementClick.bind(this);
  }

  incrementClick() {
    const clicks = this.state.numOfClicks + 1;
    this.setState({
      numOfClicks: clicks
    });
  }

  render() {
    let className = '';
    const numClicks = this.state.numOfClicks;
    if (numClicks > 17) {
      className = 'eighteen black';
    } else if (numClicks > 14) {
      className = 'fifteen black';
    } else if (numClicks > 11) {
      className = 'twelve black';
    } else if (numClicks > 8) {
      className = 'nine';
    } else if (numClicks > 5) {
      className = 'six';
    } else if (numClicks > 2) {
      className = 'three';
    }
    return (
      <div>
        <button className={className} onClick={this.incrementClick}>Hot Button</button>
      </div>
    );
  }
}

export default HotButton;
