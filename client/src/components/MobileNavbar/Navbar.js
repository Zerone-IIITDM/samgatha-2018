import React, { Component } from 'react';
import { bubble as Menu} from 'react-burger-menu';
import './Navbar.css';

class Navbar extends Component{
	render(){
		return(
			<Menu width={'250px'}>
				<div id="events" className="menu-item" href="/">HOME</div>
		      <div id="events" className="menu-item" href="/">EVENTS</div>
		      <div id="about" className="menu-item" href="/">WORKSHOPS</div>
		      <div id="contact" className="menu-item" href="/">SOCIAL CAUSE</div>
		      <div id="contact" className="menu-item" href="/">SPONSORS</div>
		      <div id="contact" className="menu-item" href="/">ABOUT US</div>
		      <div id="contact" className="menu-item" href="/">LOGIN/REGISTER</div>
		      <div id="faq" className="menu-item" href="/">FAQ</div>
		      <div id="brochure" className="menu-item" href="/">BROCHURE</div>
		    </Menu>
		);
	}
}

export default Navbar;