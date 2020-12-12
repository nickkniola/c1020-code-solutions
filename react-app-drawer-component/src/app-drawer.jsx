import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleToggle();
  }

  render() {
    return (
      <div className="menu">
        <h2>Menu</h2>
        <ul onClick={this.handleClick}>
          <li><a href="#" >About</a></li>
          <li><a href="#">Get Started</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </div>
    );
  }
}

export default AppDrawer;
