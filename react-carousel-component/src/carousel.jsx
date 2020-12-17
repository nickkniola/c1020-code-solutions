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
      <div className="carousel container">
        <div className="row">
          <div className="left-arrow"></div>
          <div className="image">
            <img src={image}/>
          </div>
          <div className="rightarrow"></div>
        </div>
        <div className="row">
          <div className="dots"></div>
        </div>
      </div>
    );
  }
}
