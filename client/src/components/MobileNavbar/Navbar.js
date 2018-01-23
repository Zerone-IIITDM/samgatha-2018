import React, { Component } from 'react';
import { bubble as Menu} from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
	render(){
		return(
			<Menu width={'250px'} isOpen={false} >
				<Link to='/' style={styles.links}><div id="events" className="menu-item" href="/">HOME</div></Link>
		      <Link to='/events' style={styles.links}><div id="events" className="menu-item" href="/">EVENTS</div></Link>
		      <Link to='/workshops' style={styles.links}><div id="about" className="menu-item" href="/">WORKSHOPS</div></Link>
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

const styles = {
	links:{
		textDecoration:'none',
		color:'#b8b7ad'
	},
};

export default Navbar;