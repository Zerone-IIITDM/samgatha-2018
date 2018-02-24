import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SignOut from './SignOut/SignOut';

const Header = ({ authUser }) => {
  if(authUser) {
    return(<HeaderAuth />);
  } else {
    return(<HeaderNonAuth />);
  }
}

const HeaderAuth = () => {
  return(
    <header>
        <nav >
          <ul>
            <li><Link to="/events">Events</Link></li>
            <li><Link to='/workshops'>Workshops</Link></li>
            <li><Link to="/socialcause">Social Cause</Link></li>
            <li><Link to="/"><img src={require("./icons/samlogo.png")} alt="logo" /></Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><SignOut/></li>
          </ul>
        </nav>
  </header>
  );
}

const HeaderNonAuth = () => {
  return(
    <header>
    <nav >
      <ul>
        <li><Link to="/events">Events</Link></li>
        <li><Link to='/workshops'>Workshops</Link></li>
        <li><Link to="/socialcause">Social Cause</Link></li>
        <li><Link to="/"><img src={require("./icons/samlogo.png")} alt="logo" /></Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
</header>
  );
}

export default Header;

