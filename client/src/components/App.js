import React, { Component } from 'react';
import Header from './Header';
import Home from './Homepage/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Home />
      </div>
    );
  }
}

export default App;
