import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
    let appBodyClassName = 'app-body';
    const isOpen = this.state.isOpen;
    if (isOpen) {
      appBodyClassName = 'app-body open';
    }
    return (
      <div className={appBodyClassName} onClick={this.handleDrawerToggle}>
        { !isOpen ? <div><i className="fas fa-bars"></i></div> : <div></div>}
        <AppDrawer menuIsOpen={isOpen} handleToggle={this.handleDrawerToggle} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
