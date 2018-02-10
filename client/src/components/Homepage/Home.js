import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './Home.css';

class Home extends Component{
	render(){
		return(
			<div className="mainContainer">
				<div className="headContainer" id="home-main">
					<div className="titleText">
						The Magic in Everything
					</div>
					<div className="lowerTitleText">
						9th-11th March
					</div>
				</div>
				<div className="aboutUs">
					<div className="leftSide">
						<div className="leftSideText">
							WEBSITE<br />STILL UNDER<br />CONSTRUCTION.<br/>
							More content coming soon.
						</div>
					</div>
					<div className="rightSide">
						<div className="rightSideHeaderText">
							About Us
						</div>
						<div className="rightSideContainerText">
							Samgatha is the inter college annual Technical and Cultural fest of Indian Institute of Information Technology, Design and Manufacturing(IIITDM) Kancheepuram which is annually held in the month of March. It is a 3 day event featuring a huge bunch of events including Workshops and Tech Talk. This fest has unique themes for every year, where it was "Save Women, Save India" for Samgatha 2014, "Swachh Bharat Abhiyaan" for Samgatha 2015, "Make in India" for Samgatha 2016, "Education for all" for Samgatha 2017 and it is going to be "Depression is curable" for Samgatha 2018.
						</div>
						<div className="stats">
							<div className="circle1">
								<img src={require("../icons/calendar.png")} style={{width:'100px',height:'100px'}} alt="stats" />
								<div className="statName">
									<CountTo to={40} speed={1500} />+ Events
								</div>
							</div>
							<div className="circle1">
								<img src={require("../icons/prizes.png")} style={{width:'100px',height:'100px'}} alt="stats" />
								<div className="statName">
									<CountTo to={3} speed={1000} /> Lakhs+ Prizes
								</div>
							</div>
							<div className="circle1">
								<img src={require("../icons/rock2.png")} style={{width:'107px',height:'105px'}} alt="stats" />
								<div className="statName" style={{marginTop:'7px'}}>
									Unlmited Fun!!
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="joinUs">
					<div className="joinText">
						Come join us on this<br />fantastical journey...
					</div>
					<div className="registerBtn">
						REGISTER
					</div>
				</div>
			</div>
		);
	}
}

export default Home;