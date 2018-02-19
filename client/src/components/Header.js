import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
  render() {
      return (
        <header>
          <nav >
            <ul>
              <li><Link to="/events">Events</Link></li>
              <li><Link to='/workshops'>Workshops</Link></li>
              <li><Link to="/socialcause">Social Cause</Link></li>
              <li><Link to="/"><img src={require("./icons/samlogo.png")} alt="logo" /></Link></li>
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
