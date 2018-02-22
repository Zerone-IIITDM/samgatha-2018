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
			            	<Link to='/beasuperhero' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Be a Superhero</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/syncGeet' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Sync Geet</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/dancewars' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Dance Wars</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/drishaym' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Drishyam</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/eloquent' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Eloquent</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/gaming' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Gaming</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/mayasrishti' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Mayasrishti</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/shutterup' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Hocus Focus</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/gaayak' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Gaayak</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/impulse' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Impulse</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/maskmaking' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Mask Making</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/duetdance' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Duet Dance</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/photoon' style={styles.links}><div className="cauldron">
			            		<div className="eventName">PhotoOn</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/pictionary' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Pictionary</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/drracist' style={styles.links}><div className="cauldron">
			            		<div className="eventName">DR. Racist</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/blindfill' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Blind Fill</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/blowball' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Blow Ball</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/balloonbash' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Balloon Bash</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/balloonexpress' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Balloon Express</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/queenofsheba' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Queen of Sheba</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/lawyerup' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Lawyer Up</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/resonance' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Resonance</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
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