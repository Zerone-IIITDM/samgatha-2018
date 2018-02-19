import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
		            	<div className="blockLine">
							<Link to='/beasuperhero' style={styles.links}><div className="techEventBlock">
			            		
			            		<div className="eventName">Be a Superhero</div>
			            	</div></Link>
							<Link to='/battleofbands' style={styles.links}><div className="techEventBlock">
								<img src={require("../icons/battleOfBands.png")} style={{marginTop:'-10px'}} alt="contentIcon" />
			            		<div className="eventName">Battle of Bands</div>
			            	</div></Link>
			            	<Link to='/dancewars' style={styles.links}><div className="techEventBlock">
								
			            		<div className="eventName">Dance Wars</div>
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
							<Link to='/drishaym' style={styles.links}><div className="techEventBlock">
								<img src={require("../icons/drishaym.png")} alt="contentIcon" />
			            		<div className="eventName">Drishyam</div>
			            	</div></Link>
			            	<Link to='/eloquent' style={styles.links}><div className="cultEventBlock">
			            		Eloquent
			            	</div></Link>
			            	<Link to='/gaming' style={styles.links}><div className="cultEventBlock">
			            		Gaming
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
							<Link to='/mayasrishti' style={styles.links}><div className="techEventBlock">
								<img src={require("../icons/maya.png")} style={{marginTop:'-10px'}} alt="contentIcon" />
			            		<div className="eventName">Mayasrishti</div>
			            	</div></Link>
			            	<Link to='/shutterup' style={styles.links}><div className="cultEventBlock">
			            		Shutter Up
			            	</div></Link>
			            	<Link to='/samidol' style={styles.links}><div className="cultEventBlock">
			            		Sam Idol
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
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
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/photoon' style={styles.links}><div className="cultEventBlock">
			            		PhotoOn
			            	</div></Link>
			            	<Link to='/pictionary' style={styles.links}><div className="cultEventBlock">
			            		Pictionary
			            	</div></Link>
			            	<Link to='/drracist' style={styles.links}><div className="cultEventBlock">
			            		DR. Racist
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/blindfill' style={styles.links}><div className="cultEventBlock">
			            		Blind Fill
			            	</div></Link>
			            	<Link to='/blowball' style={styles.links}><div className="cultEventBlock">
			            		Blow Ball
			            	</div></Link>
			            	<Link to='/balloonbash' style={styles.links}><div className="cultEventBlock">
			            		Balloon Bash
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/balloonexpress' style={styles.links}><div className="cultEventBlock">
			            		Balloon Express
			            	</div></Link>
			            	<Link to='/queenofsheba' style={styles.links}><div className="cultEventBlock">
			            		Queen of Sheba
			            	</div></Link>
			            </div>
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