import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
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
		            	
		            	<Link to='/beasuperhero' style={styles.links}><div className="cultEventBlock">
		            		Be a Superhero
		            	</div></Link>
		            	<Link to='/battleofbands' style={styles.links}>
		            		<div className="cultEventBlock">
		            		Battle of Bands
		            		</div>
		            	</Link>
		            	<Link to='/dancewars' style={styles.links}><div className="cultEventBlock">
		            		Dance Wars
		            	</div></Link>
	            	</div>
	            	<div className="blocks">
		            	<Link to='/drishyam' style={styles.links}><div className="cultEventBlock">
		            		Drishyam
		            	</div></Link>
		            	<Link to='/eloquent' style={styles.links}><div className="cultEventBlock">
		            		Eloquent
		            	</div></Link>
		            	<Link to='/gaming' style={styles.links}><div className="cultEventBlock">
		            		Gaming
		            	</div></Link>
	            	</div>
	            	<div className="blocks">
		            	<Link to='/mayasrishti' style={styles.links}><div className="cultEventBlock">
		            		Mayasrishti
		            	</div></Link>
		            	<Link to='/shutterup' style={styles.links}><div className="cultEventBlock">
		            		Shutter Up
		            	</div></Link>
		            	<Link to='/samidol' style={styles.links}><div className="cultEventBlock">
		            		Sam Idol
		            	</div></Link>
	            	</div>
	            	<div className="blocks">
		            	<Link to='/impulse' style={styles.links}><div className="cultEventBlock">
		            		Impulse
		            	</div></Link>
		            	<Link to='/maskmaking' style={styles.links}><div className="cultEventBlock">
		            		Mask Making
		            	</div></Link>
		            	<Link to='/duetdance' style={styles.links}><div className="cultEventBlock">
		            		Duet Dance
		            	</div></Link>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default CultEventsList;

const styles = {
	links:{
		textDecoration:'none',
		color:'white',
	},
};