import React,{ Component } from 'react';
// import { Link } from 'react-router-dom';
import './Workshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Workshop extends Component{
	render(){
		return(
			<div className="workshopContainer">
				<div className="workshopHeader">
					Workshop
				</div>
				<div className="workshopContent">
	              Coming soon!!
	            </div>
	            {/*<div className="workshopList">
	            	<div className="workshopOne">
		            	<div className="workshopImage">
		            	</div>
		            	<div className="workshopDetails">
		            		<Link to="/WorkshopOne" style={{textDecoration:'none'}}><div className="workshopName">
		            			AWS Deep Learning Workshop
		            		</div></Link>
		            		<div className="speakerAndShit">
		            			By Speaker<br/>Speaker Qualifications<br />Date<br />Venue
		            		</div>
		            	</div>
		            </div>
		            <div className="workshopOne">
		            	<div className="workshopImage">
		            	</div>
		            	<div className="workshopDetails">
		            		<div className="workshopName">
		            			AWS Deep Learning Workshop
		            		</div>
		            		<div className="speakerAndShit">
		            			By Speaker<br/>Speaker Qualifications<br />Date<br />Venue
		            		</div>
		            	</div>
		            </div>
	            </div>*/}
			</div>
		);
	}
}

export default Workshop;
