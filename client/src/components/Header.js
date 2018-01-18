import React, { Component } from 'react';
import Navbar from './Mobile-Navbar/Navbar';
import './Header.css';

class Header extends Component {
  constructor(){
    super();
    this.state = {width: window.innerWidth };
  }
  componentWillMount(){
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount(){
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 545;
    if(isMobile){
      return(
        <Navbar />
      );
    }
    else{
      return (
        <header>
          <nav role='navigation'>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="#">Workshops</a></li>
              <li id="heart-trigger" className="heart heart-trigger"><span className="fa fa-heart"></span></li>
              <li><a href="#">Sponsors</a></li>
              <li><a href="#">Social Cause</a></li>
              <li><a href="/auth/google">Login/Register</a></li>
            </ul>
          </nav>
        </header>
      );
    }
  }
}

export default Header;