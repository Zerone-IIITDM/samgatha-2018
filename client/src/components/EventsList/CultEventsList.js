import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CultEventsList.css';

class CultEventsList extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
    render(){
		return(
			<div className="cultEventsContaier">
				<div className="eventsHeader">
	              Cultural Events
	            </div>
	            <div className="culteventsGrid">
	            	<div className="blocks">
		            	<div className="blockLine">
			            	<Link to='/beASuperHero' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Be a Superhero</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/battleOfBands' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Battle of Bands</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/danceWars' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Dance Wars</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/drishyam' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Drishyam</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/eloquent' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Eloquent</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/dota' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Dota</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
					<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/fifa' style={styles.links}><div className="cauldron">
			            		<div className="eventName">FIFA</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/csgo' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">CS:GO</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/miniMilitia' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Mini Militia</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/mayaSrishti' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Mayasrishti</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/hocusFocus' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Hocus Focus</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/gaayak' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Gayaak</div>
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
			            	<Link to='/maskMaking' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Mask Making</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/duetDance' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Coupling</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/photON' style={styles.links}><div className="cauldron">
			            		<div className="eventName">PhotOn</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/pictionary' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Pictionary</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/syncGeet' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Sync-Geet</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/blindFill' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Blind Fill</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/blowBall' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Blow Ball</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/balloonBash' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Balloon Bash</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/balloonExpress' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Balloon Express</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/queenOfSheeba' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Queen of Sheeba</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/lawyerUp' style={styles.links}><div className="cauldron">
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