import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './Workshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Workshop extends Component{
	render(){
		return(
			<div className="workshopOneContainer">
				<div className="workshopOneHeader">
					Workshop
				</div>
				<div className="workshopOneContent">
	              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard<br /> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
	            </div>
	            <div className="workshopList">
	            	<Link to="/WorkshopOne"><div className="workshopOne">
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
		            </div></Link>
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
	            </div>
			</div>
		);
	}
}

export default Workshop;
