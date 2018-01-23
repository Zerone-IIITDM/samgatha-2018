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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui eros, 
					vehicula eu pellentesque id, dapibus non lacus.Quisque commodo sed dolor posuere consectetur. 
					Duis dignissim tempor erat, maximus elementum sapien mattis eget Aliquam lacus erat,
			 		suscipit sit amet lacus ac, pellentesque 
			 		convallis nunc Integer pellentesque libero vitae nisi placerat, sed placerat enim finibus.
			 		Proin et lorem eros.Vestibulum sed magna ullamcorper, semper velit in, pretium tellus. Proin vel bibendum 
			 		orci. 
					</div>

					<div className="mobileWorkshop">
						<div className="mobilecard">Workshop</div>
						<div className="mobilecard">Workshop</div>
						<div className="mobilecard">Workshop</div>
					</div>
			</div>



			);
	}
}

export default MobileWorkshops;