import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './MobileTechEvents.css';

class MobileCultEventsList extends Component{
	render(){
		return(
			<div className="mobiletechEventsContaier">
				<div className="mobileeventsHeader">
	              Cultural Events
	            </div>
	            <div className="mobiletecheventsGrid">
	            	<div className="mobileblocks">
		            	<Link to='/beasuperhero' style={styles.links}><div className="mobiletechEventBlock">
		            		Be a Superhero
		            	</div></Link>
		            	<Link to='/battleofbands' style={styles.links}><div className="mobiletechEventBlock">
		            		Battle of bands
		            	</div></Link>
		            	<Link to='/dancewars' style={styles.links}><div className="mobiletechEventBlock">
		            		Dance Wars
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/drishyam' style={styles.links}><div className="mobiletechEventBlock">
		            		Drishyam
		            	</div></Link>
		            	<Link to='/eloquent' style={styles.links}><div className="mobiletechEventBlock">
		            		Eloquent
		            	</div></Link>
		            	<Link to='/gaming' style={styles.links}><div className="mobiletechEventBlock">
		            		Gaming
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/mayasrishti' style={styles.links}><div className="mobiletechEventBlock">
		            		Mayasrishti
		            	</div></Link>
		            	<Link to='/shutterup' style={styles.links}><div className="mobiletechEventBlock">
		            		Shutter Up
		            	</div></Link>
		            	<Link to='/samidol' style={styles.links}><div className="mobiletechEventBlock">
		            		Sam Idol
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/impulse' style={styles.links}><div className="mobiletechEventBlock">
		            		Impulse
		            	</div></Link>
		            	<Link to='/maskmaking' style={styles.links}><div className="mobiletechEventBlock">
		            		Mask Making
		            	</div></Link>
		            	<Link to='/duetdance' style={styles.links}><div className="mobiletechEventBlock">
		            		Duet Dance
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/photoon' style={styles.links}><div className="mobiletechEventBlock">
		            		PhotoOn
		            	</div></Link>
		            	<Link to='/pictionary' style={styles.links}><div className="mobiletechEventBlock">
		            		Pictionary
		            	</div></Link>
		            	<Link to='/drracist' style={styles.links}><div className="mobiletechEventBlock">
		            		DR. Racist
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/blindfill' style={styles.links}><div className="mobiletechEventBlock">
		            		Blind Fill
		            	</div></Link>
		            	<Link to='/blowball' style={styles.links}><div className="mobiletechEventBlock">
		            		Blow Ball
		            	</div></Link>
		            	<Link to='/balloonbash' style={styles.links}><div className="mobiletechEventBlock">
		            		Balloon Bash
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/balloonexpress' style={styles.links}><div className="mobiletechEventBlock">
		            		Balloon Express
		            	</div></Link>
		            	<Link to='/queenofsheba' style={styles.links}><div className="mobiletechEventBlock">
		            		Queen of Sheba
		            	</div></Link>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default MobileCultEventsList;

const styles = {
	links:{
		textDecoration:'none',
		color:'white',
	},
};