import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './MobileNavbar/Navbar';
import './Header.css';


class Header extends Component {
  render() {
      return (
        <header>
          <nav role='navigation'>
            <ul>
              <li><Link to="/events">Events</Link></li>
              <li><Link to='/workshops'>Workshops</Link></li>
              <li><Link to="/socialcause">Social Cause</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><a href="/auth/google">Login/Register</a></li>
            </ul>
          </nav>
        </header>
      );
  }
}

export default Header;
