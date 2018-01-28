import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<nav role='navigation' className="footerNav">
					<ul className="ul1">
						<li className="insta"><i className="fa fa-instagram fa-2x" style={{ marginTop:'8px',color: "white" }}></i></li>
						<li className="insta"><i className="fa fa-facebook fa-2x" style={{ marginTop:'8px',color: "white" }}> </i></li>
						<li className="insta"><i className="fa fa-twitter fa-2x" style={{ marginTop:'8px',color: "white" }}> </i></li>
						<li className="insta"><i className="fa fa-youtube fa-2x " style={{ marginTop:'8px',color: "white" }}> </i></li>
					</ul>
				</nav>
				<nav role='navigation' className="footerNav">
					<ul className="ul2">
						<li>
							<div className="text1">
								FAQs
							</div>
						</li>
						<li>
							<div className="text1">
								Brochure
							</div>
						</li>
						<li>
							<div className="text1">
								<i className="fa fa-copyright" style={{ color: "white" }}> </i>
								WebOps,Samgatha
							</div>
						</li>
					</ul>
				</nav>
			</footer>
		);
	}
}


export default Footer;