import React, { Component } from 'react';
<<<<<<< HEAD:client/src/components/Mobile-Navbar/Navbar.js
import { bubble as Menu} from 'react-burger-menu';
=======
import { push as Menu } from 'react-burger-menu';
>>>>>>> 4eea8e8547ed38ac30df507761c2f2b3b416683d:client/src/components/MobileNavbar/Navbar.js
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
		    </Menu>
		);
	}
}

export default Navbar;