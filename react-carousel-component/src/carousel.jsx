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
                {this.props.images.map((image, index) => {
                  if (this.state.currentImageIndex === index) {
                    return <i key={index} className={closedCircle} onClick={() => this.handleClick(index)}></i>;
                  } else {
                    return <i key={index} className={openCircle} onClick={() => this.handleClick(index)}></i>;
                  }
                })}
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
