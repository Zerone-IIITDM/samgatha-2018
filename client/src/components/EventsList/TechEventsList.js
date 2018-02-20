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
			            	<Link to='/chakarvyuh' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Chakravyuha</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/warofwatts' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">War of Watts</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/tech4help' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Tech4Help</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/designception' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Designception</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/relaycad' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Relay Design</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/battlezone' style={styles.links}><div className="cauldron">
			            		<div className="eventName">BattleZone</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/sbc' style={styles.links}><div className="cauldron">
			            		<div className="eventName">SBC</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/appathon' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">App-A-thon</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/codeauction' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Code Auction</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/quiz' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Quiz</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
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
