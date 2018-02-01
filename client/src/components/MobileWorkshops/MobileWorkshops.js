import React, { Component } from 'react';
import CountTo from 'react-count-to';
import './MobileWorkshops.css';


class Card extends Component{
	render(){
		return(
			<li><a href="#"><div className='mobilet1' id = 'mobilew1' style={{backgroundImage: 'url('+require(''+this.props.img1+'')+')'}}></div></a></li>	
		);		
	}
}


class MobileWorkshops extends Component{
	render(){
		return(
			<div className="mobileOuter">
					<div className="mobileTitletext">
					<b> WORKSHOPS </b>
					</div>
					<div className="mobileText">
					Workshops coming soon.
					</div>

					{/*<div className="mobileWorkshop">
						<div className="mobilecard">Workshop</div>
						<div className="mobilecard">Workshop</div>
						<div className="mobilecard">Workshop</div>
					</div>*/}
			</div>



			);
	}
}

export default MobileWorkshops;