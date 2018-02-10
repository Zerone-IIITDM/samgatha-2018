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
						<div className="mobileleftSideText">
							WEBSITE<br />STILL UNDER<br />CONSTRUCTION.<br/>
							More content coming soon.
						</div>
					</div>
					<div className="mobilerightSide">
						<div className="mobilerightSideHeaderText">
							About Us
						</div>
						<div className="mobilerightSideContainerText">
							Samgatha is the inter college annual Technical and Cultural fest of Indian Institute of Information Technology, Design and Manufacturing(IIITDM) Kancheepuram which is annually held in the month of March. It is a 3 day event featuring a huge bunch of events including Workshops and Tech Talk. This fest has unique themes for every year, where it was "Save Women, Save India" for Samgatha 2014, "Swachh Bharat Abhiyaan" for Samgatha 2015, "Make in India" for Samgatha 2016, "Education for all" for Samgatha 2017 and it is going to be "Depression is curable" for Samgatha 2018.	
						</div>
						<div className="mobilestats">
							<div className="mobilecircle1">
								<img src={require("../icons/calendar.png")} style={{width:'50px',height:'50px'}} className="mobilecircleStat" alt="stats" />
								<div className="mobilestatName">
									<CountTo to={40} speed={1500} />+ Events
								</div>
							</div>
							<div className="mobilecircle1">
								<img src={require("../icons/prizes.png")} style={{width:'50px',height:'50px'}} className="mobilecircleStat" alt="stats" />						alt="stats" 		
								<div className="mobilestatName">
									<CountTo to={3} speed={1000} /> Lakhs+ Prizes
								</div>
							</div>
							<div className="mobilecircle1">
								<img src={require("../icons/rock2.png")} style={{width:'50px',height:'50px'}} className="mobilecircleStat" alt="stats" />
								<div className="mobilestatName">
									Unlimited Fun!
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