import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './CultEventsList.css';

class CultEventsList extends Component{
	render(){
		return(
			<div className="cultEventsContaier">
				<div className="eventsHeader">
	              Cultural Events
	            </div>
	            <div className="culteventsGrid">
	            	<div className="blocks">
		            	<div className="cultEventBlock">
		            		Battle of Bands
		            	</div>
		            	<div className="cultEventBlock">
		            		Be a Superhero
		            	</div>
		            	<div className="cultEventBlock">
		            		Dance Wars
		            	</div>
	            	</div>
	            	<div className="blocks">
		            	<div className="cultEventBlock">
		            		Drishyam
		            	</div>
		            	<div className="cultEventBlock">
		            		Eloquent
		            	</div>
		            	<div className="cultEventBlock">
		            		Gaming
		            	</div>
	            	</div>
	            	<div className="blocks">
		            	<div className="cultEventBlock">
		            		Mayasrishti
		            	</div>
		            	<div className="cultEventBlock">
		            		Shutter Up
		            	</div>
		            	<div className="cultEventBlock">
		            		Sam Idol
		            	</div>
	            	</div>
	            	<div className="blocks">
		            	<div className="cultEventBlock">
		            		Impulse
		            	</div>
		            	<div className="cultEventBlock">
		            		Mask Making
		            	</div>
		            	<div className="cultEventBlock">
		            		Duet Dance
		            	</div>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default CultEventsList;