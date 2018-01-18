import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Homepage/Home';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Home} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
