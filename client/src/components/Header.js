import React, { Component } from 'react';
import Navbar from './MobileNavbar/Navbar';
import './Header.css';

class Header extends Component {
  render() {
      return (
        <header>
          <nav role='navigation'>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="#">Workshops</a></li>
              <li><a href="#">Social Cause</a></li>
              <li id="heart-trigger" className="heart heart-trigger"><span className="fa fa-heart"></span></li>
              <li><a href="#">Sponsors</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="/auth/google">Login/Register</a></li>
            </ul>
          </nav>
        </header>
      );
  }
}

export default Header;