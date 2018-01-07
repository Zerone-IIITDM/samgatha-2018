import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
              <div className="header"> 
                <img id="logo" src="http://www.icon2s.com/wp-content/uploads/2013/07/black-white-metro-github-icon.png" alt="Site Logo"/>
                <ul>
                  <li><a id="active-page" href="#">Home</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <form>
                  <input type="text" autoFocus="autofocus" placeholder="Username"/>
                  <input type="password" placeholder="Password"/>
                  <input type="submit" name="login" value="Login"/>
                </form>
              </div>
        );
    }
}

export default Header;