import React,{Component} from "react";
import "./MobileContactUs.css";
class MobileContactUs extends Component{
	render(){
		return(
			<div className="mobilemainPage">
				<div className="mobileheading">CONTACTS</div>
				<div className="mobilecontent">
					<div className="mobileclubName"><u>QMS</u></div>
					<div className="mobileclub">
						<div className="mobilemember">
							<div className="mobilememberPhoto"></div>
							<div className="mobilememberInfo">Mainkandan<br />Mob:987654321</div>
						</div>
						<div className="mobilemember">
							<div className="mobilememberPhoto"></div>
							<div className="mobilememberInfo">Mainkandan<br />Mob:987654321</div>
						</div>
						<div className="mobilemember">
							<div className="mobilememberPhoto"></div>
							<div className="mobilememberInfo">Mainkandan<br />Mob:987654321</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MobileContactUs;
