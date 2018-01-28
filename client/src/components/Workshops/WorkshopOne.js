import React,{ Component } from 'react';
import './WorkshopOne.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';


class WorkshopOne extends Component{
	render(){
		return(
			<div className="workshopOneContainer">
				<div className="workshopOneHeader">
					Workshop #1
				</div>
				<div className="workshopOneRegister">
				 REGISTER
	            </div>
	            <div className="WorkshopOneBasket">
		            <div className="workshopOneAbout">
		            	ABOUT
		            </div>
		             <div className="workshopOneReg">
		            	REGISTRATION DETAILS
		            </div>
		            <div className="workshopOneVenue">
		            	VENUE & TIMING
		            </div>
		             <div className="workshopOneContacts">
		            	CONTACTS
		            </div>
	            </div>

			</div>
		);
	}
}

export default WorkshopOne;