import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav role='navigation'>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Workshops</a></li>
            <li id="heart-trigger" class="heart heart-trigger"><span class="fa fa-heart"></span></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Social Cause</a></li>
            <li><a href="#">Login/Register</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;