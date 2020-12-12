import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    const isOpen = this.state.isOpen;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    return (
      <div className="app-body" onClick={this.handleDrawerToggle}>
        <div>
          <i className="fas fa-bars"></i>
        </div>
        <AppDrawer handleToggle={this.handleDrawerToggle} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
