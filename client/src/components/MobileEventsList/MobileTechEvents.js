import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './MobileTechEvents.css';

class MobileTechEventsList extends Component{
	render(){
		return(
			<div className="mobiletechEventsContaier">
				<div className="mobileeventsHeader">
	              Technical Events
	            </div>
	            <div className="mobileeventsGrid">
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock">
		            		Chakravyuha
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		War of Watts
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Tech4Help
		            	</div>
	            	</div>
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock">
		            		Designception
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		RelayCAD
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Battle Zone
		            	</div>
	            	</div>
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock" style={{fontSize:'15px'}}>
		            		Samgatha Business Challenge
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		App-A-thon
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Code Auction
		            	</div>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default MobileTechEventsList;