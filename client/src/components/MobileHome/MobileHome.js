import React, { Component } from 'react';
import './MobileHome.css';

class MobileHome extends Component{
	render(){
		return(
			<div className="mobilemainContainer">
				<div className="mobileheadContainer">
					<div className="mobiletitleText">
						Welcome To<br />A <span style={{color:'#56E39F'}}>Magical</span> World!
					</div>
				</div>
				<div className="mobileaboutUs">
					<div className="mobileleftSide">
						<div className="mobileleftSideText">
							ILLUSTRATION<br />TO BE<br />PLACE HERE
						</div>
					</div>
					<div className="mobilerightSide">
						<div className="mobilerightSideHeaderText">
							About Us
						</div>
						<div className="mobilerightSideContainerText">
							My name is Nipun bharti.
						</div>
						<div className="mobilestats">
							<div className="mobilecircle1">
								<div className="mobilecircleStat">
								</div>
								<div className="mobilestatName">
									20+ Events
								</div>
							</div>
							<div className="mobilecircle1">
								<div className="mobilecircleStat">
								</div>
								<div className="mobilestatName">
									20+ Events
								</div>
							</div>
							<div className="mobilecircle1">
								<div className="mobilecircleStat">
								</div>
								<div className="mobilestatName">
									20+ Events
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mobilejoinUs">
					<div className="mobilejoinText">
						Come join us on this<br />fantastical journey...
					</div>
					<div className="mobileregisterBtn">
						REGISTER
					</div>
				</div>
			</div>
		);
	}
}

export default MobileHome;