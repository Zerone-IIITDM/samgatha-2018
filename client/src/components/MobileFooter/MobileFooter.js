import React, { Component } from 'react';
import '../font-awesome-4.7.0/css/font-awesome.min.css';
import './MobileFooter.css';

class MobileFooter extends Component{
	render(){
		return(
			<div className="mobileFooterContainer">
				<div className="mobileFooterNav">
					<ul className="mobileUl1">
						<li><i className="fa mobileSocialIcons fa-instagram fa-2x" style={{ color: "white" }}> </i></li>
						<li><i className="fa mobileSocialIcons fa-facebook fa-2x" style={{ color: "white" }}> </i></li>
						<li><i className="fa mobileSocialIcons fa-twitter fa-2x" style={{ color: "white" }}> </i></li>
						<li><i className="fa mobileSocialIcons fa-youtube fa-2x " style={{ color: "white" }}> </i></li>
					</ul>
				</div>
				<div className="mobileWebOps">
					WebOps, Samgatha
				</div>
			</div>
		);
	}
}

export default MobileFooter;