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
    let background = '';
    let switchText = '';
    if (switchOn) {
      switchClassName = 'switch';
      circleClassName = 'circle';
      background = 'background';
      switchText = 'ON';
    } else {
      switchClassName = 'switch off';
      circleClassName = 'circle off';
      background = 'background off';
      switchText = 'OFF';
    }
    return (
      <div className={background}>
        <div className={switchClassName} onClick={this.toggleSwitch}>
          <div className={circleClassName}></div>
        </div>
        <p>{switchText}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
