import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      timeoutID: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (index > 4) {
      index = 0;
    } else if (index < 0) {
      index = 4;
    }
    this.setState({
      currentImageIndex: index
    });
  }

  componentDidMount() {
    setInterval(() => this.handleClick(this.state.currentImageIndex + 1), 3000);
  }

  render() {
    const index = this.state.currentImageIndex;
    const image = this.props.images[this.state.currentImageIndex];

    const openCircle = 'far fa-circle circ';
    const closedCircle = 'fas fa-circle circ';
    let dotZero = openCircle;
    let dotOne = openCircle;
    let dotTwo = openCircle;
    let dotThree = openCircle;
    let dotFour = openCircle;

    if (index === 0) {
      dotZero = closedCircle;
    } else if (index === 1) {
      dotOne = closedCircle;
    } else if (index === 2) {
      dotTwo = closedCircle;
    } else if (index === 3) {
      dotThree = closedCircle;
    } else if (index === 4) {
      dotFour = closedCircle;
    }

    return (
      <div className="section">
        <div className="carousel container">
          <div className="main-row">
            <div className="left-arrow">
              <i className="fas fa-chevron-left" onClick={() => this.handleClick(index - 1)}></i>
            </div>
            <div className="column">
              <div className="image">
                <img src={image}/>
              </div>
              <div className="dots">
                <i className={dotZero} onClick={() => this.handleClick(0)}></i>
                <i className={dotOne} onClick={() => this.handleClick(1)}></i>
                <i className={dotTwo} onClick={() => this.handleClick(2)}></i>
                <i className={dotThree} onClick={() => this.handleClick(3)}></i>
                <i className={dotFour} onClick={() => this.handleClick(4)}></i>
              </div>
            </div>
            <div className="right-arrow">
              <i className="fas fa-chevron-right" onClick={() => this.handleClick(index + 1)}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
