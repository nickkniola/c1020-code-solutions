import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    const switchOn = this.state.switchOn;
    this.setState({
      switchOn: !switchOn
    });
  }

  render() {
    const switchOn = this.state.switchOn;
    let switchClassName = '';
    let circleClassName = '';
    if (switchOn) {
      switchClassName = 'switch';
      circleClassName = 'circle';
    } else {
      switchClassName = 'switch off';
      circleClassName = 'circle off';
    }
    return (
      <div className={switchClassName} onClick={this.toggleSwitch}>
        <div className={circleClassName}></div>
      </div>
    );
  }
}

export default ToggleSwitch;
