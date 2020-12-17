import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  render() {
    const image = this.props.images[this.state.currentImageIndex];
    return (
      <div className="section">
        <div className="carousel container">
          <div className="main-row">
            <div className="left-arrow">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="column">
              <div className="image">
                <img src={image}/>
              </div>
              <div className="dots">
                <i className="fas fa-circle circ"></i>
                <i className="far fa-circle circ"></i>
                <i className="far fa-circle circ"></i>
                <i className="far fa-circle circ"></i>
                <i className="far fa-circle circ"></i>
              </div>
            </div>
            <div className="right-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
