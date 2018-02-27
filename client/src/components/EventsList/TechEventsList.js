import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EventsList.css';

class TechEventsList extends Component
{
	componentDidMount ()
	{
		window.scrollTo(0, 0)
    }
	render()
    {
		return(
			<div className="techEventsContaier">
				<div className="eventsHeader">
	              Technical Events
	            </div>
	            <div className="eventsGrid">
					<div className="techblocks">
	            		<div className="blockLine">
							<Link to='/samgathaBusinessChallenge' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Samgatha Business Challenge</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
					<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/chakravyuha' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Chakravyuha</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/warOfWatts' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">War of Watts</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/appAThon' style={styles.links}><div className="cauldron">
			            		<div className="eventName">App-A-thon</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
			            	<Link to='/cleanTheSpace' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Clean The Space</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/relayDesign' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Relay Design</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/tech4Help' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Tech4Help</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
							<Link to='/triviosity' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Triviosity</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/junkyardWars' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Junkyard Wars</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/codeAution' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Code Auction</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
					<div className="techblocks">
	            		<div className="blockLine">
							<Link to='/goLogicYourself' style={styles.links,{paddingRight:'100px'}}><div className="cauldron">
			            		<div className="eventName" >Go Logic Yourself</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
							<Link to='/pitchPlease' style={styles.links,{paddingLeft:'100px'}}><div className="cauldron">
			            		<div className="eventName">Pitch Please</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="techblocks">
	            		<div className="blockLine">
							<Link to='/paperPresentation' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Technical Paper Presentation</div>
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
