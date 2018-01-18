import React, { Component } from 'react';
import './Footer.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<nav role='navigation' className="footerNav">
					<ul className="ul1">
						<li><i className="fa fa-instagram fa-2x" style={{ color: "white" }}> </i></li>
						<li><i className="fa fa-facebook fa-2x" style={{ color: "white" }}> </i></li>
						<li><i className="fa fa-twitter fa-2x" style={{ color: "white" }}> </i></li>
						<li><i className="fa fa-youtube fa-2x " style={{ color: "white" }}> </i></li>
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
						<li></li>
					</ul>
				</nav>
			</footer>
		);
	}
}


export default Footer;