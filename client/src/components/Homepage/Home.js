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
							ILLUSTRATION<br />TO BE<br />PLACE HERE
						</div>
					</div>
					<div className="rightSide">
						<div className="rightSideHeaderText">
							About Us
						</div>
						<div className="rightSideContainerText">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
						</div>
						<div className="stats">
							<div className="circle1">
								<div className="circleStat">
								</div>
								<div className="statName">
									<CountTo to={22} speed={2000} />+ Events
								</div>
							</div>
							<div className="circle1">
								<div className="circleStat">
								</div>
								<div className="statName">
									<CountTo to={22} speed={2000} />+ Events
								</div>
							</div>
							<div className="circle1">
								<div className="circleStat">
								</div>
								<div className="statName">
									<CountTo to={22} speed={2000} />+ Events
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