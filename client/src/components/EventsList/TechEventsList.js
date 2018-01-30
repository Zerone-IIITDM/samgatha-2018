import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './EventsList.css';

class TechEventsList extends Component{
	render(){
		return(
			<div className="techEventsContaier">
				<div className="eventsHeader">
	              Technical Events
	            </div>
	            <div className="eventsGrid">
	            	<div className="blocks">
		            	<div className="techEventBlock">
		            		Chakravyuha
		            	</div>
		            	<div className="techEventBlock">
		            		War of Watts
		            	</div>
		            	<div className="techEventBlock">
		            		Tech4Help
		            	</div>
	            	</div>
	            	<div className="blocks">
		            	<div className="techEventBlock">
		            		Designception
		            	</div>
		            	<div className="techEventBlock">
		            		RelayCAD
		            	</div>
		            	<div className="techEventBlock">
		            		Battle Zone
		            	</div>
	            	</div>
	            	<div className="blocks">
		            	<div className="techEventBlock" style={{fontSize:'15px'}}>
		            		Samgatha Business Challenge
		            	</div>
		            	<div className="techEventBlock">
		            		App-A-thon
		            	</div>
		            	<div className="techEventBlock">
		            		Code Auction
		            	</div>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default TechEventsList;