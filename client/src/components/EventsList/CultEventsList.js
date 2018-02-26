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
			            	<Link to='/battleOfBands' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Battle of Bands</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/syncGeet' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Sync-Geet</div>
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
			            	<Link to='/gaayak' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Gaayak</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/coupling' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Coupling</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/impulse' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Impulse</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
					<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/beASuperHero' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Be a Superhero</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/drishyam' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Drishyam</div>
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
			            	<Link to='/mayaSrishti' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Mayasrishti</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/eloquent' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Eloquent</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/maskMaking' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Mask Making</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/hocusFocus' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Hocus Focus</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/photON' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">PhotON</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/queenOfSheeba' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Queen of Sheeba</div>
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
			            	<Link to='/pictionary' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Pictionary</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/blindFill' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Blind Fill</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/blowBall' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Blow Ball</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/balloonBash' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">Balloon Bash</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/instyle' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Instyle</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/dota' style={styles.links}><div className="cauldron">
			            		<div className="eventName">Dota 2</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/fifa' style={styles.links}><div className="cauldron">
			            		<div className="eventName paddingCont">FIFA</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            	<Link to='/csgo' style={styles.links}><div className="cauldron">
			            		<div className="eventName">CS:GO</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
			            </div>
	            	</div>
	            	<div className="blocks">
	            		<div className="blockLine">
			            	<Link to='/miniMilitia' style={styles.links}><div className="cauldron" style={{marginLeft:"0px"}}>
			            		<div className="eventName">Mini Militia</div>
			            		<img src={require("../icons/garba.png")} alt="contentIcon" />
			            	</div></Link>
							<Link to='/balloonExpress' style={styles.links}><div className="cauldron" style={{marginLeft:"100px"}}>
			            		<div className="eventName">Balloon Express</div>
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