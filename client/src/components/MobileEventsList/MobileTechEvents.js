import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobileTechEvents.css';

class MobileTechEventsList extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
    render(){
		return(
			<div className="mobiletechEventsContaier">
				<div className="mobileeventsHeader">
	              Technical Events
	            </div>
	            <div className="mobileeventsGrid">
	            	<div className="mobileblocks">
		            	<Link to='/chakarvyuh' style={styles.links}><div className="mobiletechEventBlock">
		            		Chakravyuha
		            	</div></Link>
		            	<Link to='/warofwatts' style={styles.links}><div className="mobiletechEventBlock">
		            		War of Watts
		            	</div></Link>
		            	<Link to='/tech4help' style={styles.links}><div className="mobiletechEventBlock">
		            		Tech4Help
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/designception' style={styles.links}><div className="mobiletechEventBlock">
		            		Designception
		            	</div></Link>
		            	<Link to='/relaycad' style={styles.links}><div className="mobiletechEventBlock">
		            		Relay Design
		            	</div></Link>
		            	<Link to='/battlezone' style={styles.links}><div className="mobiletechEventBlock">
		            		Battle Zone
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
		            	<Link to='/sbc' style={styles.links}><div className="mobiletechEventBlock" style={{fontSize:'15px'}}>
		            		Samgatha Business Challenge
		            	</div></Link>
		            	<Link to='/appathon' style={styles.links}><div className="mobiletechEventBlock">
		            		App-A-thon
		            	</div></Link>
		            	<Link to='/codeauction' style={styles.links}><div className="mobiletechEventBlock">
		            		Code Auction
		            	</div></Link>
	            	</div>
	            	<div className="mobileblocks">
	            		<Link to='/quiz' style={styles.links}><div className="mobiletechEventBlock">
		            		Quiz
		            	</div></Link>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default MobileTechEventsList;

const styles = {
	links:{
		textDecoration:'none',
		color:'white',
	},
};