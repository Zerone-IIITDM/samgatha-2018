import React,{ Component } from 'react';
// import { Link } from 'react-router-dom';
import './Workshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Workshop extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
	render(){
		return(
			<div className="workshopContainer">
				<div className="workshopHeader">
					Workshop
				</div>
				<div className="workshop1">
					<div>IoT Workshop</div>
					<img src={require("../icons/ib.jpeg")}alt="workshop" />
				</div>
				<div className="workshop2">
					<div>Urban Dance Workshop</div>
					<img src={require("../icons/dance.jpg")}alt="workshop" />
					<div className="workshopDetails">
					<div className="workshopInnerText">
					Urban Choreography is a style of dance, community and lifestyle revolving around choreographed pieces and performances by a dancer or a group of dancers.
					Samgatha 2k18 proudly presents a workshop on "urban Choreography" by Mr. Ravi Varma founder and artistic director of "BFAB dance crew" and "United Grooves school of dance" 
					Date: March 11, 2018
					Time: 11:00a.m - 12:30p.m
					Venue: laboratory block., IIITDM campus
					Fee: 250 INR
					paytm: 9962278241
					Mail the screenshot of receipt to <a href="mailto:urbanchoreo.samgatha@gmail.com" target="_top">"urbanchoreo.samgatha@gmail.com"</a>
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Workshop;
