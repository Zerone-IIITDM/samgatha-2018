import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './MobileTechEvents.css';

class MobileCultEventsList extends Component{
	render(){
		return(
			<div className="mobiletechEventsContaier">
				<div className="mobileeventsHeader">
	              Technical Events
	            </div>
	            <div className="mobiletecheventsGrid">
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock">
		            		Battle of Bands
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Be a Superhero
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Dance Wars
		            	</div>
	            	</div>
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock">
		            		Drishyam
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Eloquent
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Gaming
		            	</div>
	            	</div>
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock">
		            		Mayasrishti
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Shutter Up
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Sam Idol
		            	</div>
	            	</div>
	            	<div className="mobileblocks">
		            	<div className="mobiletechEventBlock">
		            		Impulse
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Mask Making
		            	</div>
		            	<div className="mobiletechEventBlock">
		            		Duet Dance
		            	</div>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default MobileCultEventsList;