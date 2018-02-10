import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EventsList.css';

class TechEventsList extends Component{
	render(){
		return(
			<div className="techEventsContaier">
				<div className="eventsHeader">
	              Technical Events
	            </div>
	            <div className="eventsGrid">
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/chakarvyuh' style={styles.links}><div className="techEventBlock">
			            		<img src={require("../icons/Chakravyuha.png")} alt="contentIcon" />
			            		<div className="eventName">Chakravyuha</div>
			            	</div></Link>
			            	<Link to='/warofwatts' style={styles.links}><div className="techEventBlock">
			            		<img src={require("../icons/WarOfWatts.png")} alt="contentIcon" />
			            		<div className="eventName">War of Watts</div>
			            	</div></Link>
			            	<Link to='/tech4help' style={styles.links}><div className="techEventBlock">
			            		<img src={require("../icons/Tech4Help.png")} alt="contentIcon" />
			            		<div className="eventName">Tech4Help</div>
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/designception' style={styles.links}><div className="techEventBlock">
			            		Designception
			            	</div></Link>
			            	<Link to='/relaycad' style={styles.links}><div className="techEventBlock">
			            		<img src={require("../icons/RelayDesign.png")} alt="contentIcon" />
			            		<div className="eventName">Relay Design</div>
			            	</div></Link>
			            	<Link to='/battlezone' style={styles.links}><div className="techEventBlock">
			            		<img src={require("../icons/BattleZone.png")} alt="contentIcon" />
			            		<div className="eventName">Battle Zone</div>
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/sbc' style={styles.links}><div className="techEventBlock" style={{fontSize:'15px'}}>
			            		Samgatha Business Challenge
			            	</div></Link>
			            	<Link to='/appathon' style={styles.links}><div className="techEventBlock">
			            		App-A-thon
			            	</div></Link>
			            	<Link to='/codeauction' style={styles.links}><div className="techEventBlock">
			            		Code Auction
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/quiz' style={styles.links}><div className="techEventBlock">
			            		<img src={require("../icons/Quiz.png")}alt="contentIcon" />
			            		<div className="eventName">Quiz</div>
			            	</div></Link>
			            </div>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default TechEventsList;

const styles = {
	links:{
		textDecoration:'none',
		color:'white',
	},
};
