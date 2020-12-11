import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
let intervalID = null;

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      time: 0
    };
    this.playToggler = this.playToggler.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  playToggler() {
    const play = !this.state.play;
    this.setState({
      play: play
    });
    if (play) {
      intervalID = setInterval(this.incrementTime, 1000);
    } else {
      clearInterval(intervalID);
    }
  }

  incrementTime() {
    const time = this.state.time;
    this.setState({
      time: time + 1
    });
  }

  resetTimer() {
    const play = this.state.play;
    if (!play) {
      this.setState({
        time: 0
      });
    }
  }

  render() {
    const time = this.state.time;
    const play = this.state.play;
    return (
      <div>
        <div className="watch-face" onClick={this.resetTimer}>
          <div className="time">{time}</div>
        </div>
        <div className="icon-container" onClick={this.playToggler}>
          {play ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<StopWatch />, document.querySelector('#root'));
