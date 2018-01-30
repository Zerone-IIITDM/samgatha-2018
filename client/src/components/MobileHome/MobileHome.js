import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './MobileHome.css';

class MobileHome extends Component{
	render(){
		return(
			<div className="mobilemainContainer">
				<div className="mobileheadContainer">
					<div className="mobiletitleText">
						The Magic in Everything
					</div>
					<div className="mobilelowerTitleText">
						9th-11th March
					</div>
				</div>
				<div className="mobileaboutUs">
					<div className="mobileleftSide">
						
					</div>
					<div className="mobilerightSide">
						<div className="mobilerightSideHeaderText">
							About Us
						</div>
						<div className="mobilerightSideContainerText">
							My name is Nipun bharti.
							My name is Nipun bharti.
							My name is Nipun bharti.
							My name is Nipun bharti.
							
						</div>
						<div className="mobilestats">
							<div className="mobilecircle1">
								<div className="mobilecircleStat">
								</div>
								<div className="mobilestatName">
									<CountTo to={22} speed={2000} />+ Events
								</div>
							</div>
							<div className="mobilecircle1">
								<div className="mobilecircleStat">
								</div>
								<div className="mobilestatName">
									<CountTo to={22} speed={2000} />+ Events
								</div>
							</div>
							<div className="mobilecircle1">
								<div className="mobilecircleStat">
								</div>
								<div className="mobilestatName">
									<CountTo to={22} speed={2000} />+ Events
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