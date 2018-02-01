import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
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
		            	<Link to='/chakarvyuh' style={styles.links}><div className="techEventBlock">
		            		Chakravyuha
		            	</div></Link>
		            	<Link to='/warofwatts' style={styles.links}><div className="techEventBlock">
		            		War of Watts
		            	</div></Link>
		            	<Link to='/tech4help' style={styles.links}><div className="techEventBlock">
		            		Tech4Help
		            	</div></Link>
	            	</div>
	            	<div className="blocks">
		            	<Link to='/designception' style={styles.links}><div className="techEventBlock">
		            		Designception
		            	</div></Link>
		            	<Link to='/relaycad' style={styles.links}><div className="techEventBlock">
		            		RelayCAD
		            	</div></Link>
		            	<Link to='/battlezone' style={styles.links}><div className="techEventBlock">
		            		Battle Zone
		            	</div></Link>
	            	</div>
	            	<div className="blocks">
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