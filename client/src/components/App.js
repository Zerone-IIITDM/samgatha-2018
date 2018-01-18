import React, { Component } from 'react';
import Header from './Header';
import Home from './Homepage/Home';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
