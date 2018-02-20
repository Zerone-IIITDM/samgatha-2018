import React, { Component } from 'react';
// import CountTo from 'react-count-to';
import Carousel from '../Carousel';
import Iframe from 'react-iframe';
import './Home.css';

class Home extends Component{
	render(){
		return(
			<div className="mainContainer">
				<div className="headContainer" id="home-main">
					<div className="SamgathaText">SAMGATHA</div>
					<img className="mainImage" src={require("../icons/MAGICSTICK1.png")} style={{width:'100%',height:'85%'}} alt="magic" />
					<div className="pulse"></div>
					<div className="titleText">
						The Magic in Everything
					</div>
					<div className="lowerTitleText">
						9th-11th March
					</div>
				</div>
				<div className="aboutUs">
					<div className="leftSide">
						<img src={require("../icons/magic.png")} style={{marginLeft:'6%'}} alt="magic" />
					</div>
					<div className="rightSide">
						<div className="rightSideHeaderText">
							About Us
						</div>
						<div className="rightSideContainerText">
							Samgatha is the inter college annual Technical and Cultural fest of Indian Institute of Information Technology, Design and Manufacturing(IIITDM) Kancheepuram which is annually held in the month of March. It is a 3 day event featuring a huge bunch of events including Workshops and Tech Talk. This fest has unique themes for every year, where it was "Save Women, Save India" for Samgatha 2014, "Swachh Bharat Abhiyaan" for Samgatha 2015, "Make in India" for Samgatha 2016, "Education for all" for Samgatha 2017 and it is going to be "Depression is curable" for Samgatha 2018.
						</div>
						<div className="collegeStuff">
							<div className="collegeMotto"><span id="blue">Design. </span><span id="green">Create. </span><span id="grey">Innovate.</span></div>
							<img src={require("../icons/iiitdm.png")} className="iiitLogo" alt="stats" />
						</div>
					</div>
				</div>
				<div className="joinUs">
					<div className="past">Glimpse of past years:</div>
					<div className="carousCont">
						<Carousel autoPlayInterval={2000} className="carous">
						    <div>
						    	<img src={require("../icons/2.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
						    </div>
							<div>
								<img src={require("../icons/3.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/4.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/5.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/6.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/7.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/8.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/9.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
							<div>
								<img src={require("../icons/10.JPG")} style={{width:"100%",height:'100%'}} alt="stats" />
							</div>
						</Carousel>
					</div>
					{/*<div className="joinText">
						Come join us on this<br />fantastical journey...
					</div>
					<div className="registerBtn">
						REGISTER
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
						</div>*/}
				<div className="regCont">
					<div className="registerBtn">
						REGISTER
					</div>
					<img src={require("../icons/register_last.png")} alt="stats" style={{width:'100%',height:'100%'}} />
				</div>	
				</div>
				<div className="mapToReach">
					<div className="reachText">Where does the mystery unfold?</div>
					<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0585002451544!2d80.13530111482063!3d12.839496290942689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sIIITDM+Kancheepuram!5e0!3m2!1sen!2sin!4v1519076005368"
					        width="80%"
					        height="400px"
					        id="myId"
					        className="map"
					        display="initial"
					        position="relative"
					        allowFullScreen/>
				</div>
			</div>
		);
	}
}

export default Home;