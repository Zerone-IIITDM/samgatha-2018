import React, { Component } from 'react';
import './Footer.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Footer extends Component {
	render() {
		return (
			<div>
				<div style={phantom} />
				<div className="footer">
					<div className="socialLinks">
						<div className="icons">
							<div className="icon1">
								<a href="https://www.instagram.com/samgatha/"><i className="fa socialIcons fa-instagram fa-2x" style={{color: "white" }}></i></a>
							</div>
							<div className="icon1">
								<a href="https://www.facebook.com/samgathaatiiitdm/"><i className="fa socialIcons fa-facebook fa-2x" style={{color: "white" }}></i></a>
							</div>
							<div className="icon1">
								<a href="https://twitter.com/samgatha"><i className="fa socialIcons fa-twitter fa-2x" style={{color: "white" }}></i></a>
							</div>
							<div className="icon1">
								<a href="https://www.youtube.com/user/SamgathaIIITDM"><i className="fa socialIcons fa-youtube fa-2x" style={{color: "white" }}></i></a>
							</div>
						</div>
					</div>
					<div className="copyright">
						<i className="fa copyrightIcon fa-copyright" style={{ color: "white" }}></i>
						<div className="copyrightText">WebOps, Samgatha</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

var phantom = {
	background:'rgb(34,41,49)',
  display: 'block',
  padding: '20px',
  width: '100%',
  height:'30px'
}